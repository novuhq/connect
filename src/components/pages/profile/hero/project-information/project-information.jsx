import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const ProjectInformation = ({ user }) => (
  <div className="rounded-lg bg-[#17191C] px-7 pb-7 pt-5 sm:px-4">
    <span className="text-24 font-medium leading-tight">Hackathon topic</span>

    <div className="mt-8 flex flex-col divide-y divide-gray-4">
      <div className="flex flex-col pb-5">
        <span className="text-14 leading-none text-gray-9">Topic</span>
        <span className="mt-2 text-18 font-medium leading-tight sm:text-16">{user.topic}</span>
      </div>

      <div className="flex flex-col py-5">
        <span className="text-14 leading-none text-gray-9">Programming languages</span>
        <ul className="mt-4 flex h-full gap-x-3.5">
          {user.topicLanguages.map((language, index) => (
            <li
              className="flex h-[30px] flex-shrink-0 items-center rounded bg-secondary-2 px-3 text-14 font-medium leading-none text-black"
              key={index}
            >
              {language}
            </li>
          ))}
        </ul>
      </div>

      {user?.projectUrl && (
        <div
          className={clsx('flex flex-col pt-5', {
            'pb-5': user?.projectDescription,
          })}
        >
          <span className="text-14 leading-none text-gray-9">Repository url</span>
          <a
            className="mt-2 break-all text-18 font-book leading-tight text-primary-1 transition-colors duration-200 hover:text-white sm:text-16"
            href={user.projectUrl}
            target="_blank"
            rel="noreferrer"
          >
            {user.projectUrl}
          </a>
        </div>
      )}

      {user?.projectDescription && (
        <div className="flex flex-col pt-5">
          <span className="text-14 leading-none text-gray-9">Description of the project</span>
          <span className="mt-2 text-18 font-book leading-tight sm:text-16">
            {user.projectDescription}
          </span>
        </div>
      )}
    </div>
  </div>
);

ProjectInformation.propTypes = {
  user: PropTypes.shape({
    topic: PropTypes.string,
    topicLanguages: PropTypes.arrayOf(PropTypes.string),
    projectUrl: PropTypes.string,
    projectDescription: PropTypes.string,
  }).isRequired,
};

export default ProjectInformation;
