import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { useIntl } from 'react-intl';
import { AppContext } from '../../context/AppContext';
import { DAILY, MONTHLY } from '../../context/constants';
import { APPLICATION_NAME } from '../../settings';
import { Logo } from '../common';
import { Text, Title } from '../dsl';

function Navigation() {
  const router = useRouter();
  const { formatMessage } = useIntl();
  const { slug } = useContext(AppContext);

  const active = 'font-bold rounded-md bg-gray-200 px-4 py-2';

  const periods = [DAILY, MONTHLY];
  // const pages = ['contact', 'about'];
  const pages = [];

  const isActive = path => {
    return router.asPath.startsWith(`/${path}`) ? active : '';
  };

  return (
    <header className=" container mx-auto flex flex-wrap py-2 flex-col  items-center">
      <nav className="flex  flex-wrap items-center text-base">
        {periods.map(period => (
          <Link
            key={period}
            href="/[periodicity]/[slug]"
            as={`/${period}/${slug}`}
          >
            <a className={`mr-5 capitalize ${isActive(period)}`}>
              <Title>
                {formatMessage({
                  id: period
                })}
              </Title>
            </a>
          </Link>
        ))}
      </nav>
      <a className="flex order-first  title-font font-medium items-center text-gray-900 mb-4 ">
        <Logo size={48} />
        <span className="ml-3 text-xl">{APPLICATION_NAME}</span>
      </a>
      <nav className="inline-flex ml-5">
        {pages.map(page => (
          <Link key={page} href={`/${page}`}>
            <a
              className={`mr-5 hover:text-gray-900 capitalize ${isActive(
                page
              )}`}
            >
              <Text>{page}</Text>
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Navigation;
