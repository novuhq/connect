/* eslint-disable @next/next/no-img-element */

'use client';

import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links';
import AUTH_STATUS from 'constants/status';
import useSignIn from 'hooks/use-sign-in';
import GitHubIcon from 'icons/github.inline.svg';
import bgLines from 'images/bg-lines.svg';

const DATE = '1-29 May, 2023';
const TITLE = 'ConnectNovu';
const DESCRIPTION =
  'Join ConnectNovu Hackathon, showcase your skills, push the boundaries of innovation, and meet like-minded community members.';

const Hero = () => {
  const { buttonState, signIn, status } = useSignIn();

  return (
    <section className="hero safe-paddings relative overflow-hidden pb-16 pt-36 lg:pt-32 md:pb-14 md:pt-30 sm:pt-22">
      <div className="container-lg relative flex flex-col items-center justify-center">
        <span className="block text-center text-18 font-medium uppercase leading-none tracking-[-0.02em] text-primary-1">
          {DATE}
        </span>
        <h1 className="mt-2.5 text-96 font-bold leading-denser md:text-64 sm:text-48">{TITLE}</h1>
        <p className="mt-5 max-w-[716px] text-center text-18 font-light md:max-w-[540px] md:text-16">
          {DESCRIPTION}
        </p>
        <Button
          className="mt-10 xs:text-12"
          to={status === AUTH_STATUS.AUTHENTICATED ? LINKS.profile.to : ''}
          size="md"
          theme="primary"
          state={buttonState}
          onClick={status === AUTH_STATUS.UNAUTHENTICATED ? signIn : undefined}
        >
          {status === AUTH_STATUS.AUTHENTICATED ? (
            <span className="z-10">Open Profile</span>
          ) : (
            <>
              <GitHubIcon className="z-10 mr-2 h-[26px] w-[26px]" />
              <span className="z-10">Register with Github</span>
            </>
          )}
        </Button>
      </div>

      <span
        className="absolute left-1/2 top-1/2 -z-10 h-full w-full max-w-[1325px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,#000000_45.83%,_rgba(0,0,0,0)_100%)]"
        aria-hidden
      />
      <img
        className="absolute top-1/2 -z-20 mt-[33px] w-full -translate-y-1/2 md:-mt-5 sm:mt-[-50px]"
        src={bgLines}
        width={1920}
        height={580}
        loading="eager"
        alt=""
        aria-hidden
      />
    </section>
  );
};

export default Hero;
