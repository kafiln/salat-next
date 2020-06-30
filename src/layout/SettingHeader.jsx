import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import cities from '../../public/data/cities.json';
import LanguageSwitch from '../common/LanguageSwitch';
import ThemeToggle from '../common/ThemeToggle';
import SelectList from '../components/SelectList';
import { AppContext } from '../context/AppContext';

function SettingHeader() {
  const { slug, lang, periodicity, isRTL } = useContext(AppContext);
  const router = useRouter();

  return (
    <section>
      <nav className="w-full mx-auto flex items-center justify-between">
        <div className="md:w-1/5 sm:w-1/4 w-1/3">
          <SelectList
            cities={cities}
            slug={slug}
            lang={lang}
            isRtl={isRTL}
            onChange={({ value }) => {
              const redirect = `/${periodicity}/${value}`;
              router.push(`/[periodicity]/[slug]`, redirect);
            }}
          />
        </div>

        <div>
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      </nav>
    </section>
  );
}

export default SettingHeader;
