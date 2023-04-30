import React from 'react';

import bgCirclesLeft from 'images/profile/bg-cirles-left.svg';
import bgCirclesRight from 'images/profile/bg-cirles-right.svg';

const Congratulations = () => (
  <div className="relative overflow-hidden rounded-lg pb-28 pt-20 before:absolute before:inset-0 before:bg-[linear-gradient(225deg,#00AAFF_0%,#E0CAFF_80.36%)] before:opacity-10 sm:py-16">
    <div className="relative flex flex-col justify-center px-5 text-center">
      <h3 className="text-40 font-medium leading-tight sm:text-32">ConnectNovu started!</h3>
      <p className="mx-auto mt-3.5 max-w-[510px] text-18 leading-tight text-gray-8 sm:text-16">
        Congratulations! Hackathon officially started.
        <br />
        <a
          className="text-emerald-400 leading-tight text-primary-1 transition-colors duration-200 hover:text-white"
          href="https://github.com/novuhq/connect-readme"
          target="_blank"
          rel="noreferrer"
        >
          Clone this project and update it's README.md
        </a>
        <p className="mt-[10px]">Please submit your Project by</p>
        <span className="text-secondary-4">29 May 2023</span>.
      </p>

      <img
        className="absolute left-9 -z-10 sm:-left-10"
        src={bgCirclesLeft}
        height={237}
        width={177}
        loading="eager"
        alt=""
      />
      <img
        className="absolute right-10 -z-10 sm:-right-10"
        src={bgCirclesRight}
        height={249}
        width={115}
        loading="eager"
        alt=""
      />
    </div>
  </div>
);

export default Congratulations;
