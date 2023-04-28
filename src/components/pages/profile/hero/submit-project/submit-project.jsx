'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { LazyMotion, m, domAnimation, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import Button, { BUTTON_STATES } from 'components/shared/button';
import useCountdown from 'hooks/use-countdown';
import submittedProjectIllustration from 'images/profile/submitted-project.svg';

const validationSchema = yup.object().shape({
  repositoryUrl: yup.string().required('Please provide a link to the repository'),
  description: yup.string().required('Please provide a description'),
});
const SubmitProject = ({ user, states, setStates, setUser }) => {
  const [buttonState, setButtonState] = useState(BUTTON_STATES.DEFAULT);

  const { items, isLoading: isCountdownLoading } = useCountdown(
    new Date('May 29, 2023 00:00:00').getTime()
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    const { repositoryUrl, description } = data;

    setButtonState(BUTTON_STATES.LOADING);

    try {
      const response = await fetch(`/api/submit-project?userId=${user.id}`, {
        method: 'POST',
        body: JSON.stringify({ projectUrl: repositoryUrl, projectDescription: description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      if (response.ok) {
        setButtonState(BUTTON_STATES.DEFAULT);
        setStates((prev) => ({ ...prev, IS_SUBMITTED_PROJECT: true }));
        setUser(response);
      }
    } catch (error) {
      setButtonState(BUTTON_STATES.DEFAULT);
      console.log(error);
    }
  };

  return (
    <div className="relative mt-10 rounded-lg border-2 border-[rgba(224,202,255,0.8)] px-7 py-5 before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-[rgba(26,26,26,0.8)] before:backdrop-blur-[22px] sm:px-4">
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {states.IS_SUBMITTED_PROJECT && (
            <m.div
              className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <img
                src={submittedProjectIllustration}
                width={196}
                height={124}
                loading="eager"
                alt=""
              />
              <div className="mt-8 flex max-w-[504px] flex-col text-center">
                <span className="text-40 font-medium leading-tight sm:text-32">
                  Your project submitted!
                </span>
                <p className="mt-4 text-18 font-light leading-tight sm:text-16">
                  We will review project in a few days and you can check the result score here. Be
                  in touch!
                </p>
              </div>
            </m.div>
          )}
        </AnimatePresence>

        <div className={clsx(states.IS_SUBMITTED_PROJECT && 'invisible opacity-0')}>
          <div className="flex items-end justify-between [@media(max-width:540px)]:flex-col [@media(max-width:540px)]:items-center [@media(max-width:540px)]:gap-y-3.5">
            <div className="text-highlighting-blue-gradient">
              <span className="text-24 font-medium leading-tight">Submit your project</span>
            </div>
            <div className="flex items-center gap-x-1.5">
              <span className="text-16 leading-tight text-gray-8 xs:text-14">Until the end:</span>

              <m.div
                className="flex"
                initial={{ opacity: 0 }}
                animate={!isCountdownLoading && { opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {items.map(({ number, title }, index) => {
                  const firstSymbol = title.charAt(0).toLowerCase();
                  return (
                    <div
                      className="group flex items-center justify-center leading-none"
                      key={index}
                    >
                      <div className="group-last:w-[34px]">
                        <span className="text-16 leading-tight xs:text-14">{number}</span>
                        <span className="text-16 leading-tight text-white xs:text-14">
                          {firstSymbol}
                        </span>
                      </div>
                      <span className="mx-1.5 inline-block group-last:hidden">:</span>
                    </div>
                  );
                })}
              </m.div>
            </div>
          </div>

          <form className="mt-7" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative">
              <label className="text-14 leading-none text-gray-9" htmlFor="repositoryUrl">
                Repository url
              </label>

              <input
                className="mt-2.5 h-14 w-full appearance-none rounded border border-[rgba(255,255,255,0.1)] bg-gray-1 bg-transparent px-[18px] text-16 leading-none text-white placeholder-gray-6 outline-none transition-colors duration-200 focus:border-[rgba(0,163,255,1)] focus:shadow-[0px_4px_14px_rgba(0,163,255,0.2)] lg:text-14 md:text-16"
                type="text"
                name="repositoryUrl"
                placeholder="Add the link to the repository after the project is done..."
                {...register('repositoryUrl')}
              />

              {errors?.repositoryUrl && (
                <span className="absolute -bottom-2 left-0 translate-y-full text-12 leading-none text-gray-8">
                  {errors.repositoryUrl.message}
                </span>
              )}
            </div>

            <div className="relative mt-8">
              <label className="text-14 leading-none text-gray-9" htmlFor="description">
                Description of the project
              </label>

              <textarea
                className="mt-2.5 w-full appearance-none rounded border border-[rgba(255,255,255,0.1)] bg-gray-1 bg-transparent px-[18px] py-5 text-16 leading-tight text-white placeholder-gray-6 outline-none transition-colors duration-200 focus:border-[rgba(0,163,255,1)] focus:shadow-[0px_4px_14px_rgba(0,163,255,0.2)] lg:text-14 md:text-16"
                name="description"
                placeholder="Add the description of the project..."
                {...register('description')}
              />

              {errors?.description && (
                <span className="absolute -bottom-2 left-0 translate-y-full text-12 leading-none text-gray-8">
                  {errors.description.message}
                </span>
              )}
            </div>

            <div className="flex justify-end">
              <Button
                className="mt-10 xs:text-12 [@media(max-width:540px)]:w-full"
                size="md"
                theme="primary"
                type="submit"
                state={buttonState}
              >
                <span className="z-10">Submit a result</span>
              </Button>
            </div>
          </form>
        </div>
      </LazyMotion>
    </div>
  );
};

SubmitProject.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  states: PropTypes.shape({
    IS_SUBMITTED_PROJECT: PropTypes.bool,
  }).isRequired,
  setStates: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default SubmitProject;
