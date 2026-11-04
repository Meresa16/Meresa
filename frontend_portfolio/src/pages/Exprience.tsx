import { motion } from 'framer-motion';
import { Briefcase, MapPin, CheckCircle } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Cyber Data Analytics and System Administration Officer',
    company: 'Wegagen Bank S.C',
    period: 'Jan 2025 – Present',
    location: 'Addis Ababa, Ethiopia',
    description: [
    'Analyze data and apply statistical methods to help identify potentially fraudulent activity.',
    'Build and maintain machine-learning models to support risk identification.',
    'Review and integrate data from multiple sources, maintaining data quality.',
    'Support systems used to collect, store, and analyze fraud-related data.'
    ]
  },
  {
    id: 2,
    role: 'Data Warehouse and Analytics Officer',
    company: 'Wegagen Bank S.C',
    period: 'Dec 2022 – Dec 2024',
    location: 'Addis Ababa, Ethiopia',
    description: [
      'Designed and maintained data warehouse structures.',
      'Built ETL pipelines to clean, integrate, and load data.',
      'Translated business intelligence requirements into technical solutions.',
      'Created Power BI dashboards and reports to support decision-making.'
    ]
  },
  {
    id: 3,
    role: 'Application Software Developer',
    company: 'Information Network Security Administration (INSA)',
    period: 'Dec 2019 – Dec 2022',
    location: 'Addis Ababa, Ethiopia',
    description: [
      'Contributed across the software development lifecycle, from planning through deployment.',
      'Built software solutions to meet business and user requirements.',
      'Developed and maintained applications using Python and Java.',
      'Worked with stakeholders to translate requirements into technical solutions.'
    ]
  },
  {
    id: 4,
    role: 'Database and Data Warehouse Developer',
    company: 'Information Network Security Administration (INSA)',
    period: 'Feb 2019 – Nov 2019',
    location: 'Addis Ababa, Ethiopia',
    description: [
      'Designed and scheduled data warehouse implementations.',
      'Provided database support and resolved operational issues.',
      'Built reporting applications with a focus on data accuracy and consistency.',
      'Supported database backup and recovery processes.'
    ]
  },
  {
    id: 5,
    role: 'IT Trainee',
    company: 'Information Network Security Administration (INSA)',
    period: 'Feb 2018 – Jan 2019',
    location: 'Addis Ababa, Ethiopia',
    description: [
      'Built foundational experience with DevOps, CI/CD, Docker, Git, Kafka, and GitHub workflows.',
      'Completed practical training in Node.js, Flutter, SQL, and API documentation.',
      'Applied these skills through guided exercises and demonstrations.'
    ]
  }
];

export default function Experience() {
  return (
    <div className="container mx-auto px-6 py-12 pt-24 min-h-screen ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Professional Experience</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Experience across data analytics, data engineering, cybersecurity analytics, and software development.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-100 dark:bg-gray-700 hidden md:block" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } items-start`}
            >
              {/* Timeline Dot (Desktop) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-800 rounded-full border-4 border-white/80 dark:border-gray-900 shadow-sm hidden md:block mt-6" />

              {/* Content Card */}
              <div className="w-full md:w-5/12">
                <motion.div
                  whileHover={{ y: -4, rotateX: 1.5 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  style={{ transformPerspective: 1000 }}
                  className="rounded-lg border border-gray-50 bg-white p-6 shadow-md transition-shadow hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{exp.role}</h3>
                  
                  <div className="flex flex-col space-y-1 mb-4 text-gray-500 dark:text-gray-400 text-sm">
                    <span className="flex items-center">
                      <Briefcase size={14} className="mr-2" /> {exp.company}
                    </span>
                    <span className="flex items-center">
                      <MapPin size={14} className="mr-2" /> {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-600 dark:text-gray-300 text-sm">
                        <CheckCircle size={16} className="mr-2 mt-0.5 text-indigo-400 dark:text-indigo-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

