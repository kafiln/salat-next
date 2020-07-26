import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { Splash } from '../../src/components/layout';
import { DAILY, MONTHLY } from '../../src/context';
import { AppContext } from '../../src/context/AppContext';

export default () => {
  const { slug } = useContext(AppContext);
  const router = useRouter();
  const { periodicity } = router.query;

  useEffect(() => {
    const redirect = `/${periodicity}/${slug}`;
    if (periodicity === DAILY || periodicity === MONTHLY) {
      router.push(`/[periodicity]/[slug]`, redirect);
    } else {
      router.push('/404');
    }
  }, [periodicity]);

  return <Splash />;
};
