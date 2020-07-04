import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { DAILY, MONTHLY } from '../../context/constants';
import { Logo } from '../common';

function Navigation() {
  const router = useRouter();

  const { slug } = useContext(AppContext);

  const active = 'underline';

  const periods = [DAILY, MONTHLY];

  const isActive = (path) => {
    return router.asPath.startsWith(`/${path}`) ? active : '';
  };

  return (
    <header>
      <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          {periods.map((p) => (
            <Link key={p} href="/[periodicity]/[slug]" as={`/${p}/${slug}`}>
              <a
                className={`mr-5 hover:text-gray-900 capitalize ${isActive(p)}`}
              >
                {p}
              </a>
            </Link>
          ))}
        </nav>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <Logo />
          <span className="ml-3 text-xl">Salat</span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <Link href="/contact">
            <a
              className={`mr-5 hover:text-gray-900 capitalize ${isActive(
                'contact'
              )}`}
            >
              contact
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
