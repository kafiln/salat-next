import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import Logo from '../common/Logo';
import { AppContext } from '../context/AppContext';
import { DAILY, MONTHLY } from '../context/constants';

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
      <div class="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          {periods.map((p) => (
            <Link key={p} href="/[periodicity]/[slug]" as={`/${p}/${slug}`}>
              <a
                className={`mr-5 hover:text-gray-900 capitalize ${isActive(p)}`}
              >
                {p}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <a
              className={`mr-5 hover:text-gray-900 capitalize ${isActive(
                'contact'
              )}`}
            >
              contact
            </a>
          </Link>
        </nav>
        <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <Logo />
          <span class="ml-3 text-xl">Salat</span>
        </a>
        <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          {/* <button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
            Button
          </button>
          <LocationInput /> */}
        </div>
      </div>
    </header>
  );
}

export default Navigation;
