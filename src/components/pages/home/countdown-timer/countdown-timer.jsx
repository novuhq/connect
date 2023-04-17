'use client';

import React, { useState, useEffect } from 'react';

const TITLE = `May 1</br> Hackathon starts`;
const DESCRIPTION =
  'ConnectNovu Hackathon is a global event focused on notifications. Get ready to join our upcoming hackathon and build with the latest notifications infrastructure!';

const COUNTDOWN_DATE = new Date('May 1, 2023 00:00:00').getTime();
const ONE_DAY = 1000 * 60 * 60 * 24;
const ONE_HOUR = 1000 * 60 * 60;
const ONE_MINUTE = 1000 * 60;
const ONE_SECOND = 1000;

const getCountTime = (distance) => {
  const days = Math.floor(distance / ONE_DAY)
    .toString()
    .padStart(2, '0');
  const hours = Math.floor((distance % ONE_DAY) / ONE_HOUR)
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor((distance % ONE_HOUR) / ONE_MINUTE)
    .toString()
    .padStart(2, '0');
  const seconds = Math.floor((distance % ONE_MINUTE) / ONE_SECOND)
    .toString()
    .padStart(2, '0');
  return { days, hours, minutes, seconds };
};

const tick = () => {
  const now = new Date().getTime();
  const distance = COUNTDOWN_DATE - now;

  if (distance < 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };
  }

  return getCountTime(distance);
};

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(() => tick());
  const [isLaunched, setIsLaunched] = useState(COUNTDOWN_DATE < new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(tick());
      if (COUNTDOWN_DATE < new Date().getTime()) {
        clearInterval(interval);
        return setIsLaunched(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    {
      number: countdown.days,
      title: 'Days',
    },
    {
      number: countdown.hours,
      title: 'Hours',
    },
    {
      number: countdown.minutes,
      title: 'Minutes',
    },
    {
      number: countdown.seconds,
      title: 'Seconds',
    },
  ];

  return (
    <section className="countdown-timer safe-paddings py-16 sm:py-12">
      <div className="container">
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
                  <span className="text-64 md:text-56 sm:text-40 xs:text-28">{number}</span>
                  <span className="mt-2.5 uppercase text-gray-6 sm:text-14 xs:text-12">
                    {title}
                  </span>
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
