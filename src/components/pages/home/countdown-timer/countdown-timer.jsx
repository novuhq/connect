'use client';

import { LazyMotion, m, domAnimation } from 'framer-motion';
import React from 'react';

import useCountdown from 'hooks/use-countdown';

const TITLE = `May 1</br> Hackathon starts`;
const DESCRIPTION =
  'ConnectNovu Hackathon is a global event focused on notifications. Get ready to join our upcoming hackathon and build with the latest notifications infrastructure!';

const CountdownTimer = () => {
  const { items, isLoading, isLaunched } = useCountdown();

  return (
    <section className="countdown-timer safe-paddings py-16 sm:py-12">
      <div className="container-lg">
        <div className="flex gap-x-8 lg:flex-col lg:items-center lg:gap-x-0 lg:gap-y-10 lg:text-center">
          <div className="flex-1">
            <h2
              className="text-40 font-bold leading-tight"
              dangerouslySetInnerHTML={{ __html: TITLE }}
            />
            <p className="mt-5 max-w-[534px] text-18 text-gray-9 sm:text-16">{DESCRIPTION}</p>
          </div>

          <div className="flex-1">
            <h3 className="text-18 font-medium uppercase leading-none text-white">
              {isLaunched ? 'Time to end' : 'Time to launch'}
            </h3>

            <LazyMotion features={domAnimation}>
              <m.div
                className="mt-7 flex gap-x-18 md:gap-x-16 sm:gap-x-10 xs:gap-x-6"
                initial={{ opacity: 0 }}
                animate={!isLoading && { opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {items.map(({ number, title }, index) => (
                  <div
                    className="group flex w-[86px] flex-col items-center justify-center leading-none md:w-[76px] sm:w-14"
                    key={index}
                  >
                    <span className="text-highlighting-blue-gradient after:font-book relative flex text-64 after:absolute after:-right-[64%] after:text-64 after:leading-none after:!text-gray-8 after:content-[':'] group-last:after:hidden after:md:text-56 after:sm:text-40 after:xs:-right-[80%] after:xs:text-28">
                      <span className="font-medium md:text-56 sm:text-40 xs:text-28">{number}</span>
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
      </div>
    </section>
  );
};

export default CountdownTimer;
