import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import cities from '../../public/data/cities.json';
import LanguageSwitch from '../common/LanguageSwitch';
import ThemeToggle from '../common/ThemeToggle';
import SelectList from '../components/select-list';
import { AppContext } from '../context/AppContext';

function SettingHeader() {
  const { slug, lang, periodicity } = useContext(AppContext);
  const router = useRouter();

  return (
    <header>
      <nav className="w-full mx-auto">
        {slug && (
          <SelectList
            className="sm:w-1/2 md:w-1/3"
            cities={cities}
            slug={slug}
            lang={lang}
            onChange={({ value }) => {
              const redirect = `/${periodicity}/${value}`;
              router.push(`/[periodicity]/[slug]`, redirect);
            }}
          />
        )}
        <ThemeToggle />
        <LanguageSwitch />
      </nav>
    </header>
  );
}

export default SettingHeader;
