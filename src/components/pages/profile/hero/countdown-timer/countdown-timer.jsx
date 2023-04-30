import { LazyMotion, m, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

const CountdownTimer = ({ items, isLoading = false }) => (
  <div className="relative overflow-hidden rounded-lg pb-28 pt-20 before:absolute before:inset-0 before:bg-[linear-gradient(225deg,#00AAFF_0%,#E0CAFF_80.36%)] before:opacity-10 sm:py-16">
    <div className="flex flex-col items-center">
      <h3 className="text-16 font-medium uppercase leading-none text-white">Time to end</h3>
      <LazyMotion features={domAnimation}>
        <m.div
          className="mt-7 flex gap-x-18 md:gap-x-16 sm:gap-x-10 xs:gap-x-6"
          initial={{ opacity: 0 }}
          animate={!isLoading && { opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {items.map(({ number, title }, index) => (
            <div
              className="group relative flex w-[77px] flex-col items-center justify-center leading-none after:absolute after:-right-10 after:-top-0.5 after:text-64 after:font-book after:leading-none after:!text-gray-8 after:content-[':'] last:after:hidden after:md:text-56 sm:w-14 sm:after:-right-6 after:sm:text-40 after:xs:text-28"
              key={index}
            >
              <span className="text-highlighting-blue-gradient flex">
                <span className="text-64 font-medium md:text-56 sm:text-40 xs:text-28">
                  {number}
                </span>
              </span>
              <span className="mt-2.5 text-14 font-medium uppercase text-gray-8 xs:text-12">
                {title}
              </span>
            </div>
          ))}
        </m.div>
      </LazyMotion>
    </div>
  </div>
);

CountdownTimer.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number,
      title: PropTypes.string,
    })
  ),
  isLoading: PropTypes.bool,
};

export default CountdownTimer;
