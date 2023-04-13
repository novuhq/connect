import PropTypes from 'prop-types';
import React from 'react';

import Burger from 'components/shared/burger';
import Button from 'components/shared/button';
import Link from 'components/shared/link';
import LINKS from 'constants/links';
import MENUS from 'constants/menus';
import logo from 'images/logo.svg';

const Header = ({ isMobileMenuOpen, onBurgerClick }) => (
  <header className="safe-paddings absolute left-0 right-0 top-0 z-40 w-full">
    <div className="flex items-center justify-between px-10 py-3 md:px-7 md:py-4 sm:px-4 sm:py-3.5">
      <Link {...LINKS.home}>
        <img src={logo} width={102} height={32} loading="eager" alt="Novu" />
      </Link>

      <div className="flex items-center space-x-16 lg:space-x-14">
        <nav>
          <ul className="flex space-x-8 md:hidden">
            {MENUS.header.map(({ to, text, target }, index) => (
              <li key={index}>
                <Link to={to} theme="white" size="sm" target={target}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button className="md:hidden" size="xs" theme="white-filled" {...LINKS.getStarted}>
          Join Now
        </Button>
      </div>

      <Burger className="hidden md:block" isToggled={isMobileMenuOpen} onClick={onBurgerClick} />
    </div>
  </header>
);

Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
};

Header.defaultProps = {
  isMobileMenuOpen: false,
};

export default Header;
