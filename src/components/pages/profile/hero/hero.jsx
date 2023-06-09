/* eslint-disable @next/next/no-img-element */

'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

import Link from 'components/shared/link';
import AUTH_STATUS from 'constants/status';
import useUser from 'hooks/use-user';
import GitHubIcon from 'icons/github.inline.svg';
import bgLines from 'images/profile/bg-lines.svg';

import Congratulations from './congratulations';
import ProjectInformation from './project-information';
import ProjectScore from './project-score';
import SelectTopic from './select-topic';
import SubmitProject from './submit-project';
import Timeline from './timeline';

const STATES = {
  IS_LAUNCHED: true,
  IS_SELECTED_TOPIC: false,
  IS_SUBMITTED_PROJECT: false,
  IS_PROJECT_RATED: false,
};

const getProjectScore = (user) =>
  user?.innovationAndCreativityScore &&
  user?.usefulnessAndPracticalityScore &&
  user?.qualityAndCompletenessScore &&
  user?.uxAndDesignScore;

const Hero = () => {
  const { user, setUser, isLoading } = useUser();
  const { status } = useSession();

  const [states, setStates] = useState(STATES);
  const router = useRouter();

  useEffect(() => {
    if (getProjectScore(user) && !states.IS_PROJECT_RATED) {
      setStates((prev) => ({ ...prev, IS_PROJECT_RATED: true }));
    }

    if (user?.topic && !!user?.topicLanguages.length && !states.IS_SELECTED_TOPIC) {
      setStates((prev) => ({ ...prev, IS_SELECTED_TOPIC: true }));
    }

    if (user?.projectUrl && !states.IS_SUBMITTED_PROJECT) {
      setStates((prev) => ({ ...prev, IS_SUBMITTED_PROJECT: true }));
    }
  }, [user, states]);

  if (status === AUTH_STATUS.LOADING || isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="h-7 w-7 flex-shrink-0 animate-spin rounded-full border border-b border-transparent border-b-white" />
      </div>
    );
  }

  if (status === AUTH_STATUS.UNAUTHENTICATED) {
    return router.push('/');
  }

  return (
    <section className="safe-paddings relative pb-44 pt-32 md:pt-30 sm:pb-24 sm:pt-22">
      <div className="container-lg relative">
        <div className="flex items-center gap-x-7 sm:flex-col sm:gap-x-0">
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

          <div className="flex flex-col gap-y-4 sm:mt-3.5 sm:items-center">
            <h1 className="text-48 font-medium leading-denser sm:text-center sm:text-36 xs:text-28">
              {user?.name}
            </h1>
            <Link
              className="group flex items-center gap-x-2"
              to={`https://github.com/${user?.handle}`}
              target="__blank"
            >
              <GitHubIcon className="h-6 transition-opacity duration-200 group-hover:opacity-80" />
              <span className="text-18 text-secondary-4 sm:text-16">{user?.handle}</span>
            </Link>
          </div>
        </div>

        <div className="grid-gap-x mt-10 grid grid-cols-10 md:flex md:flex-col">
          <div className="relative col-span-7 max-w-[756px] md:max-w-none">
            {states.IS_LAUNCHED && !states.IS_SELECTED_TOPIC && <Congratulations />}

            {states.IS_SELECTED_TOPIC && <ProjectInformation user={user} />}

            <Timeline className="hidden md:block" states={states} />

            {states.IS_LAUNCHED && !states.IS_SELECTED_TOPIC && (
              <SelectTopic user={user} setStates={setStates} setUser={setUser} />
            )}
            {states.IS_SELECTED_TOPIC && !states.IS_PROJECT_RATED && (
              <SubmitProject user={user} states={states} setStates={setStates} setUser={setUser} />
            )}
            {states.IS_PROJECT_RATED && <ProjectScore user={user} />}
          </div>

          <div className="col-span-3 md:hidden">
            <Timeline states={states} />
          </div>
        </div>
      </div>

      <div
        className={clsx('-z-20', {
          'absolute inset-0 overflow-hidden': states.IS_LAUNCHED,
        })}
      >
        <img
          className={clsx('left-1/2 mt-3.5 w-full', {
            'absolute bottom-32 min-w-[1920px] -translate-x-1/2': states.IS_LAUNCHED,
            'bottom-[390px]': states.IS_PROJECT_RATED,
          })}
          src={bgLines}
          width={1920}
          height={398}
          loading="eager"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
