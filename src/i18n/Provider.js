import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES } from '.';
import messages from './messages';

const Provider = ({ children, locale }) => {
  return (
    <IntlProvider
      textComponent={Fragment}
      locale={locale}
      defaultLocale={LOCALES.ARABIC.id}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  );
};

export default Provider;
