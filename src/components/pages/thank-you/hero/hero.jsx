/* eslint-disable @next/next/no-img-element */

'use client';

import React from 'react';

import Button from 'components/shared/button/button';
import LINKS from 'constants/links';
import DiscordIcon from 'icons/discord.inline.svg';
import TwitterIcon from 'icons/twitter.inline.svg';
import bgLines from 'images/bg-lines.svg';

import Link from '../../../shared/link';

const TITLE = 'Thank you!';
const DESCRIPTION = (
  <>
    Thank you for registering for the Hackathon! 🚀
    <br />
    We are starting on 1st May, but you can already start working on it 😉
    <br />
    We will let you know more over the email connected to your GitHub.
    <br />
    Feel free to follow us on Twitter and Join our discord (at the bottom of the page).
  </>
);

const Hero = () => (
  <section className="safe-paddings relative h-screen min-h-[685px]">
    <div className="container relative z-10 flex h-full flex-col items-center justify-center">
      <h1 className="font-mono text-72 font-bold leading-denser lg:text-48 md:text-40 xs:text-32">
        {TITLE}
      </h1>
      <p className="mt-5 text-center text-24 md:text-20 sm:text-16">{DESCRIPTION}</p>
      <Button className="mt-10 xs:text-12" to="/" size="md" theme="primary">
        <span className="z-10">Back to homepage</span>
      </Button>

      <div className="absolute bottom-20 md:bottom-12">
        <h2 className="font-mono text-center text-16 font-medium uppercase">Let’s connect</h2>
        <div className="flex items-center justify-center space-x-8">
          <Link
            className="group mt-5 cursor-pointer"
            {...LINKS.twitter}
            rel="noreferrer"
            aria-label="Link to our Twitter"
          >
            <TwitterIcon className="h-[26px] transition-opacity duration-200 group-hover:opacity-80" />
          </Link>
          <Link
            className="group mt-5 cursor-pointer"
            {...LINKS.discord}
            rel="noreferrer"
            aria-label="Link to our Discord"
          >
            <DiscordIcon className="h-[26px] transition-opacity duration-200 group-hover:opacity-80" />
          </Link>
        </div>
      </div>
    </div>

    <span
      className="absolute left-1/2 top-1/2 -z-10 h-full w-full max-w-[1325px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,#000000_45.83%,_rgba(0,0,0,0)_100%)]"
      aria-hidden
    />
    <img
      className="absolute top-1/2 -z-20 mt-[33px] w-full -translate-y-1/2"
      src={bgLines}
      width={1920}
      height={580}
      loading="eager"
      alt=""
      aria-hidden
    />
  </section>
);

export default Hero;
