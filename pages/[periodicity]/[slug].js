import fs from 'fs';
import { getCurrentMonth } from 'hijri-ma';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { Daily, Monthly } from '../../src/components';
import { FullDate } from '../../src/components/common';
import { SubTitle } from '../../src/components/dsl';
import { Layout } from '../../src/components/layout';
import {
  AppContext,
  DAILY,
  initState,
  MONTHLY,
  PERIODICITY,
  SLUG
} from '../../src/context';
import { HIJRI_YEAR } from '../../src/settings';
import {
  getAllCities,
  getDataFromCache,
  getPrayers,
  getPrayersForPeriod,
  isToday,
  storeInCache,
  UTC,
  utcDate,
  utcMonth
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
    <Layout>
      <FullDate today={todayPrayer}>
        {hijri => <SubTitle className="py-1 capitalize">{hijri}</SubTitle>}
      </FullDate>
      {periodComponent}
    </Layout>
  );
};

export async function getStaticPaths() {
  storeInCache(fs, { month: await getCurrentMonth({ year: HIJRI_YEAR }) });

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
      ? getPrayers(params.slug, utcMonth(), utcDate())
      : getPrayersForPeriod(
          params.slug,
          month[0].gregorianDate,
          month[month.length - 1].gregorianDate
        );

  prayers.forEach(p => {
    //FIXME: refactor this mess
    const hijri = month.find(
      e => e.gregorianDate === UTC(p.day).format('YYYY-MM-DD')
    );
    if (hijri) {
      p.hijri = hijri;
    }

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
