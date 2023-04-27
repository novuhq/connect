'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { AnimatePresence, LazyMotion, m, domAnimation } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import Button from 'components/shared/button';
import TOPICS from 'constants/topics';
import useCountdown from 'hooks/use-countdown';

const validationSchema = yup.object().shape({
  topic: yup.string().required('Please select a topic'),
  languages: yup.string().required('Please enter the programming languages'),
});

const SelectTopic = () => {
  const [isSelectTopicOpen, setIsSelectTopicOpen] = useState(false);
  const [selectTopic, setSelectTopic] = useState('');

  const { items, isLoading: isCountdownLoading } = useCountdown(
    new Date('May 29, 2023 00:00:00').getTime()
  );

  const [isInputLanguageFocus, setIsInputLanguageFocus] = useState(false);
  const [languages, setLanguages] = useState([]);

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
  });

  const onSubmit = (data) => {
    console.log(data);
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

  useEffect(() => {
    const inputTopic = document.getElementById('inputTopic');
    const inputLanguage = document.getElementById('inputLanguage');

    inputTopic.addEventListener('focus', () => setIsSelectTopicOpen(true));
    inputTopic.addEventListener('blur', () => setIsSelectTopicOpen(false));

    inputLanguage.addEventListener('focus', () => setIsInputLanguageFocus(true));
    inputLanguage.addEventListener('blur', () => setIsInputLanguageFocus(false));
    inputLanguage.addEventListener('keydown', handleAddLanguage);

    return () => {
      inputTopic.removeEventListener('focus', () => setIsSelectTopicOpen(true));
      inputTopic.removeEventListener('blur', () => setIsSelectTopicOpen(false));

      inputLanguage.removeEventListener('focus', () => setIsInputLanguageFocus(true));
      inputLanguage.removeEventListener('blur', () => setIsInputLanguageFocus(false));
      inputLanguage.removeEventListener('keydown', handleAddLanguage);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative mt-10 rounded-lg px-7 py-5 before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-[rgba(26,26,26,0.8)] before:backdrop-blur-[22px]">
      <div className="flex items-end justify-between">
        <span className="text-24 font-medium leading-tight">Select a topic</span>
        <div className="flex items-center gap-x-1.5">
          <span className="text-16 leading-tight text-gray-8">Until the end:</span>

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
                      <span className="text-16 leading-tight">{number}</span>
                      <span className="text-16 leading-tight text-white">{firstSymbol}</span>
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
        <div className="relative">
          <label className="text-14 leading-none text-gray-9" htmlFor="topic">
            Topic
          </label>
          <div
            id="inputTopic"
            className={clsx(
              'mt-2.5 flex h-14 cursor-pointer items-center overflow-hidden rounded border border-[rgba(255,255,255,0.1)] bg-gray-1 px-[18px] outline-none',
              {
                'shadow-[0px_4px_14px_rgba(0,163,255,0.2)]': isSelectTopicOpen,
              }
            )}
            role="button"
            tabIndex={0}
          >
            <span className="whitespace-nowrap leading-none text-gray-9 lg:text-14 md:text-16">
              {selectTopic || 'Select topic'}
            </span>

            <input type="hidden" name="topic" {...register('topic')} />
          </div>

          <LazyMotion features={domAnimation}>
            <AnimatePresence>
              {isSelectTopicOpen && (
                <m.ul
                  className="scrollbar-hidden absolute top-full z-20 mt-2 max-h-[408px] overflow-auto rounded-md border border-gray-4 bg-gray-3 py-1.5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  {TOPICS.map((topic, index) => (
                    <li
                      className="cursor-pointer border-b border-gray-4 px-5 py-3.5 text-left text-16 font-light leading-tight transition-colors duration-200 last:border-none hover:bg-[rgba(255,255,255,0.05)]"
                      key={index}
                      onClick={handleSelectTopic(topic)}
                    >
                      {topic}
                    </li>
                  ))}
                </m.ul>
              )}
            </AnimatePresence>
          </LazyMotion>

          {errors?.topic && (
            <span className="absolute -bottom-2 left-0 translate-y-full text-12 leading-none text-gray-8">
              {errors.topic.message}
            </span>
          )}
        </div>

        <div className="relative mt-8">
          <label className="text-14 leading-none text-gray-9" htmlFor="language">
            Programming languages
          </label>

          <div
            className={clsx(
              'mt-2.5 flex h-14 items-center overflow-hidden whitespace-nowrap rounded border border-[rgba(255,255,255,0.1)] bg-gray-1 leading-none text-gray-9',
              {
                'shadow-[0px_4px_14px_rgba(0,163,255,0.2)]': isInputLanguageFocus,
              }
            )}
          >
            <ul className="flex h-full gap-x-3.5 px-[9px] py-3">
              {languages.map((language, index) => (
                <li
                  className="flex h-full flex-shrink-0 cursor-pointer items-center rounded bg-gray-3 bg-secondary-2 px-3 text-14 font-medium leading-none leading-none text-black"
                  key={index}
                  onClick={handleDeleteLanguage(index)}
                >
                  {language}
                </li>
              ))}
            </ul>
            <input
              id="inputLanguage"
              className="h-full flex-grow appearance-none bg-transparent text-16 leading-none placeholder-gray-6 outline-none lg:text-14 md:text-16"
              type="text"
              name="languages"
              placeholder="Write by coma preferred programming languages for project, for example: NextJS, etc"
              {...register('languages')}
            />
          </div>

          {errors?.languages && (
            <span className="absolute -bottom-2 left-0 translate-y-full text-12 leading-none text-gray-8">
              {errors.languages.message}
            </span>
          )}
        </div>

        <div className="flex justify-end">
          <Button className="mt-10 xs:text-12" size="md" theme="primary" type="submit">
            <span className="z-10">Select a topic</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SelectTopic;
