import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import cities from '../../public/data/cities.json';
import Daily from '../../src/components/daily';
import Monthly from '../../src/components/monthly';
import { initState } from '../../src/context/actions';
import { AppContext } from '../../src/context/AppContext';
import { DAILY, MONTHLY, PERIODICITY, SLUG } from '../../src/context/types';
import { getPrayers } from '../../src/utils/dataService';

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
  const prayers = getPrayers(
    params.slug,
    new Date().getUTCMonth(),
    params.periodicity === DAILY ? new Date().getUTCDate() : null
  );

  return {
    props: {
      prayers,
    },
    unstable_revalidate: 1,
  };
}

export default PeriodicitySwitch;
