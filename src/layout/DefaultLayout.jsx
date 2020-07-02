import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex flex-col container mx-auto flex-grow p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
