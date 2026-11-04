import { motion, useReducedMotion } from 'framer-motion';
import { Briefcase, Check, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Cyber Data Analytics and System Administration Officer',
    company: 'Wegagen Bank S.C',
    period: 'Jan 2025 – Present',
    location: 'Addis Ababa, Ethiopia',
    current: true,
    description: [
      'Analyze data and apply statistical methods to help identify potentially fraudulent activity.',
      'Build and maintain machine-learning models to support risk identification.',
      'Review and integrate data from multiple sources, maintaining data quality.',
      'Support systems used to collect, store, and analyze fraud-related data.',
    ],
  },
  {
    role: 'Data Warehouse and Analytics Officer',
    company: 'Wegagen Bank S.C',
    period: 'Dec 2022 – Dec 2024',
    location: 'Addis Ababa, Ethiopia',
    description: [
      'Designed and maintained data warehouse structures.',
      'Built ETL pipelines to clean, integrate, and load data.',
      'Translated business intelligence requirements into technical solutions.',
      'Created Power BI dashboards and reports to support decision-making.',
    ],
  },
  {
    role: 'Application Software Developer',
    company: 'Information Network Security Administration (INSA)',
    period: 'Dec 2019 – Dec 2022',
    location: 'Addis Ababa, Ethiopia',
    description: [
      'Contributed across the software development lifecycle, from planning through deployment.',
      'Built software solutions to meet business and user requirements.',
      'Developed and maintained applications using Python and Java.',
      'Worked with stakeholders to translate requirements into technical solutions.',
    ],
  },
  {
    role: 'Database and Data Warehouse Developer',
    company: 'Information Network Security Administration (INSA)',
    period: 'Feb 2019 – Nov 2019',
    location: 'Addis Ababa, Ethiopia',
    description: [
      'Designed and scheduled data warehouse implementations.',
      'Provided database support and resolved operational issues.',
      'Built reporting applications with a focus on data accuracy and consistency.',
      'Supported database backup and recovery processes.',
    ],
  },
  {
    role: 'IT Trainee',
    company: 'Information Network Security Administration (INSA)',
    period: 'Feb 2018 – Jan 2019',
    location: 'Addis Ababa, Ethiopia',
    description: [
      'Built foundational experience with DevOps, CI/CD, Docker, Git, Kafka, and GitHub workflows.',
      'Completed practical training in Node.js, Flutter, SQL, and API documentation.',
      'Applied these skills through guided exercises and demonstrations.',
    ],
  },
];

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-6 py-24 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950">
      <div aria-hidden="true" className="pointer-events-none absolute -right-36 top-24 -z-10 h-96 w-96 rounded-full bg-indigo-400/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-300">
            Career journey
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Professional Experience
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            A progression through cybersecurity analytics, data warehousing, and software development.
          </p>
        </motion.header>

        <div className="relative mx-auto max-w-5xl">
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-3 top-4 w-px bg-gradient-to-b from-indigo-500 via-indigo-300/60 to-cyan-300/20 md:left-1/2 md:-translate-x-1/2"
          />

          <ol className="space-y-8 md:space-y-10">
            {experiences.map((experience, index) => (
              <motion.li
                key={`${experience.role}-${experience.period}`}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: prefersReducedMotion ? 0 : 0.06, ease: 'easeOut' }}
                className={`relative flex pl-10 md:pl-0 ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-3 top-7 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full ring-4 ring-slate-50 dark:ring-gray-950 md:left-1/2 ${
                    experience.current
                      ? 'bg-emerald-500 shadow-[0_0_0_5px_rgba(16,185,129,0.15)]'
                      : 'bg-indigo-500'
                  }`}
                >
                  {experience.current && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                </span>

                <motion.article
                  whileHover={prefersReducedMotion ? undefined : { y: -4, rotateX: 1.2 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 24 }}
                  style={{ transformPerspective: 1100 }}
                  className="w-full rounded-2xl border border-gray-200/80 bg-white/85 p-6 shadow-lg shadow-slate-900/5 backdrop-blur-md dark:border-white/10 dark:bg-gray-900/70 dark:shadow-black/10 md:w-[calc(50%-2.5rem)]"
                >
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-sm font-semibold text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-300">
                      <Briefcase size={14} />
                      {experience.period}
                    </span>
                    {experience.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Current role
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl font-bold leading-snug text-gray-900 dark:text-white">
                    {experience.role}
                  </h2>
                  <p className="mt-2 font-medium text-indigo-700 dark:text-indigo-300">
                    {experience.company}
                  </p>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin size={14} />
                    {experience.location}
                  </p>

                  <ul className="mt-5 space-y-3 border-t border-gray-100 pt-4 dark:border-gray-800">
                    {experience.description.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                        <Check size={16} className="mt-0.5 shrink-0 text-indigo-500 dark:text-indigo-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
