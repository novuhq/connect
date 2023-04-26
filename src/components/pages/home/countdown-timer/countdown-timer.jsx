'use client';

import React from 'react';

import useCountdown from 'hooks/use-countdown';

const TITLE = `May 1</br> Hackathon starts`;
const DESCRIPTION =
  'ConnectNovu Hackathon is a global event focused on notifications. Get ready to join our upcoming hackathon and build with the latest notifications infrastructure!';

const CountdownTimer = () => {
  const { items, isLaunched } = useCountdown();

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

          <div className="flex-1 font-medium">
            <h3 className="text-18 uppercase leading-none text-white">
              {isLaunched ? 'Time to end' : 'Time to launch'}
            </h3>

            <div className="mt-7 flex gap-x-18 md:gap-x-16 sm:gap-x-10 xs:gap-x-6">
              {items.map(({ number, title }, index) => (
                <div
                  className="flex w-[86px] flex-col items-center justify-center leading-none md:w-[76px] sm:w-14"
                  key={index}
                >
                  <span className="text-highlighting-blue-gradient text-64 md:text-56 sm:text-40 xs:text-28">
                    {number}
                  </span>
                  <span className="mt-2.5 text-14 uppercase text-gray-8 xs:text-12">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
