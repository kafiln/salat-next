import fs from 'fs';
import { getCurrentMonth } from 'hijri-ma';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import cities from '../../public/data/cities.json';
import { Daily, Monthly } from '../../src/components';
import {
  AppContext,
  DAILY,
  initState,
  MONTHLY,
  PERIODICITY,
  SLUG,
} from '../../src/context';
import { getPrayers, getPrayersForPeriod } from '../../src/utils/dataService';
import { isToday } from '../../src/utils/dates';

const CACHEJSON = 'cache.json';

const PeriodicitySwitch = ({ prayers }) => {
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

  return periodicity === DAILY ? (
    <Daily prayers={prayers} />
  ) : (
    <Monthly prayers={prayers} />
  );
};

export async function getStaticPaths() {
  if (!fs.existsSync(CACHEJSON)) {
    console.log('Creating cache data');
    const month = await getCurrentMonth();

    fs.writeFileSync(
      CACHEJSON,
      JSON.stringify({
        month,
      })
    );

    console.log('Done 🥳🥳');
  }

  let paths = [];
  [DAILY, MONTHLY].forEach((p) =>
    cities.forEach((c) => {
      paths.push({
        params: {
          slug: c.slug,
          periodicity: p,
        },
      });
    })
  );

  return {
    paths,
    fallback: false,
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
          month[0].georgianDate,
          month[month.length - 1].georgianDate
        );

  prayers.forEach((p) => {
    //FIXME: refactor this mess
    // Add hijri field
    const hijri = month.find(
      (e) => e.georgianDate === moment.utc(p.day).format('YYYY-MM-DD')
    );
    if (hijri) {
      p.hijri = hijri;
    }

    //add isToday boolean
    if (isToday(p.day)) p.isToday = true;
  });

  return {
    props: {
      prayers,
    },
    unstable_revalidate: 1,
  };
}

export default PeriodicitySwitch;
