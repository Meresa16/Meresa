import { motion, useReducedMotion } from 'framer-motion';
import { BarChart3, BrainCircuit, Code2, Server } from 'lucide-react';

const skillCategories = [
  {
    title: 'Data Analytics & BI',
    description: 'Query, explore, and communicate data for decision-making.',
    icon: BarChart3,
    skills: ['SQL', 'Excel', 'Power BI'],
    accent: 'from-indigo-500 to-blue-500',
    glow: 'bg-indigo-500/15',
  },
  {
    title: 'Data Engineering',
    description: 'Build and support data workflows, platforms, and storage.',
    icon: Server,
    skills: ['ETL Pipelines', 'Data Warehousing', 'Apache Spark', 'Apache Kafka', 'Apache NiFi', 'Oracle', 'MongoDB'],
    accent: 'from-cyan-500 to-teal-500',
    glow: 'bg-cyan-500/15',
  },
  {
    title: 'Data Science & Machine Learning',
    description: 'Use statistical and machine-learning methods to explore patterns and predictions.',
    icon: BrainCircuit,
    skills: ['TensorFlow', 'Scikit-learn', 'Predictive Modeling'],
    accent: 'from-violet-500 to-fuchsia-500',
    glow: 'bg-violet-500/15',
  },
  {
    title: 'Programming & Delivery',
    description: 'Develop applications and support reliable software delivery.',
    icon: Code2,
    skills: ['Python', 'Java', 'JavaScript', 'Docker', 'Git'],
    accent: 'from-amber-500 to-orange-500',
    glow: 'bg-amber-500/15',
  },
];

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-6 py-24 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950">
      <div aria-hidden="true" className="pointer-events-none absolute -left-36 top-24 -z-10 h-96 w-96 rounded-full bg-indigo-400/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-36 bottom-0 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-300">
            Tools I work with
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Technical Skills
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            A practical toolkit spanning analytics, data platforms, machine learning, and software delivery.
          </p>
        </motion.header>

        <motion.div
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: prefersReducedMotion ? 0 : 0.12 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {skillCategories.map(({ title, description, icon: Icon, skills, accent, glow }) => (
            <motion.article
              key={title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              whileHover={prefersReducedMotion ? undefined : { y: -7, rotateX: 2, rotateY: 1 }}
              style={{ transformPerspective: 1100 }}
              className="group relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white/85 p-7 shadow-lg shadow-slate-900/5 backdrop-blur-md transition-shadow hover:shadow-2xl hover:shadow-indigo-950/10 dark:border-white/10 dark:bg-gray-900/70 dark:shadow-black/10"
            >
              <div aria-hidden="true" className={`pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full ${glow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />

              <div className="relative flex items-start gap-5">
                <motion.div
                  whileHover={prefersReducedMotion ? undefined : { rotateY: 180, scale: 1.06 }}
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                  style={{ transformPerspective: 700 }}
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg`}
                >
                  <Icon size={26} strokeWidth={1.8} />
                </motion.div>
                <div className="min-w-0">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">{title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{description}</p>
                </div>
              </div>

              <ul className="relative mt-7 flex flex-wrap gap-2.5" aria-label={`${title} skills`}>
                {skills.map((skill, index) => (
                  <motion.li
                    key={skill}
                    initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: prefersReducedMotion ? 0 : index * 0.045, duration: 0.25 }}
                    whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-indigo-400/50 dark:hover:bg-indigo-400/10 dark:hover:text-indigo-200"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>

              <motion.div
                aria-hidden="true"
                className={`absolute bottom-0 left-7 right-7 h-0.5 origin-left rounded-full bg-gradient-to-r ${accent}`}
                initial={prefersReducedMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
