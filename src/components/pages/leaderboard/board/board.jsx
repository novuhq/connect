/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-undef */

'use client';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links';
import medalBronze from 'icons/medal-bronze.svg';
import medalDefault from 'icons/medal-default.svg';
import medalGold from 'icons/medal-gold.svg';
import medalSilver from 'icons/medal-silver.svg';

const getMedal = (index) => {
  if (index >= 10) {
    return {
      medal: null,
      colorText: '#FFFFFF',
    };
  }

  switch (index) {
    case 0:
      return {
        medal: medalGold,
        colorText: '#735F00',
      };
    case 1:
      return {
        medal: medalSilver,
        colorText: '#404040',
      };
    case 2:
      return {
        medal: medalBronze,
        colorText: '#734500',
      };
    default:
      return {
        medal: medalDefault,
        colorText: '#FFFFFF',
      };
  }
};

const HEADER = ['Place', 'Name', 'Score'];

const Board = ({ participants }) => (
  <section className="hero safe-paddings pb-32 pt-10 sm:pb-20 sm:pt-6">
    <div className="container-md">
      <div className="grid-gap-x grid grid-cols-8 border-b border-gray-4 pb-4 sm:grid-cols-[60px,1fr,1fr,65px]">
        {HEADER.map((header) => (
          <span className="text-24 font-medium leading-tight sm:text-20 [&:nth-child(2)]:col-span-6 [&:nth-child(2)]:sm:col-span-2">
            {header}
          </span>
        ))}
      </div>

      {participants.length ? (
        <ul>
          {participants
            .sort((a, b) => {
              const totalScoreA =
                a.innovationAndCreativityScore +
                a.usefulnessAndPracticalityScore +
                a.qualityAndCompletenessScore +
                a.uxAndDesignScore;
              const totalScoreB =
                b.innovationAndCreativityScore +
                b.usefulnessAndPracticalityScore +
                b.qualityAndCompletenessScore +
                b.uxAndDesignScore;

              return totalScoreB - totalScoreA;
            })
            .map(
              (
                {
                  name,
                  image,
                  innovationAndCreativityScore,
                  usefulnessAndPracticalityScore,
                  qualityAndCompletenessScore,
                  uxAndDesignScore,
                },
                index
              ) => {
                const { medal, colorText } = getMedal(index);
                const score =
                  innovationAndCreativityScore +
                  usefulnessAndPracticalityScore +
                  qualityAndCompletenessScore +
                  uxAndDesignScore;

                return (
                  <li
                    className={clsx(
                      'grid-gap-x group grid grid-cols-8 border-b border-gray-4 py-4 sm:grid-cols-[60px,1fr,1fr,65px]',
                      {
                        'bg-gray-1': index < 10,
                      }
                    )}
                    key={index}
                  >
                    <div
                      className={clsx('relative flex items-center px-4', {
                        'pl-[30px]': !medal,
                      })}
                    >
                      <div className="relative inline-block">
                        {medal && (
                          <img
                            className="flex-shrink-0"
                            src={medal}
                            width={28}
                            height={28}
                            alt=""
                          />
                        )}
                        <span
                          className="absolute left-1/2 top-1/2 -mt-px block -translate-x-1/2 -translate-y-1/2 text-[15px] font-extrabold leading-none"
                          style={{ color: colorText }}
                        >
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div className="col-span-6 flex items-center gap-x-5 sm:col-span-2 sm:gap-x-2.5">
                      <img
                        className="rounded-full grayscale transition-all duration-200 group-hover:grayscale-0"
                        src={image}
                        width={36}
                        height={36}
                        alt={name || ''}
                      />
                      <span className="truncate text-18 font-book leading-tight">{name}</span>
                    </div>
                    <div className="text-highlighting-blue-gradient">
                      <span className="block text-28 font-medium leading-none">{score}</span>
                    </div>
                  </li>
                );
              }
            )}
        </ul>
      ) : (
        <div className="flex flex-col items-center border-b border-gray-4 pb-10 pt-8">
          <span className="block text-40 font-medium leading-tight">No results yet</span>
          <p className="mt-3.5 max-w-[510px] text-center text-18 leading-tight text-gray-8">
            Hackathon officially starts and you can select the theme you prefer. After you start to
            make your project and submit result until{' '}
            <span className="text-secondary-4">29 May 2023</span>.
          </p>
        </div>
      )}

      <div className="mt-12 flex justify-center">
        <Button size="sm" theme="gray-outline" {...LINKS.home}>
          Back to homepage
        </Button>
      </div>
    </div>
  </section>
);

Board.propTypes = {
  participants: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      innovationAndCreativityScore: PropTypes.number.isRequired,
      usefulnessAndPracticalityScore: PropTypes.number.isRequired,
      qualityAndCompletenessScore: PropTypes.number.isRequired,
      uxAndDesignScore: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Board;
