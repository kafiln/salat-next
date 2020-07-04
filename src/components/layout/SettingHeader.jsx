import React from 'react';
import { LocationInput } from '../common';
import LanguageSwitch from '../common/LanguageSwitch';
import ThemeToggle from '../common/ThemeToggle';

function SettingHeader() {
  return (
    <section className="bg-gray-300 py-2 border-b border-gray-500">
      <nav className="w-full flex flex-wrap items-center justify-between container mx-auto">
        <LanguageSwitch />
        <LocationInput />
        <ThemeToggle />
      </nav>
    </section>
  );
}

export default SettingHeader;
