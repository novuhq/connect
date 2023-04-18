'use client';

import { AnimatePresence, m, LazyMotion, domAnimation, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import Button from 'components/shared/button/button';
import Link from 'components/shared/link';
import MENUS from 'constants/menus';
import useSignIn from 'hooks/use-sign-in';

const ANIMATION_DURATION = 0.2;

const variants = {
  hidden: {
    opacity: 0,
    translateY: 30,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
  visible: {
    zIndex: 10,
    opacity: 1,
    translateY: 0,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

const MobileMenu = ({ isOpen = false, setIsOpen }) => {
  const { buttonState, signIn } = useSignIn();

  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isOpen, controls]);

  const handleLinkClick = (e) => {
    e.preventDefault();
    setIsOpen(false);

    window.location.href = e.target.href;
  };

  return (
    <LazyMotion features={domAnimation}>
      {isOpen && (
        <AnimatePresence>
          <m.div
            className="safe-paddings fixed inset-0 flex h-full w-full flex-col bg-black pt-16 sm:pt-[60px]"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
          >
            <nav className="flex h-full w-full overflow-x-hidden overflow-y-scroll">
              <ul className="my-auto flex w-full flex-col">
                {MENUS.mobile.map(({ to, text, target }, index) => (
                  <li key={index}>
                    <Link
                      className="text-2xl block w-full py-6 text-center"
                      theme="white"
                      size="xl"
                      to={to}
                      target={target}
                      onClick={handleLinkClick}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="sticky bottom-0 bg-black">
              <div className="container">
                <div className="flex w-full justify-between space-x-4 py-7">
                  <Button
                    className="xs:text-xs w-full"
                    size="sm"
                    theme="white-filled"
                    state={buttonState}
                    onClick={signIn}
                  >
                    Join Now
                  </Button>
                </div>
              </div>
            </div>
          </m.div>
        </AnimatePresence>
      )}
    </LazyMotion>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func.isRequired,
};

export default MobileMenu;
