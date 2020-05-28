import React from "react";
import Contact from "../components/contact";
import Footer from "./footer";
import Navbar from "./navbar";

function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen px-4 container">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Contact />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
