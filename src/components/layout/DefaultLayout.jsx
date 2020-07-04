import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  transition: all 0.5s ease;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
`;

function DefaultLayout({ children }) {
  return (
    <Layout className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex flex-col container mx-auto flex-grow p-4">
        {children}
      </main>
      <Footer />
    </Layout>
  );
}

export default DefaultLayout;
