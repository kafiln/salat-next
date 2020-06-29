import fs from 'fs';
import { getCurrentDate, getCurrentMonth } from 'hijri-ma';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import cities from '../../public/data/cities.json';
import Daily from '../../src/components/daily';
import Monthly from '../../src/components/monthly';
import { initState } from '../../src/context/actions';
import { AppContext } from '../../src/context/AppContext';
import { DAILY, MONTHLY, PERIODICITY, SLUG } from '../../src/context/types';
import { getPrayers, getPrayersForPeriod } from '../../src/utils/dataService';
const CACHEJSON = 'cache.json';
const PeriodicitySwitch = ({ prayers, date }) => {
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
    <Daily prayers={prayers} date={date} />
  ) : (
    <Monthly prayers={prayers} date={date} />
  );
};

export async function getStaticPaths() {
  const month = await getCurrentMonth();
  const date = await getCurrentDate();

  fs.writeFileSync(
    CACHEJSON,
    JSON.stringify({
      month,
      date,
    })
  );

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
  const { month, date } = JSON.parse(fs.readFileSync(CACHEJSON));
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

  return {
    props: {
      prayers,
      date,
    },
    unstable_revalidate: 1,
  };
}

export default PeriodicitySwitch;
