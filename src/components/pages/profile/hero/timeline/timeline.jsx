'use client';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import completedIcon from 'icons/completed.svg';

const STAGES = [
  {
    title: 'Select a topic',
    description: 'From 1 May 2023',
    isActive: true,
    isCompleted: false,
  },
  {
    title: 'Submit your project',
    description: 'Until 29 May 2023',
    isActive: false,
    isCompleted: false,
  },
  {
    title: 'Declared winners',
    description: '29 May',
    isActive: false,
    isCompleted: false,
  },
];

const Timeline = ({ className = '' }) => (
  <div className={clsx('md:mt-6', className)}>
    <span className="text-18 leading-tight text-gray-8 md:flex md:justify-center md:text-center">
      Timeline of the Hackathon:
    </span>

    <ul className="mt-8 flex flex-col gap-y-16 md:mt-4 md:flex-row md:justify-between md:gap-0">
      {STAGES.map(({ title, description, isActive, isCompleted }, index) => (
        <li
          className="group relative col-span-3 flex items-center gap-x-5 md:gap-x-2.5 sm:flex-1 sm:flex-col sm:text-center"
          key={index}
        >
          <div className="relative flex-shrink-0" aria-hidden>
            <div
              className={clsx(
                'relative flex h-14 w-14 items-center justify-center rounded-full text-24 font-medium',
                {
                  'border-[3px] border-gray-3 bg-black': !isActive && !isCompleted,
                  'timeline-item-active': isActive && !isCompleted,
                  'bg-[linear-gradient(225deg,#00AAFF_0%,#8833FF_100%)]': isCompleted,
                }
              )}
            >
              {!isCompleted ? (
                <span className="inline-block leading-none">{index + 1}</span>
              ) : (
                <img src={completedIcon} height={20} width={22} loading="eager" alt="" />
              )}
            </div>
            <span className="absolute left-1/2 top-[calc(100%+10px)] h-[calc(100%-10px)] w-px -translate-x-1/2 border-l border-dashed border-gray-4 group-last:hidden md:hidden" />
          </div>
          <div className="sm:mt-1.5">
            <h4 className="text-24 font-medium leading-tight lg:text-20 sm:text-16">{title}</h4>
            <p
              className={clsx(
                'mt-1.5 text-16 font-medium leading-tight text-gray-8 lg:text-14 sm:text-12',
                {
                  'text-secondary-2': isActive,
                }
              )}
            >
              {description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

Timeline.propTypes = {
  className: PropTypes.string,
};

export default Timeline;
