import React from 'react';
import { LanguageSwitch, LocationInput, ThemeToggle } from '../common';

function SettingHeader() {
  return (
    <section className="bg-gray-300 py-1 px-2 sm:py-2 border-b border-gray-500">
      <nav className="flex container mx-auto items-center">
        <div className="py-2 flex justify-center">
          <ThemeToggle />
        </div>
        <div className="py-2 w-3/5 mx-auto">
          <LocationInput />
        </div>
        <div className="py-2">
          <LanguageSwitch />
        </div>
      </nav>
    </section>
  );
}

export default SettingHeader;
