/* eslint-disable @next/next/no-img-element */

'use client';

import clsx from 'clsx';
import { LazyMotion, m, domAnimation } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

import Link from 'components/shared/link';
import AUTH_STATUS from 'constants/status';
import useCountdown from 'hooks/use-countdown';
import useUser from 'hooks/use-user';
import GitHubIcon from 'icons/github.inline.svg';
import bgCirclesLeft from 'images/profile/bg-cirles-left.svg';
import bgCirclesRight from 'images/profile/bg-cirles-right.svg';
import bgLines from 'images/profile/bg-lines.svg';

import SelectTopic from './select-topic';
import Timeline from './timeline';

const STATES = {
  IS_SELECTED_TOPIC: false,
  IS_SUBMITED_PROJECT: false,
};

const Hero = () => {
  const { user, isLoading } = useUser();
  const {
    items,
    isLoading: isCountdownLoading,
    isLaunched,
  } = useCountdown(new Date('Apr 27, 2023 00:00:00').getTime());
  const { status } = useSession();

  const [states, setStates] = useState({ ...STATES, IS_LAUNCHED: isLaunched });
  const router = useRouter();

  useEffect(() => {
    if (isLaunched) {
      setStates((prev) => ({ ...prev, IS_LAUNCHED: true }));
    }
  }, [isLaunched]);

  if (status === AUTH_STATUS.LOADING || isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="h-7 w-7 flex-shrink-0 animate-spin rounded-full border border-b border-transparent border-b-white" />
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return router.push('/');
  }

  return (
    <section className="safe-paddings relative pb-44 pt-32">
      <div className="container-lg">
        <div className="flex items-center gap-x-7">
          <div className="profile-avatar group relative flex h-[152px] w-[152px] flex-shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-border">
            <img
              className="z-10 rounded-full grayscale transition-all duration-200 group-hover:grayscale-0"
              src={user?.image}
              height={128}
              width={128}
              loading="eager"
              alt={user?.name || ''}
            />
          </div>

          <div className="flex flex-col gap-y-4">
            <h1 className="text-48 font-medium leading-denser">{user?.name}</h1>
            <Link
              className="group flex items-center gap-x-2"
              to={`https://github.com/${user?.handle}`}
              target="__blank"
            >
              <GitHubIcon className="h-6 transition-opacity duration-200 group-hover:opacity-80" />
              <span className="text-18 text-secondary-4">{user?.handle}</span>
            </Link>
          </div>
        </div>

        <div className="grid-gap-x mt-10 grid grid-cols-10 md:flex md:flex-col">
          <div className="relative col-span-7 max-w-[756px] md:max-w-none">
            <div className="relative overflow-hidden rounded-lg pb-28 pt-20 before:absolute before:inset-0 before:bg-[linear-gradient(225deg,#00AAFF_0%,#E0CAFF_80.36%)] before:opacity-10">
              {states.IS_LAUNCHED ? (
                <div className="relative flex flex-col justify-center px-5 text-center">
                  <h3 className="text-40 font-medium leading-tight">ConnectNovu started!</h3>
                  <p className="mx-auto mt-3.5 max-w-[510px] text-18 leading-tight text-gray-8">
                    Сongratulations! Hackathon officially starts and you can select the theme you
                    preferd. After you start to make your project and submit result until{' '}
                    <span className="text-secondary-4">29 May 2023</span>.
                  </p>

                  <img
                    className="absolute left-9"
                    src={bgCirclesLeft}
                    height={237}
                    width={177}
                    loading="eager"
                    alt=""
                  />
                  <img
                    className="absolute right-10"
                    src={bgCirclesRight}
                    height={249}
                    width={115}
                    loading="eager"
                    alt=""
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <h3 className="text-16 font-medium uppercase leading-none text-white">
                    {states.IS_LAUNCHED ? 'Time to end' : 'Time to launch'}
                  </h3>
                  <LazyMotion features={domAnimation}>
                    <m.div
                      className="flex gap-x-18 md:gap-x-16 sm:gap-x-10 xs:gap-x-6"
                      initial={{ opacity: 0 }}
                      animate={!isCountdownLoading && { opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {items.map(({ number, title }, index) => (
                        <div
                          className="group mt-7 flex w-[86px] flex-col items-center justify-center leading-none md:w-[76px] sm:w-14"
                          key={index}
                        >
                          <span className="text-highlighting-blue-gradient after:font-book relative flex text-64 after:absolute after:-right-[64%] after:text-64 after:leading-none after:!text-gray-8 after:content-[':'] group-last:after:hidden after:md:text-56 after:sm:text-40 after:xs:-right-[80%] after:xs:text-28">
                            <span className="font-medium md:text-56 sm:text-40 xs:text-28">
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
              )}
            </div>

            {states.IS_LAUNCHED && <SelectTopic />}
          </div>

          <div className="col-span-3">
            <Timeline />
          </div>
        </div>
      </div>

      <img
        className={clsx('mt-3.5 w-full', {
          'absolute bottom-32 -z-20': states.IS_LAUNCHED,
        })}
        src={bgLines}
        width={1920}
        height={398}
        loading="eager"
        alt=""
      />
    </section>
  );
};

export default Hero;
