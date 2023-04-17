import React from 'react';

import Link from 'components/shared/link';

import Question from './question';

const FAQ_DATA = [
  {
    question: 'What categories will participants be ranked?',
    answer: (
      <>
        Participants will be ranked (from 1 - 10) by the following categories:{' '}
        <ul>
          <li>Innovation and creativity</li>
          <li>Usefulness and practicality</li>
          <li>Quality and completeness of the solution</li>
          <li>User experience and design</li>
        </ul>
        Where one is the lowest number, and ten is the highest, the leader board can be found{' '}
        <Link to="/" target="_blank" rel="noreferrer" theme="primary">
          here
        </Link>
        . The judges will be a mix of industry experts and Novu team members.
      </>
    ),
  },
  {
    question: 'What is the maximum number of people allowed to participate in a team?',
    answer: 'You can participate in a team of up to 5 people.',
  },
  {
    question: 'How many projects can you submit?',
    answer: 'You can submit only one project.',
  },
  {
    question: 'What frameworks can be used for the project?',
    answer:
      'Having a front for the project is a must and can be used by any framework (ex. React, Angular, Vue, Salvte, Vanilla).',
  },
  {
    question: 'What languages can be chosen for the backend?',
    answer: 'You can choose any language for the backend.',
  },
  {
    question: 'What is the deadline for submitting the code that must be created during the event?',
    answer: 'Code must be created during the event, and be submitted before 29.5',
  },
  {
    question: 'What are the requirements for the GitHub repository?',
    answer: 'The GitHub repository must be public and on the same GitHub authentication handle.',
  },
  {
    question: 'Do I need to use the Novu library?',
    answer: 'The apps must include the Novu library.',
  },
  {
    question: 'About README.md file',
    answer: (
      <>
        <Link to="/" theme="primary">
          README.md
        </Link>{' '}
        file must contain the following template
      </>
    ),
  },
  {
    question: 'Will an unfinished project be judge?',
    answer: 'We won’t be able to judge non-completed projects.',
  },
];

const FAQ = () => (
  <section className="faq safe-paddings bg-gray-2 py-20 lg:py-16 md:py-12 sm:py-10" id="faqSection">
    <div className="container-md">
      <h2 className="text-center text-48 leading-tight md:text-40 sm:text-36">
        Frequently Asked Questions
      </h2>
      <ul className="mt-16 divide-y divide-gray-3 border-y border-gray-3 xl:mt-10">
        {FAQ_DATA.map((questionItem, index) => (
          <Question {...questionItem} key={index} />
        ))}
      </ul>
    </div>
  </section>
);

export default FAQ;
