'use client';

import clsx from 'clsx';
import { AnimatePresence, LazyMotion, m, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useRef, forwardRef } from 'react';
import { useClickAway } from 'react-use';

import TOPICS from 'constants/topics';
import CaretIcon from 'icons/select-caret.inline.svg';
import getExcerpt from 'utils/get-excerpt';

const Select = forwardRef(
  ({ value, setIsOpen, isOpen, handleSelect, error = '', ...otherProps }) => {
    const selectRef = useRef(null);

    useClickAway(selectRef, () => {
      setIsOpen(false);
    });

    return (
      <>
        <div className="relative sm:hidden">
          <label className="text-14 leading-none text-gray-9" htmlFor="topic">
            Topic
          </label>
          <div
            className={clsx(
              'mt-2.5 flex h-14 cursor-pointer items-center justify-between overflow-hidden rounded border border-[rgba(255,255,255,0.1)] bg-gray-1 px-[18px] outline-none transition-colors duration-200',
              {
                '!border-[rgba(0,163,255,1)] shadow-[0px_4px_14px_rgba(0,163,255,0.2)]': isOpen,
              }
            )}
            role="button"
            tabIndex={0}
            ref={selectRef}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="whitespace-nowrap leading-none text-gray-9 lg:text-14 md:text-16">
              {value && value.length > 20 ? `${value.slice(0, 80)}...` : value || 'Select topic'}
            </span>
            <CaretIcon
              className={clsx('w-4 transition-transform duration-200', {
                'rotate-180 transform': isOpen,
              })}
            />
            <input type="hidden" name="topic" {...otherProps} />
          </div>

          <LazyMotion features={domAnimation}>
            <AnimatePresence>
              {isOpen && (
                <m.ul
                  className="scrollbar-hidden absolute top-full z-20 mt-2 max-h-[408px] overflow-auto rounded-md border border-gray-4 bg-gray-3 py-1.5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  {TOPICS.map((topic, index) => (
                    <li
                      className={clsx(
                        'cursor-pointer border-b border-gray-4 px-5 py-3.5 text-left text-16 font-light leading-tight transition-colors duration-200 last:border-none hover:bg-[rgba(255,255,255,0.05)]',
                        {
                          'bg-[rgba(255,255,255,0.05)]': value === topic,
                        }
                      )}
                      key={index}
                      dangerouslySetInnerHTML={{ __html: topic }}
                      onClick={handleSelect(getExcerpt(topic))}
                    />
                  ))}
                </m.ul>
              )}
            </AnimatePresence>
          </LazyMotion>

          {error && (
            <span className="absolute -bottom-2 left-0 translate-y-full text-12 font-book leading-none text-[rgba(255,255,255,0.4)]">
              {error}
            </span>
          )}
        </div>

        <div className="relative hidden sm:block">
          <label className="text-14 leading-none text-gray-9" htmlFor="topic">
            Topic
          </label>

          <select
            className="mt-2.5 flex h-14 w-full cursor-pointer appearance-none items-center overflow-hidden rounded border border-[rgba(255,255,255,0.1)] bg-gray-1 px-[18px] outline-none"
            name="topic"
            {...otherProps}
          >
            <option value="">Select Topic</option>
            {TOPICS.map((topic, index) => (
              <option value={topic} key={index}>
                {getExcerpt(topic)}
              </option>
            ))}
          </select>

          {error && (
            <span className="absolute -bottom-2 left-0 translate-y-full text-12 font-book leading-none text-[rgba(255,255,255,0.4)]">
              {error}
            </span>
          )}
        </div>
      </>
    );
  }
);

Select.propTypes = {
  value: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleSelect: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default Select;
