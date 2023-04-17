'use client';

import { SessionProvider } from 'next-auth/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import MobileMenu from 'components/shared/mobile-menu';

const MainLayout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHeaderBurgerClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <SessionProvider>
      <div className="flex min-h-screen flex-col">
        <Header isMobileMenuOpen={isMobileMenuOpen} onBurgerClick={handleHeaderBurgerClick} />
        <main>{children}</main>
        <Footer />
        <MobileMenu isOpen={isMobileMenuOpen} />
      </div>
    </SessionProvider>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
