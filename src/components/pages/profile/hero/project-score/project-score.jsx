'use client';

import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import Button from 'components/shared/button/button';
import LINKS from 'constants/links';

const ProjectScore = ({ user }) => {
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    setTotalScore(
      user.innovationAndCreativityScore +
        user.usefulnessAndPracticalityScore +
        user.qualityAndCompletenessScore +
        user.uxAndDesignScore
    );
  }, [user]);

  const items = [
    {
      title: 'Innovation and Creativity:',
      score: user.innovationAndCreativityScore,
    },
    {
      title: 'Usefulness and Practicality:',
      score: user.usefulnessAndPracticalityScore,
    },
    {
      title: 'Quality and completeness of the solution:',
      score: user.qualityAndCompletenessScore,
    },
    {
      title: 'UX and Design:',
      score: user.uxAndDesignScore,
    },
  ];

  return (
    <div className="relative mt-10 rounded-lg border-2 border-[rgba(224,202,255,0.8)] px-7 pb-9 pt-5 before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-[rgba(26,26,26,0.8)] before:backdrop-blur-[22px] sm:px-4">
      <div className="text-highlighting-blue-gradient">
        <span className="text-24 font-medium leading-tight">Your project score!</span>
      </div>

      <div className="mt-5 flex flex-col items-center justify-center">
        <div className="text-highlighting-blue-gradient">
          <span className="block text-[134px] font-medium leading-none sm:text-[100px]">
            {totalScore}
          </span>
        </div>
        <p className="mt-4 max-w-[420px] text-center text-18 leading-tight sm:text-16">
          Very good! Now you can check the Leader board and try to find your project!
        </p>

        <Button
          className="mt-7 xs:w-full xs:text-12"
          size="sm"
          theme="primary"
          {...LINKS.leaderboard}
        >
          <span className="z-10">Go to Leadearboard</span>
        </Button>

        <ul className="mt-10 flex w-full flex-col divide-y divide-gray-4">
          {items.map(({ title, score }, index) => (
            <li className="flex justify-between gap-x-2.5 py-2.5" key={index}>
              <span className="text-18 font-book leading-tight text-white sm:text-16">{title}</span>
              <div className="flex items-end">
                <div className="text-highlighting-blue-gradient">
                  <span className="block text-28 font-medium leading-none">{score}</span>
                </div>
                <span className="mx-2 block leading-none opacity-20">/</span>
                <span className="text-14 leading-none opacity-80">10</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ProjectScore.propTypes = {
  user: PropTypes.shape({
    innovationAndCreativityScore: PropTypes.number.isRequired,
    usefulnessAndPracticalityScore: PropTypes.number.isRequired,
    qualityAndCompletenessScore: PropTypes.number.isRequired,
    uxAndDesignScore: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProjectScore;
