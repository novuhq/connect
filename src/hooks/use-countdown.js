'use client';

import { useState, useEffect } from 'react';

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

export default function useCountdown() {
  const [countdown, setCountdown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  const [isLaunched, setIsLaunched] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    setCountdown(tick());
    setIsLaunched(COUNTDOWN_DATE < new Date().getTime());

    const interval = setInterval(() => {
      setCountdown(tick());
      if (COUNTDOWN_DATE < new Date().getTime()) {
        clearInterval(interval);
        return setIsLaunched(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isMounted]);

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

  return { countdown, isLaunched, items };
}
