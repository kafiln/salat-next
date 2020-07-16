import fs from 'fs';
import { getCurrentMonth } from 'hijri-ma';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { Daily, Monthly } from '../../src/components';
import { FullDate } from '../../src/components/common';
import { SubTitle } from '../../src/components/dsl';
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
  getDataFromCache,
  getPrayers,
  getPrayersForPeriod,
  isToday,
  storeInCache,
  UTC
} from '../../src/utils';
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
        {hijri => <SubTitle className="py-1 capitalize">{hijri}</SubTitle>}
      </FullDate>
      {periodComponent}
    </>
  );
};

export async function getStaticPaths() {
  // Cache this value to use in all getStatic props
  storeInCache(fs, { month: await getCurrentMonth() });

  let paths = [];
  [DAILY, MONTHLY].forEach(periodicity =>
    getAllCities().forEach(city => {
      paths.push({
        params: {
          slug: city.value,
          periodicity
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
  const { month } = getDataFromCache(fs);
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
      e => e.gregorianDate === UTC(p.day).format('YYYY-MM-DD')
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
