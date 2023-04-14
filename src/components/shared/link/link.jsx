/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import clsx from 'clsx';
import { m, LazyMotion, domAnimation, useAnimation } from 'framer-motion';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const DEFAULT_EASE = [0.5, 0.5, 0.5, 1];

const styles = {
  base: 'inline-block leading-none',
  size: {
    base: 'text-16',
    sm: 'text-14',
  },
  theme: {
    primary: 'text-primary-1 transition-colors duration-200 hover:text-white',
    'primary-underline':
      'text-primary-1 relative tracking-wide uppercase pb-px transition-colors duration-200 hover:text-primary-1',
    white: 'text-white hover:text-primary-1 transition-colors duration-200',
  },
};

const underlineVariants = {
  initial: {
    right: 0,
    left: 'auto',
    width: '100%',
    scaleX: -1,
  },
  start: {
    right: 0,
    left: 'auto',
    width: 0,
    scaleX: -1,
    transition: {
      duration: 0.25,
      ease: DEFAULT_EASE,
    },
    transitionEnd: {
      right: 'auto',
      left: 0,
      scaleX: 1,
    },
  },
  finish: {
    width: '100%',
    transition: {
      duration: 0.25,
      ease: DEFAULT_EASE,
    },
    transitionEnd: {
      right: 0,
      left: 'auto',
      scaleX: -1,
    },
  },
};

const Link = ({
  className: additionalClassName = null,
  size = null,
  theme = null,
  to = null,
  children,
  ...props
}) => {
  const className = clsx(
    size && theme && styles.base,
    styles.size[size],
    styles.theme[theme],
    additionalClassName
  );

  const [canAnimate, setCanAnimate] = useState(true);
  const controls = useAnimation();

  const handleHover = () => {
    if (!canAnimate) return;

    setCanAnimate(false);

    controls.start('start').then(() => controls.start('finish').then(() => setCanAnimate(true)));
  };

  const isUnderline = theme === 'primary-underline';

  const underline = (
    <LazyMotion features={domAnimation}>
      <m.span
        className="absolute bottom-0 left-0 h-px w-full rounded-full bg-primary-1"
        initial="initial"
        variants={underlineVariants}
        animate={controls}
        aria-hidden
      />
    </LazyMotion>
  );

  if (to.startsWith('/')) {
    return (
      <NextLink
        className={className}
        href={to}
        onMouseEnter={isUnderline ? handleHover : undefined}
        {...props}
      >
        {children}
        {isUnderline && underline}
      </NextLink>
    );
  }

  return (
    <a
      className={className}
      href={to}
      onMouseEnter={isUnderline ? handleHover : undefined}
      {...props}
    >
      {children}
      {isUnderline && underline}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  children: PropTypes.node.isRequired,
};

export default Link;
