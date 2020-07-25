import Link from 'next/link';
import React from 'react';
import { CenteredLayout } from '../src/components/layout';

const NotFound = () => {
  return (
    <CenteredLayout>
      <div>
        <div>Page not found</div>
        <div>
          <Link href="/">
            <a>Go back</a>
          </Link>
        </div>
      </div>
    </CenteredLayout>
  );
};

export default NotFound;
