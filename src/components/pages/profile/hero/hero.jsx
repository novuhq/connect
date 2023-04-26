import React from 'react';

import Link from 'components/shared/link';
import useCountdown from 'hooks/use-countdown';
import useUser from 'hooks/use-user';
import GitHubIcon from 'icons/github.inline.svg';
import bgLines from 'images/bg-lines.svg';

const Hero = () => {
  const { user } = useUser();
  const { items, isLaunched } = useCountdown();
  return (
    <section className="safe-paddings pt-32">
      <div className="container-lg">
        <div className="flex items-center gap-x-5">
          <div className="profile-avatar group relative flex h-[152px] w-[152px] flex-shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-border md:mx-0 md:mr-10 sm:mx-auto">
            <img
              className="z-10 rounded-full grayscale transition-all duration-200 group-hover:grayscale-0"
              src={user?.image}
              height={128}
              width={128}
              loading="eager"
              alt={user?.name || ''}
            />
          </div>

          <div className="flex flex-col gap-y-4">
            <h1 className="text-48 font-medium leading-denser">{user?.name}</h1>
            <Link
              className="group flex items-center gap-x-2"
              to={`https://github.com/${user?.handle}`}
              target="__blank"
            >
              <GitHubIcon className="h-6 transition-opacity duration-200 group-hover:opacity-80" />
              <span className="text-18 text-secondary-4">{user?.handle}</span>
            </Link>
          </div>
        </div>

        <div className="grid-gap-x mt-10 grid grid-cols-10">
          <div className="relative col-span-7 flex max-w-[756px] flex-col items-center overflow-hidden rounded-lg pb-28 pt-20 before:absolute before:inset-0 before:bg-[linear-gradient(225deg,#00AAFF_0%,#E0CAFF_80.36%)] before:opacity-10">
            <h3 className="text-18 font-medium uppercase leading-none text-white">
              {isLaunched ? 'Time to end' : 'Time to launch'}
            </h3>

            <div className="mt-7 flex gap-x-18 md:gap-x-16 sm:gap-x-10 xs:gap-x-6">
              {items.map(({ number, title }, index) => (
                <div
                  className="flex w-[86px] flex-col items-center justify-center leading-none md:w-[76px] sm:w-14"
                  key={index}
                >
                  <span className="text-highlighting-blue-gradient text-64 font-medium md:text-56 sm:text-40 xs:text-28">
                    {number}
                  </span>
                  <span className="mt-2.5 font-medium uppercase text-gray-6 sm:text-14 xs:text-12">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-3">test</div>
        </div>
      </div>

      <img
        className="mt-[33px] w-full"
        src={bgLines}
        width={1920}
        height={580}
        loading="eager"
        alt=""
      />
    </section>
  );
};

export default Hero;
