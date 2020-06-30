import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { Spinner } from '../../src/common';
import { AppContext } from '../../src/context/AppContext';

export default () => {
  const { slug } = useContext(AppContext);
  const router = useRouter();
  const { periodicity } = router.query;

  useEffect(() => {
    const redirect = `/${periodicity}/${slug}`;
    router.push(`/[periodicity]/[slug]`, redirect);
  }, [periodicity]);

  return <Spinner />;
};
