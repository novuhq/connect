import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links';

const TITLE = 'Ready to send your first notification?';

const LEFT_TITLE = 'Twitter';
const LEFT_DESCRIPTION = 'We’d love to stay connect with you.';
const LEFT_BUTTON_TEXT = 'Follow us on twitter';

const RIGHT_TITLE = 'Discord';
const RIGHT_DESCRIPTION = 'Join our community and get help from our team.';
const RIGHT_BUTTON_TEXT = 'Join the novu discord';

const GetStarted = () => (
  <section className="get-started safe-paddings py-40 lg:py-28 md:py-16 sm:py-11">
    <div className="container-md">
      <h2 className="text-center text-36 leading-tight md:text-28">{TITLE}</h2>

      <div className="mx-auto mt-16 grid grid-cols-2 gap-x-10 lg:gap-x-7 md:mt-12 md:gap-x-5 sm:mt-8 sm:grid-cols-1 sm:gap-x-0 sm:gap-y-7">
        <div className="flex flex-col items-center rounded-[20px] bg-gradient-to-b from-gray-2 to-[rgba(26,26,26,0.7)] p-8 pb-10 lg:rounded-2xl sm:order-2 sm:p-5">
          <h3 className="text-28 font-medium leading-snug sm:text-24">{LEFT_TITLE}</h3>
          <p className="font-book mb-7 mt-3 text-center text-16 leading-snug text-gray-9 sm:mb-5">
            {LEFT_DESCRIPTION}
          </p>
          <Button
            className="mt-auto sm:h-10 sm:text-12"
            size="sm"
            theme="gray-outline"
            {...LINKS.twitter}
          >
            {LEFT_BUTTON_TEXT}
          </Button>
        </div>

        <div className="flex flex-col items-center rounded-[20px] bg-get-started-card-gradient p-8 pb-10 lg:rounded-2xl sm:order-1 sm:p-5">
          <h3 className="text-28 font-medium leading-snug text-black sm:text-24">{RIGHT_TITLE}</h3>
          <p className="font-book mb-7 mt-3 text-center text-16 leading-snug text-black sm:mb-5">
            {RIGHT_DESCRIPTION}
          </p>
          <Button
            className="sm:text-xs mt-auto sm:h-10"
            size="sm"
            theme="black-filled"
            {...LINKS.discord}
          >
            {RIGHT_BUTTON_TEXT}
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default GetStarted;
