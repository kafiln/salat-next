import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen px-4 container mx-auto">
      <Navbar />
      <main className="flex flex-col flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
