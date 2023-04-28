'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { LazyMotion, m, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useClickAway } from 'react-use';
import * as yup from 'yup';

import Button, { BUTTON_STATES } from 'components/shared/button';
import useCountdown from 'hooks/use-countdown';

import Select from './select/select';

const validationSchema = yup.object().shape({
  topic: yup.string().required('Please select a topic'),
  languages: yup.string().test('languages', 'Please enter the programming languages', function () {
    return this.options.context.languages.length > 0;
  }),
});

const SelectTopic = ({ user, setStates, setUser }) => {
  const [buttonState, setButtonState] = useState(BUTTON_STATES.DEFAULT);
  const [isSelectTopicOpen, setIsSelectTopicOpen] = useState(false);
  const [selectTopic, setSelectTopic] = useState('');

  const { items, isLoading: isCountdownLoading } = useCountdown(
    new Date('May 29, 2023 00:00:00').getTime()
  );

  const [isInputLanguageFocus, setIsInputLanguageFocus] = useState(false);
  const [languages, setLanguages] = useState([]);
  const inputLanguageRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      topic: selectTopic,
    },
    context: { languages },
  });

  useClickAway(inputLanguageRef, () => {
    setIsInputLanguageFocus(false);
  });

  const onSubmit = async (data) => {
    const { topic } = data;

    setButtonState(BUTTON_STATES.LOADING);

    try {
      const response = await fetch(`/api/submit-topic?userId=${user.id}`, {
        method: 'POST',
        body: JSON.stringify({ topic, languages }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setButtonState(BUTTON_STATES.DEFAULT);
        setStates((prev) => ({ ...prev, IS_SELECTED_TOPIC: true }));
        setUser(response);
      }
    } catch (error) {
      setButtonState(BUTTON_STATES.DEFAULT);
      console.log(error);
    }
  };

  const handleSelectTopic = (topic) => () => {
    setSelectTopic(topic);
    setIsSelectTopicOpen(false);
  };

  const handleDeleteLanguage = (index) => () => {
    const newLanguages = [...languages];
    newLanguages.splice(index, 1);
    setLanguages(newLanguages);
  };

  const handleAddLanguage = (e) => {
    if (e.keyCode === 32 || e.keyCode === 13) {
      e.preventDefault();

      const value = e.target.value.trim().replace(/,/g, '');

      if (value) {
        setLanguages([...languages, value]);
        e.target.value = '';
      }
    } else if (e.keyCode === 8) {
      if (!e.target.value) {
        const newLanguages = [...languages];
        newLanguages.pop();
        setLanguages(newLanguages);
      }
    }
  };

  useEffect(() => setValue('topic', selectTopic), [setValue, selectTopic]);

  return (
    <div className="relative mt-10 rounded-lg border-2 border-[rgba(224,202,255,0.8)] px-7 py-5 before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-[rgba(26,26,26,0.8)] before:backdrop-blur-[22px] sm:px-4">
      <div className="flex items-end justify-between [@media(max-width:540px)]:flex-col [@media(max-width:540px)]:items-center [@media(max-width:540px)]:gap-y-3.5">
        <div className="text-highlighting-blue-gradient">
          <span className="text-24 font-medium leading-tight">Select a topic</span>
        </div>
        <div className="flex items-center gap-x-1.5">
          <span className="text-16 leading-tight text-gray-8 xs:text-14">Until the end:</span>

          <LazyMotion features={domAnimation}>
            <m.div
              className="flex"
              initial={{ opacity: 0 }}
              animate={!isCountdownLoading && { opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {items.map(({ number, title }, index) => {
                const firstSymbol = title.charAt(0).toLowerCase();
                return (
                  <div className="group flex items-center justify-center leading-none" key={index}>
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
          </LazyMotion>
        </div>
      </div>

      <form className="mt-7" onSubmit={handleSubmit(onSubmit)}>
        <Select
          value={selectTopic}
          isOpen={isSelectTopicOpen}
          setIsOpen={setIsSelectTopicOpen}
          handleSelect={handleSelectTopic}
          error={errors?.topic?.message}
          {...register('topic')}
        />

        <div className="relative mt-8">
          <label className="text-14 leading-none text-gray-9" htmlFor="language">
            Programming languages
          </label>

          <div
            className={clsx(
              'mt-2.5 flex h-14 items-center overflow-hidden whitespace-nowrap rounded border border-[rgba(255,255,255,0.1)] bg-gray-1 leading-none text-gray-9 transition-colors duration-200',
              {
                'border-[rgba(0,163,255,1)] shadow-[0px_4px_14px_rgba(0,163,255,0.2)]':
                  isInputLanguageFocus,
              }
            )}
          >
            <ul className="flex h-full gap-x-3.5 px-[9px] py-3">
              {languages.map((language, index) => (
                <li
                  className="flex h-full flex-shrink-0 cursor-pointer items-center rounded bg-secondary-2 px-3 text-14 font-medium leading-none text-black"
                  key={index}
                  onClick={handleDeleteLanguage(index)}
                >
                  {language}
                </li>
              ))}
            </ul>
            <input
              className="h-full flex-grow appearance-none bg-transparent text-16 leading-none placeholder-gray-6 outline-none lg:text-14 md:text-16"
              type="text"
              name="languages"
              placeholder="Write by coma preferred programming languages for project, for example: NextJS, etc"
              onKeyDown={handleAddLanguage}
              onFocus={() => setIsInputLanguageFocus(true)}
              {...register('languages')}
              ref={inputLanguageRef}
            />
          </div>

          {errors?.languages && (
            <span className="absolute -bottom-2 left-0 translate-y-full text-12 leading-none text-gray-8">
              {errors.languages.message}
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
            <span className="z-10">
              {!!languages.length && selectTopic ? 'Submit a topic' : 'Select a topic'}
            </span>
          </Button>
        </div>
      </form>
    </div>
  );
};

SelectTopic.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  setStates: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default SelectTopic;
