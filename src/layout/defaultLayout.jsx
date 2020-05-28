import React from "react";
import Contact from "../components/contact";
import Footer from "./footer";
import Navbar from "./navbar";

function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen px-4 container">
      <Navbar />
      <main className="w-full mx-auto sm:w-1/2 md:w-3/5 lg:w-1/3 flex-grow">
        {children}
      </main>
      <Contact />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
