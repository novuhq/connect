/* eslint-disable @next/next/no-img-element */

'use client';

import PropTypes from 'prop-types';
import React from 'react';

import Burger from 'components/shared/burger';
import Button from 'components/shared/button';
import Link from 'components/shared/link';
import Novu from 'components/shared/novu';
import LINKS from 'constants/links';
import MENUS from 'constants/menus';
import useSignIn from 'hooks/use-sign-in';
import useUser from 'hooks/use-user';
import logo from 'images/logo.svg';

const Header = ({ isMobileMenuOpen = false, onBurgerClick }) => {
  const { user, isLoading } = useUser();
  const { buttonState, signIn } = useSignIn();

  return (
    <header className="safe-paddings absolute left-0 right-0 top-0 z-40 w-full">
      <div className="flex items-center justify-between px-10 py-3 md:px-7 md:py-4 sm:px-4 sm:py-3.5">
        <Link {...LINKS.home}>
          <img src={logo} width={102} height={32} loading="eager" alt="Novu" />
        </Link>

        <nav className="absolute left-1/2 -translate-x-1/2">
          <ul className="flex space-x-8 md:hidden">
            {MENUS.header.map(({ to, text, target }, index) => (
              <li key={index}>
                <a
                  className="inline-block text-14 leading-none text-white transition-colors duration-200 hover:text-primary-1"
                  href={to}
                  target={target}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-8 md:hidden">
          {user?.email && !isLoading && <Novu userEmail={user.email} />}
          {user?.image && !isLoading ? (
            <Link {...LINKS.profile}>
              <img
                className="h-10 w-10 rounded-full grayscale transition-all duration-200 group-hover:grayscale-0"
                src={user.image}
                width={40}
                height={40}
                loading="eager"
                alt={user?.name || ''}
              />
            </Link>
          ) : (
            <Button
              className="md:hidden"
              size="xs"
              theme="white-filled"
              state={buttonState}
              onClick={signIn}
            >
              Join Now
            </Button>
          )}
        </div>

        <div className="hidden items-center space-x-6 md:flex">
          {user?.email && !isLoading && <Novu userEmail={user.email} />}
          {user?.image && !isLoading && (
            <Link {...LINKS.profile}>
              <img
                className="h-8 w-8 rounded-full grayscale transition-all duration-200 group-hover:grayscale-0"
                src={user.image}
                width={32}
                height={32}
                loading="eager"
                alt={user?.name || ''}
              />
            </Link>
          )}

          <Burger
            className="hidden md:block"
            isToggled={isMobileMenuOpen}
            onClick={onBurgerClick}
          />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
};

export default Header;
