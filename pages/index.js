import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { Spinner } from '../src/components/common';
import { CenteredLayout } from '../src/components/layout';
import { AppContext } from '../src/context/AppContext';

const Index = () => {
  const { slug, periodicity } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    const redirect = `/${periodicity}/${slug}`;
    router.push(`/[periodicity]/[slug]`, redirect);
  }, [periodicity, slug]);

  return (
    <CenteredLayout>
      <Spinner />;
    </CenteredLayout>
  );
};

export default Index;
