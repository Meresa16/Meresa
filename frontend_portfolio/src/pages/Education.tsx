import { motion, useReducedMotion } from 'framer-motion';
import { Award, CalendarDays, ExternalLink, GraduationCap } from 'lucide-react';

const degrees = [
  {
    degree: 'MSc in Data Science',
    institution: 'Emerald International College',
    period: '2023 – 2025',
    level: 'Graduate degree',
  },
  {
    degree: 'BSc in Information Systems',
    institution: 'Mekelle University',
    period: '2013 – 2017',
    level: 'Undergraduate degree',
  },
];

const certifications = [
  {
    title: 'CompTIA CySA+ (Cybersecurity Analyst)',
    issuer: 'Apptech Learning Center',
  },
  {
    title: 'Data Analysis Fundamentals',
    issuer: 'Udacity (Ethiopian Government-supported)',
    link: 'https://learn.udacity.com/view-certificate/nd002-gc-251',
  },
  {
    title: 'Power BI Certificate of Achievement',
    issuer: '365 Data Science',
    link: 'https://learn.365financialanalyst.com/certificates/CC-37AF3DC2A1/',
  },
  {
    title: 'Introduction to Data & Data Science',
    issuer: '365 Data Science',
    link: 'https://learn.365datascience.com/c/30fbcfc48a',
  },
  {
    title: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    link: 'https://www.credly.com/badges/5d708d94-ebe4-4bba-89fc-8f6516142140/public_url',
  },
  {
    title: 'SQL Certificate of Completion',
    issuer: '365 Data Science',
    link: 'https://learn.365datascience.com/c/bfb4a3ec89',
  },
  {
    title: 'Short-term Training on Data Science',
    issuer: 'Emerald International College',
  },
];

export default function Education() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50/60 to-blue-50 px-6 py-24 dark:from-gray-950 dark:via-slate-900 dark:to-indigo-950">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-20 -z-10 h-96 w-96 rounded-full bg-indigo-400/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-300">
            Learning &amp; development
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Education &amp; Certifications
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Academic foundations and professional learning across data science,
            analytics, and cybersecurity.
          </p>
        </motion.header>

        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <section aria-labelledby="degrees-heading">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-300">
                <GraduationCap size={24} />
              </span>
              <div>
                <h2 id="degrees-heading" className="text-2xl font-bold text-gray-900 dark:text-white">
                  Academic degrees
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Formal education</p>
              </div>
            </motion.div>

            <div className="relative space-y-5 before:absolute before:bottom-8 before:left-6 before:top-8 before:w-px before:bg-gradient-to-b before:from-indigo-400/60 before:to-cyan-400/20">
              {degrees.map((degree, index) => (
                <motion.article
                  key={degree.degree}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : index * 0.12 }}
                  whileHover={prefersReducedMotion ? undefined : { y: -4, rotateX: 1.5 }}
                  style={{ transformPerspective: 1000 }}
                  className="relative ml-6 rounded-2xl border border-white/80 bg-white/80 p-6 pl-9 shadow-lg shadow-slate-900/5 backdrop-blur-md dark:border-white/10 dark:bg-gray-900/65 dark:shadow-black/10"
                >
                  <span className="absolute -left-[1.05rem] top-7 flex h-8 w-8 items-center justify-center rounded-full border-4 border-slate-50 bg-indigo-500 shadow-sm dark:border-gray-950">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300">
                    {degree.level}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
                    {degree.degree}
                  </h3>
                  <p className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                    {degree.institution}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <CalendarDays size={16} className="text-indigo-500 dark:text-indigo-300" />
                    {degree.period}
                  </p>
                </motion.article>
              ))}
            </div>
          </section>

          <section aria-labelledby="certifications-heading">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                <Award size={23} />
              </span>
              <div>
                <h2 id="certifications-heading" className="text-2xl font-bold text-gray-900 dark:text-white">
                  Certifications &amp; training
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Select a linked credential to view it
                </p>
              </div>
            </motion.div>

            <motion.ul
              initial={prefersReducedMotion ? false : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ staggerChildren: prefersReducedMotion ? 0 : 0.07 }}
              className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1"
            >
              {certifications.map((cert) => (
                <motion.li
                  key={`${cert.title}-${cert.issuer}`}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="group rounded-xl border border-white/80 bg-white/75 p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-white/10 dark:bg-gray-900/60 dark:hover:border-indigo-300/30"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-300">
                      <Award size={16} />
                    </span>
                    <div className="min-w-0 flex-1">
                      {cert.link ? (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-start gap-1.5 font-semibold text-gray-900 transition-colors hover:text-indigo-600 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 dark:text-white dark:hover:text-indigo-300"
                        >
                          <span>{cert.title}</span>
                          <ExternalLink size={14} className="mt-1 shrink-0 opacity-60" />
                        </a>
                      ) : (
                        <span className="font-semibold text-gray-900 dark:text-white">{cert.title}</span>
                      )}
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </section>
        </div>
      </div>
    </div>
  );
}
