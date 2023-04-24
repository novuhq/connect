/* eslint-disable @next/next/no-img-element */

'use client';

import React from 'react';

import Link from 'components/shared/link';
import getScore from 'images/home/how-it-works/get-score.svg';
import githubRegistration from 'images/home/how-it-works/github-registration.svg';
import projectTopic from 'images/home/how-it-works/project-topic.svg';
import submitAProject from 'images/home/how-it-works/submit-a-project.svg';

const TITLE = 'How it works';
const DESCRIPTION =
  'Participants can build projects with Novu using various channels like Email, SMS, Direct, and Push. The best project will win exciting prizes.';
const ITEMS = [
  {
    icon: githubRegistration,
    title: 'Registration with GitHub',
    description:
      'You can register for the Hackathon using your GitHub account. No extra registration steps needed.',
  },
  {
    icon: projectTopic,
    title: 'Choose project topic',
    description:
      "After registering, view your progress on the website timeline. Choose a project topic from Novu's list within a specific timeframe.",
  },
  {
    icon: submitAProject,
    title: 'Submit a Project',
    description: (
      <>
        Pick a project topic, follow submission page guidelines, include Novu branding and project
        info in{' '}
        <Link
          to="https://github.com/novuhq/novu/blob/main/CONTRIBUTING.md"
          theme="primary-underline"
          target="_blank"
          rel="noreferrer"
        >
          README.md
        </Link>{' '}
        file.
      </>
    ),
  },
  {
    icon: getScore,
    title: 'Get your score and win a prize',
    description:
      'Innovation, creativity, practicality, quality, and UX will be the key factors for winning a prize.',
  },
];

const HowItWorks = () => (
  <section className="how-it-works safe-paddings py-16 sm:py-12" id="stages">
    <div className="container-lg">
      <h2 className="text-center text-48 leading-tight md:text-40 sm:text-36">{TITLE}</h2>
      <p className="mx-auto mt-12 max-w-[716px] text-center text-18 font-light sm:mt-8 sm:max-w-[534px] sm:text-16">
        {DESCRIPTION}
      </p>
      <ul className="mt-16 grid grid-cols-4 gap-x-10 lg:mt-16 md:mt-14 md:grid-cols-2 md:gap-x-6 md:gap-y-14 sm:mt-10 sm:flex sm:flex-col sm:items-center sm:gap-y-10 sm:text-center">
        {ITEMS.map(({ icon, title, description }, index) => (
          <li className="sm:max-w-[275px]" key={index}>
            <img className="h-16 sm:mx-auto" src={icon} height={64} width={120} alt="" />
            <div className="mt-5">
              <h3 className="text-24 font-medium leading-snug">{title}</h3>
              <p className="font-book mt-3 max-w-[377px] text-16 text-gray-9 lg:mt-2 lg:max-w-none">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default HowItWorks;
