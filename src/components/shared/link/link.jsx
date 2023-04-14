/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  base: 'inline-block leading-none',
  size: {
    base: 'text-16',
    sm: 'text-14',
  },
  theme: {
    'primary-underline':
      'text-primary-1 relative tracking-wide uppercase pb-1.5 transition-colors duration-200 hover:text-primary-1',
    white: 'text-white hover:text-primary-1 transition-colors duration-200',
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

  if (to.startsWith('/')) {
    return (
      <NextLink className={className} href={to} {...props}>
        {children}
      </NextLink>
    );
  }

  return (
    <a className={className} href={to} {...props}>
      {children}
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
