/* eslint-disable @next/next/no-img-element */

'use client';

import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import Button from 'components/shared/button';
import Tooltip from 'components/shared/tooltip';
import useSignIn from 'hooks/use-sign-in';
import checkIcon from 'icons/check.svg';
import GitHubIcon from 'icons/github.inline.svg';
import first from 'images/home/swag/first.svg';
import fourth from 'images/home/swag/fourth.svg';
import scene from 'images/home/swag/scene.svg';
import second from 'images/home/swag/second.svg';
import third from 'images/home/swag/third.svg';

const TITLE = 'Prizes for the Hackathon';
const PLACES = [
  {
    title: '1st place',
    image: first,
    items: [
      {
        title: 'GitHub sponsorships of $1500 in 3 strokes',
      },
      {
        title: 'Novu’s Swag',
      },
      {
        title: 'Support from the Novu team',
      },
      {
        title: 'A special place in Novu’s Community Heroes',
      },
      {
        title: 'Becoming a Novu ambassador',
        tooltip: (
          <>
            1. Special tag on Discord
            <br />
            2. Special tag on Community Heroes.
            <br />
            3. A job title that can be put anywhere and recognized by Novu.
            <br />
            4. First access to the next Novu’s exclusive events.
          </>
        ),
      },
    ],
  },
  {
    title: '2nd place',
    image: second,
    items: [
      {
        title: 'GitHub sponsorships of $500',
      },
      {
        title: 'Novu’s Swag',
      },
      {
        title: 'Support from the Novu team',
      },
      {
        title: 'A special place in Novu’s Community Heroes',
      },
      {
        title: 'Becoming a Novu ambassador',
        tooltip: (
          <>
            1. Special tag on Discord
            <br />
            2. Special tag on Community Heroes.
            <br />
            3. A job title that can be put anywhere and recognized by Novu.
            <br />
            4. First access to the next Novu’s exclusive events.
          </>
        ),
      },
    ],
  },
  {
    title: '3rd place',
    image: third,
    items: [
      {
        title: 'Becoming a Novu ambassador',
        tooltip: (
          <>
            1. Special tag on Discord
            <br />
            2. Special tag on Community Heroes.
            <br />
            3. A job title that can be put anywhere and recognized by Novu.
            <br />
            4. First access to the next Novu’s exclusive events.
          </>
        ),
      },
      {
        title: 'Subscription for Pluralsight for one year',
      },
    ],
  },
  {
    title: '4th-10th place',
    image: fourth,
    items: [
      {
        title: 'Becoming a Novu ambassador',
        tooltip: (
          <>
            1. Special tag on Discord
            <br />
            2. Special tag on Community Heroes.
            <br />
            3. A job title that can be put anywhere and recognized by Novu.
            <br />
            4. First access to the next Novu’s exclusive events.
          </>
        ),
      },
    ],
  },
];

const Swag = () => {
  const { buttonState, signIn } = useSignIn();
  return (
    <section
      className="swag safe-paddings overflow-hidden pb-32 pt-16 lg:pb-20 md:pb-16 md:pt-12 sm:pb-12 sm:pt-10"
      id="prizes"
    >
      <div className="container-lg relative">
        <h2 className="text-center text-48 leading-tight md:text-40 sm:text-36">{TITLE}</h2>
        <Image
          className="absolute left-24 top-52 -z-10 lg:left-16 md:hidden"
          src="/images/home/swag/t-shirt.png"
          width={532}
          height={438}
          alt=""
          aria-hidden
        />
        <Image
          className="absolute right-28 top-52 -z-10 lg:right-20 md:hidden"
          src="/images/home/swag/card.png"
          width={622}
          height={403}
          alt=""
          aria-hidden
        />
        <div className="relative mx-auto mt-[120px] max-w-[400px] rounded-[20px] bg-black shadow-card md:hidden">
          <div className="w-full rounded-[20px] bg-card-gradient px-9 pb-10 pt-[100px]">
            <div className="absolute left-1/2 top-0 h-28 w-64 shrink-0 -translate-x-1/2 rounded-[0_0_150px_150px] bg-secondary-2 bg-opacity-30 blur-[60px]" />
            <img
              className="absolute -top-16 left-1/2 h-36 w-auto shrink-0 -translate-x-1/2"
              src={first}
              width={144}
              height={144}
              alt={PLACES[0].title}
            />
            <ul className="flex flex-col gap-y-2.5">
              {PLACES[0].items.map(({ title, tooltip }, index) => (
                <li className="flex gap-x-2.5" key={index}>
                  <div>
                    <img
                      className="inline-block h-4 flex-shrink-0"
                      src={checkIcon}
                      width={16}
                      height={16}
                      alt=""
                      aria-hidden
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block text-18">{title}</span>
                    {tooltip && <Tooltip text={tooltip} />}
                  </div>
                </li>
              ))}
            </ul>
            <Button
              className="mt-11 w-full xs:text-12"
              size="md"
              theme="primary"
              state={buttonState}
              onClick={signIn}
            >
              <GitHubIcon className="z-10 mr-2 h-[26px] w-[26px]" />
              <span className="z-10">Register with Github</span>
            </Button>
          </div>
        </div>
        <img
          className="absolute bottom-[300px] left-0 md:hidden"
          src={scene}
          width={1220}
          height={415}
          alt=""
          aria-hidden
        />

        <div className="mt-[190px] grid grid-cols-3 gap-x-10 lg:gap-x-6 md:hidden">
          {PLACES.slice(1).map(({ title, image, items }, index) => (
            <div
              className="relative rounded-[20px] bg-card-gradient px-6 pb-7 pt-12 lg:px-5"
              key={index}
            >
              <img
                className="absolute -top-8 left-1.5 h-[110px] w-auto shrink-0"
                src={image}
                width={110}
                height={110}
                alt={title}
              />
              <ul className="mt-3 flex flex-col gap-y-2.5">
                {items.map(({ title, tooltip }, index) => (
                  <li className="flex gap-x-2.5" key={index}>
                    <div>
                      <img
                        className="inline-block h-4 flex-shrink-0"
                        src={checkIcon}
                        width={16}
                        height={16}
                        alt=""
                        aria-hidden
                      />
                    </div>
                    <div className="flex items-center">
                      <span className="inline-block text-16">{title}</span>
                      {tooltip && <Tooltip text={tooltip} />}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 hidden grid-cols-2 gap-x-4 gap-y-10 md:grid sm:grid-cols-1">
          {PLACES.map(({ title, image, items }, index) => (
            <div className="relative rounded-[20px] bg-card-gradient px-5 pb-5 pt-12" key={index}>
              <img
                className={clsx(
                  'absolute -top-8 w-auto shrink-0',
                  image === first ? 'left-4 h-[80px]' : 'left-1.5 h-[100px]'
                )}
                src={image}
                width={100}
                height={100}
                alt={title}
              />
              <ul className="mt-3 flex flex-col gap-y-2.5">
                {items.map(({ title, tooltip }, index) => (
                  <li className="flex gap-x-2.5" key={index}>
                    <div>
                      <img
                        className="inline-block h-4 flex-shrink-0"
                        src={checkIcon}
                        width={16}
                        height={16}
                        alt=""
                        aria-hidden
                      />
                    </div>
                    <div className="flex items-center">
                      <span className="inline-block text-16">{title}</span>
                      {tooltip && <Tooltip text={tooltip} />}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Swag;
