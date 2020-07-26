import Head from 'next/head';
import React from 'react';
import { APPLICATION_NAME } from '../../settings';

const Seo = ({ title, description }) => {
  return (
    <Head>
      <title>{APPLICATION_NAME} - أوقات الصلاة الرسمية في المدن المغربية </title>
      <meta name="title" content="أوقات الصلاة الرسمية في المدن المغربية" />
      <meta
        name="description"
        content="أوقات الصلاة الرسمية في المدن المغربية"
      />


      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Arabic" />
      <meta name="revisit-after" content="1 days" />
      <meta name="author" content="Kafil Nasdami" />
      <meta
        name="google-site-verification"
        content="7TfdRHVbKRbDzcDXbzz07SmgWY2akphdvsxgqQaN00s"
      />
    </Head>
  );
};

export default Seo;
