import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

const styles = {
  base: 'inline-flex items-center justify-center !leading-none text-center whitespace-nowrap rounded transition-[colors, opacity] duration-200 outline-none uppercase font-medium',
  size: {
    md: 'h-14 px-6 text-14',
    sm: 'h-12 px-6 text-14',
    xs: 'h-10 px-5 text-12',
  },
  theme: {
    primary:
      'relative overflow-hidden bg-button-primary-gradient after:absolute after:bg-hover-button-primary-gradient after:transition-all after:duration-500 after:inset-0 after:w-[0px] hover:after:w-full text-white',
    'black-filled': 'bg-black text-white hover:bg-[rgba(0,0,0,0.8)]',
    'white-filled': 'bg-white text-black hover:bg-[rgba(255,255,255,0.8)]',
    'black-outline':
      'bg-transparent text-black border border-black hover:bg-gray-5 hover:border-gray-5',
    'gray-outline':
      'bg-transparent text-white border border-gray-5 hover:bg-gray-4 hover:border-gray-4',
    'blue-gradient':
      'text-black bg-blue-gradient relative before:absolute before:-z-10 before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:rounded before:bg-blue-gradient before:blur-[3px] before:opacity-100 hover:before:opacity-0 before:transition-opacity before:duration-200',
    'pink-to-yellow-gradient':
      'text-black bg-transparent bg-pink-yellow-gradient hover:bg-white hover:bg-none transition-[color,background-image]',
    yellow: 'bg-yellow text-black hover:bg-white',
  },
};

const Button = ({
  className: additionalClassName = null,
  to = null,
  size,
  theme = null,
  children,
  ...otherProps
}) => {
  const className = clsx(styles.base, styles.size[size], styles.theme[theme], additionalClassName);

  const Tag = to ? Link : 'button';

  return (
    <Tag className={className} to={to} {...otherProps}>
      {children}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)).isRequired,
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  children: PropTypes.node.isRequired,
};

export default Button;
