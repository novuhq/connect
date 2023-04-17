'use client';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

import 'react-tooltip/dist/react-tooltip.css';
import tooltipIcon from 'icons/tooltip.svg';

const Tooltip = ({ className = null, text }) => {
  const [isTooltipVisible, setTooltipVisibility] = useState(true);

  useEffect(() => {
    setTooltipVisibility(true);
  }, []);

  return (
    <>
      <button
        className={clsx('group peer shrink-0 p-1.5', className)}
        type="button"
        data-tooltip-id={text}
        data-tooltip-content={text}
        aria-label="Tooltip"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="opacity-80 transition-opacity duration-200 group-hover:opacity-100"
          src={tooltipIcon}
          height={16}
          width={16}
          alt=""
          aria-hidden
        />
      </button>
      {isTooltipVisible && (
        <ReactTooltip
          id={text}
          className="opacity-1 z-10 max-w-[270px] rounded-lg bg-gray-2 p-4 leading-normal"
        />
      )}
    </>
  );
};

Tooltip.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Tooltip;
