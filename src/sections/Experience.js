import React from 'react';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';
import { WORK_EXPERIENCE } from '../mock/experience';

export default function Experience() {
  return (
    <>
      <section className="container mx-auto mt-16 space-y-10 pb-16 sm:pb-16">
        <HeadingAnimate amount={1}>
          <h2 className="text-center font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
            Data Engineering
          </h2>
        </HeadingAnimate>

        <LoadAnimate amount={0}>
          <div className="space-y-8">
            {WORK_EXPERIENCE.map((job, index) => (
              <div
                key={`experience-${index}`}
                className="rounded-lg border border-gray-200 p-6 transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="flex flex-col items-start justify-between md:flex-row md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300">
                      {job.position}
                    </h3>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      {job.company}
                    </p>
                  </div>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:mt-0 md:text-right">
                    <p className="font-medium">{job.duration}</p>
                    <p>{job.location}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {job.highlights.map((highlight, i) => (
                    <li
                      key={`highlight-${i}`}
                      className="flex gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-primary-700 dark:bg-primary-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </LoadAnimate>
      </section>
    </>
  );
}
