import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { useIntl } from 'react-intl';
import { AppContext } from '../../context/AppContext';
import { DAILY, MONTHLY } from '../../context/constants';
import { LocationInput } from '../common';
import { Text, Title } from '../dsl';

function Menu() {
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
      <div className="py-4 w-3/5 mx-auto">
        <LocationInput />
      </div>
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

export default Menu;
