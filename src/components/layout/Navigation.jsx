import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { useIntl } from 'react-intl';
import { AppContext } from '../../context/AppContext';
import { DAILY, MONTHLY } from '../../context/constants';
import { APPLICATION_NAME } from '../../settings';
import { Logo } from '../common';
import { Text } from '../dsl';

function Navigation() {
  const router = useRouter();
  const { formatMessage } = useIntl();
  const { slug } = useContext(AppContext);

  const active = 'underline';

  const periods = [DAILY, MONTHLY];
  // const pages = ['contact', 'about'];
  const pages = [];

  const isActive = path => {
    return router.asPath.startsWith(`/${path}`) ? active : '';
  };

  return (
    <header className=" container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
      <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        {periods.map(period => (
          <Link
            key={period}
            href="/[periodicity]/[slug]"
            as={`/${period}/${slug}`}
          >
            <a
              className={`mr-5 hover:text-gray-900 capitalize ${isActive(
                period
              )}`}
            >
              <Text>
                {formatMessage({
                  id: period
                })}
              </Text>
            </a>
          </Link>
        ))}
      </nav>
      <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
        <Logo size={48} />
        <span className="ml-3 text-xl">{APPLICATION_NAME}</span>
      </a>
      <nav className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
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
