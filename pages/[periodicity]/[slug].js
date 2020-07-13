import fs from 'fs';
import { getCurrentMonth } from 'hijri-ma';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { Daily, Monthly } from '../../src/components';
import { FullDate } from '../../src/components/common';
import { Title } from '../../src/components/dsl';
import {
  AppContext,
  DAILY,
  initState,
  MONTHLY,
  PERIODICITY,
  SLUG
} from '../../src/context';
import {
  getAllCities,
  getPrayers,
  getPrayersForPeriod,
  isToday
} from '../../src/utils';

const CACHEJSON = 'cache.json';

const AppContainer = ({ prayers }) => {
  const router = useRouter();

  let { periodicity, slug } = router.query;
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    localStorage.setItem(PERIODICITY, periodicity);
    localStorage.setItem(SLUG, slug);
    initState(dispatch);
    const redirect = `/${periodicity}/${slug}`;
    router.push(`/[periodicity]/[slug]`, redirect);
  }, [periodicity, slug]);

  const todayPrayer =
    periodicity === DAILY ? prayers[0] : prayers.find(p => p.isToday);
  const periodComponent =
    periodicity === DAILY ? (
      <Daily prayer={todayPrayer} />
    ) : (
      <Monthly prayers={prayers} />
    );

  return (
    <>
      <FullDate today={todayPrayer}>
        {hijri => <Title className="py-2 capitalize">{hijri}</Title>}
      </FullDate>
      {periodComponent}
    </>
  );
};

export async function getStaticPaths() {
  if (!fs.existsSync(CACHEJSON)) {
    console.log('Creating cache data');
    const month = await getCurrentMonth();

    fs.writeFileSync(
      CACHEJSON,
      JSON.stringify({
        month
      })
    );

    console.log('Done 🥳🥳');
  } else {
    console.log('Using cache data 😊');
  }

  let paths = [];
  [DAILY, MONTHLY].forEach(p =>
    getAllCities().forEach(c => {
      paths.push({
        params: {
          slug: c.value,
          periodicity: p
        }
      });
    })
  );

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { month } = JSON.parse(fs.readFileSync(CACHEJSON));
  const prayers =
    params.periodicity === DAILY
      ? getPrayers(
          params.slug,
          new Date().getUTCMonth(),
          new Date().getUTCDate()
        )
      : getPrayersForPeriod(
          params.slug,
          month[0].gregorianDate,
          month[month.length - 1].gregorianDate
        );

  prayers.forEach(p => {
    //FIXME: refactor this mess
    // Add hijri field
    const hijri = month.find(
      e => e.gregorianDate === moment.utc(p.day).format('YYYY-MM-DD')
    );
    if (hijri) {
      p.hijri = hijri;
    }

    //add isToday boolean
    if (isToday(p.day)) p.isToday = true;
  });

  return {
    props: {
      prayers
    },
    unstable_revalidate: 1
  };
}

export default AppContainer;
