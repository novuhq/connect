'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import ChevronIcon from 'icons/chevron.inline.svg';

const ANIMATION_DURATION = 0.3;

const variantsAnimation = {
  hidden: { height: 0 },
  visible: { height: 'auto' },
};

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = () => setIsOpen((currentState) => !currentState);
  return (
    <li>
      <button
        className="inline-flex w-full items-center justify-between pb-4 pt-5 sm:space-x-10"
        type="button"
        onClick={handleButtonClick}
      >
        <span className="text-left text-24 leading-denser md:text-20 sm:text-18 sm:leading-tight">
          {question}
        </span>
        <ChevronIcon
          className={clsx(
            'h-auto w-4 shrink-0 transition-transform duration-200 md:w-3 xs:w-2.5',
            isOpen && '-rotate-180'
          )}
        />
      </button>
      <motion.div
        className="overflow-hidden"
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        variants={variantsAnimation}
        transition={{ duration: ANIMATION_DURATION }}
      >
        <div className="font-book with-list pb-5 pt-3 text-left text-18 text-gray-10 md:mr-14 sm:mr-7 sm:text-16">
          {answer}
        </div>
      </motion.div>
    </li>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Question;
