import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

export const BUTTON_STATES = {
  DEFAULT: 'default',
  LOADING: 'loading',
  DISABLED: 'disabled',
};

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
  },
};

const Button = ({
  className = null,
  to = null,
  size,
  theme = null,
  state = BUTTON_STATES.DEFAULT,
  children,
  ...otherProps
}) => {
  const Tag = to ? Link : 'button';

  let content = null;

  switch (state) {
    case BUTTON_STATES.LOADING:
      content = (
        <span className="relative flex items-center justify-center">
          <span className="opacity-0">{children}</span>
          <span className="absolute h-7 w-7 flex-shrink-0 animate-spin rounded-full border border-b border-transparent border-b-white" />
        </span>
      );
      break;
    case BUTTON_STATES.DEFAULT:
    default:
      content = children;
  }

  return (
    <Tag
      className={clsx(styles.base, styles.size[size], styles.theme[theme], className, {
        'pointer-events-none': state === BUTTON_STATES.LOADING || state === BUTTON_STATES.DISABLED,
      })}
      to={to}
      {...otherProps}
    >
      {content}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)).isRequired,
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  state: PropTypes.oneOf(Object.values(BUTTON_STATES)),
  children: PropTypes.node.isRequired,
};

export default Button;
