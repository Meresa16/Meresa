import { motion, useReducedMotion } from 'framer-motion';
import { BarChart3, Database, ExternalLink, MapPin, Shield, ShieldCheck, User } from 'lucide-react';

const specialties = [
  {
    title: 'Cyber Analytics & Fraud Monitoring',
    description: 'At Wegagen Bank, analyze data with statistical methods and rule based to support fraud and risk identification.',
    icon: Shield,
    accent: 'text-violet-600 dark:text-violet-300',
    surface: 'bg-violet-100 dark:bg-violet-400/10',
  },
  {
    title: 'Data Warehousing & Business Intelligence',
    description: 'Design and maintain data warehouses, build ETL pipelines, and create Power BI dashboards and reports.',
    icon: Database,
    accent: 'text-cyan-700 dark:text-cyan-300',
    surface: 'bg-cyan-100 dark:bg-cyan-400/10',
  },
  {
    title: 'Software & Database Development',
    description: 'At INSA, developed software with Python and Java, supported databases, and contributed across the software development lifecycle.',
    icon: BarChart3,
    accent: 'text-indigo-600 dark:text-indigo-300',
    surface: 'bg-indigo-100 dark:bg-indigo-400/10',
  },
];

const riseIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50/70 to-cyan-50/60 px-6 py-24 dark:from-gray-950 dark:via-slate-900 dark:to-indigo-950">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-20 -z-10 h-96 w-96 rounded-full bg-indigo-400/15 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -left-24 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <motion.header
          variants={riseIn}
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-300">
            About me
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            About Meresa Gidey
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            I am a data professional with 8+ years of experience across cyber data analytics,
            data warehousing, business intelligence, and software development.
          </p>
        </motion.header>

        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: -24, rotateY: 8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            style={{ transformPerspective: 1000 }}
            className="mx-auto w-full max-w-sm"
          >
            <motion.div
              whileHover={prefersReducedMotion ? undefined : { y: -6, rotateY: 3, rotateX: -2 }}
              transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              style={{ transformPerspective: 1000 }}
              className="relative rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-2xl shadow-indigo-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-black/20"
            >
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src="/profile.jpg"
                  alt="Portrait of Meresa Gidey"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-4 px-2 pb-1 pt-5">
                <div>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">Meresa Gidey</p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Cyber Data Analytics · Data Science</p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-300">
                  <User size={21} />
                </span>
              </div>
              <div className="mt-3 flex items-center gap-2 px-2 pb-2 text-sm text-gray-500 dark:text-gray-400">
                <MapPin size={16} className="text-indigo-500 dark:text-indigo-300" />
                Addis Ababa, Ethiopia
              </div>
            </motion.div>
          </motion.div>

          <motion.section
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ staggerChildren: prefersReducedMotion ? 0 : 0.12 }}
            className="space-y-6"
            aria-labelledby="about-experience"
          >
            <motion.div variants={riseIn} transition={{ duration: 0.55, ease: 'easeOut' }}>
              <h2 id="about-experience" className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                My professional background
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
                Since 2022, I have held cyber data analytics and data warehouse and analytics
                roles at Wegagen Bank S.C. Earlier, from 2018 to 2022, I worked at the
                Information Network Security Administration (INSA) in application software
                development and database and data warehousing. This experience connects data
                analysis with the systems and platforms behind it.
              </p>
            </motion.div>

            <ul className="grid gap-4">
              {specialties.map(({ title, description, icon: Icon, accent, surface }) => (
                <motion.li
                  key={title}
                  variants={riseIn}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  whileHover={prefersReducedMotion ? undefined : { y: -4, rotateX: 2, rotateY: -1 }}
                  style={{ transformPerspective: 900 }}
                  className="flex items-start gap-4 rounded-2xl border border-white/70 bg-white/75 p-5 shadow-lg shadow-slate-900/5 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:shadow-black/10"
                >
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${surface} ${accent}`}>
                    <Icon size={22} />
                  </span>
                  <span>
                    <span className="block font-semibold text-gray-900 dark:text-white">{title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-gray-600 dark:text-gray-300">{description}</span>
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </div>

        <motion.section
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          whileHover={prefersReducedMotion ? undefined : { y: -4, rotateX: 1 }}
          style={{ transformPerspective: 1100 }}
          className="mt-16 overflow-hidden rounded-3xl border border-indigo-200/70 bg-white/70 p-8 text-center shadow-xl shadow-indigo-950/5 backdrop-blur-xl dark:border-indigo-300/10 dark:bg-white/5 dark:shadow-black/10 sm:p-12"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Certifications &amp; badges
          </h2>
          <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-300">
            View my professional credentials in data science, cybersecurity, and analytics.
          </p>
          <motion.a
            href="https://www.credly.com/users/meresa-gidey/badges"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/20 transition-colors hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            View Credly badges <ExternalLink size={18} />
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
}
