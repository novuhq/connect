/* eslint-disable @next/next/no-img-element */

'use client';

import React from 'react';

import bgLines from 'images/leaderboard/bg-lines.svg';

const TITLE = 'Leaderboard';
const DESCRIPTION =
  'Check out our leaderboard for the latest updates on the top performers in ConnectNovu Hackathon!';

const Hero = () => (
  <section className="hero safe-paddings relative overflow-hidden pb-28 pt-32 md:pb-22 md:pt-30 sm:pb-16 sm:pt-22">
    <div className="container-lg relative flex flex-col items-center justify-center">
      <h1 className="mt-2.5 text-56 font-bold leading-denser sm:text-48">{TITLE}</h1>
      <p className="mt-5 max-w-[544px] text-center text-18 font-light md:max-w-[540px] md:text-16">
        {DESCRIPTION}
      </p>
    </div>

    <span
      className="absolute left-1/2 top-1/2 -z-10 h-full w-full max-w-[1325px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,#000000_45.83%,_rgba(0,0,0,0)_100%)]"
      aria-hidden
    />
    <img
      className="absolute top-1/2 -z-20 mt-4 w-full -translate-y-1/2 md:-mt-5"
      src={bgLines}
      width={1920}
      height={337}
      loading="eager"
      alt=""
      aria-hidden
    />
  </section>
);

export default Hero;
