'use client';

import Image from 'next/image';
import React from 'react';

import Tooltip from 'components/shared/tooltip';
import checkIcon from 'icons/check.svg';
import scene from 'images/home/swag/scene.svg';

const TITLE = 'Prizes for the Hackathon';
const PLACES = [
  {
    title: '1st place',
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

const Swag = () => (
  <section
    className="swag safe-paddings overflow-hidden pb-32 pt-16 lg:pb-20 md:pb-16 md:pt-12 sm:pb-12 sm:pt-10"
    id="prizes"
  >
    <div className="container-lg">
      <h2 className="text-center text-48 leading-tight md:text-40 sm:text-36">{TITLE}</h2>

      <div className="grid-gap-x mt-16 grid grid-cols-10 items-center md:block">
        <div className="relative col-span-7 h-[416px] lg:col-span-6 xs:h-[310px]">
          <img
            className="absolute bottom-0 left-0"
            src={scene}
            width={1220}
            height={415}
            alt=""
            aria-hidden
          />
          <Image
            className="absolute right-[-7.3%] top-[-10.4%] lg:right-[-19%] md:right-[-9%]"
            src="/images/home/swag/t-shirt.png"
            width={534}
            height={459}
            alt=""
            aria-hidden
          />
          <Image
            className="absolute left-[4.8%] top-[6.5%] lg:left-[-7.2%] md:left-[5%] sm:w-1/2"
            src="/images/home/swag/stickers.png"
            width={292}
            height={313}
            alt=""
            aria-hidden
          />
          <Image
            className="absolute bottom-[9.4%] left-[49%] -translate-x-1/2"
            src="/images/home/swag/card.png"
            width={476}
            height={250}
            alt=""
            aria-hidden
          />
        </div>
        <div className="col-span-3 lg:col-span-4 md:hidden">
          <h3 className="text-36 font-medium leading-tight">{PLACES[0].title}</h3>
          <ul className="mt-9 flex flex-col gap-y-2.5">
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
        </div>
      </div>

      <div className="mt-10 grid grid-cols-3 gap-x-10 lg:gap-x-6 md:hidden">
        {PLACES.slice(1).map(({ title, items }, index) => (
          <div className="rounded-[20px] bg-card-gradient px-6 py-5 lg:px-5" key={index}>
            <h3 className="text-24 font-medium leading-tight">{title}</h3>
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

      <div className="grid-gap mt-10 hidden grid-cols-2 md:grid sm:grid-cols-1">
        {PLACES.map(({ title, items }, index) => (
          <div className="rounded-[20px] bg-card-gradient p-5" key={index}>
            <h3 className="text-24 font-medium leading-tight">{title}</h3>
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

export default Swag;
