'use client';

import { useRef, useState, useEffect } from 'react';

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

export default function useCountdown(countdownDate = new Date('May 1, 2023 00:00:00').getTime()) {
  const [countdown, setCountdown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  const [isLaunched, setIsLaunched] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const updateCountdown = (distance) => {
    if (distance < 0) {
      clearInterval(intervalRef.current);
      setCountdown({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      });
      setIsLaunched(true);
      setIsLoading(false);
      return;
    }

    setCountdown(getCountTime(distance));
    setIsLaunched(false);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!isMounted) return;

    const now = new Date().getTime();
    const distance = countdownDate - now;

    updateCountdown(distance);

    intervalRef.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      updateCountdown(distance);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isMounted, countdownDate]);

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

  return { countdown, isLoading, isLaunched, items };
}
