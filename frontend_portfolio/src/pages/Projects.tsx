






// import { motion } from 'framer-motion';
// import ProjectCard from '../components/ProjectCard';

// const projects = [
//   {
//     title: 'Financial Fraud Detection System',
//     company: 'Wegagen Bank S.C',
//     year: '2025 - Present',
//     type: 'Data Science',
//     description: 'Developed and deployed predictive models using machine learning and statistical analysis to identify and mitigate financial fraud risks. Audited and integrated multiple data sources to ensure high accuracy.',
//     techStack: ['Python', 'Scikit-learn', 'SQL', 'Statistical Analysis'],
//     imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
//     liveUrl: '',
//     sourceUrl: '', 
//   },
//   {
//     title: 'Enterprise Data Warehouse & ETL',
//     company: 'Wegagen Bank S.C',
//     year: '2022 - 2024',
//     type: 'Data Engineering',
//     description: 'Architected data warehouse structures and developed robust ETL pipelines. Built interactive dashboards and reporting systems that served the entire bank for data-driven decision making.',
//     techStack: ['ETL', 'Data Warehousing', 'Power BI', 'SQL', 'Data Modeling'],
//     imageUrl: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=1000',
//     liveUrl: '',
//     sourceUrl: '',
//   },
//     {
//     title: 'streamlit app for Cryto data visualization',
//     company: 'Crypto Data Viz',
//     year: '2022 - 2024',
//     type: 'Data Engineering',
//     description: 'Architected data warehouse structures and developed robust ETL pipelines. Built interactive dashboards and reporting systems that served the entire bank for data-driven decision making.',
//     techStack: ['ETL', 'Data Warehousing', 'Power BI', 'SQL', 'Data Modeling'],
//     imageUrl: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=1000',
//     liveUrl: '',
//     sourceUrl: '',
//   },
//   {
//     title: 'App Lifecycle Management System',
//     company: 'INSA',
//     year: '2019 - 2022',
//     type: 'Software Dev',
//     description: 'Managed the full software development life cycle (SDLC) from planning to deployment. Developed scalable software solutions to meet business requirements and implemented them in production.',
//     techStack: ['ExpressJS', 'NextJS', 'MongoDB', 'Github', 'Docker', 'Git'],
//     // FIX: Removed '/public' from path
//     imageUrl: '/task mgt.png', 
//     liveUrl: 'https://task-mogndb.vercel.app/login',
//     sourceUrl: '',
//   },
//   {
//     title: 'IDELA Data Collection Analysis',
//     company: 'Save the Children',
//     year: '2017',
//     type: 'Data Analysis',
//     description: 'Participated in and completed data collection for the IDELA longitudinal study. Ensured data integrity and assisted in preliminary analysis for the organization.',
//     techStack: ['Data Collection', 'Field Analysis', 'Reporting'],
//     // FIX: Removed '/public' from path
//     imageUrl: '/exprience.jpg', 
//     liveUrl: '',
//     sourceUrl: '',
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// export default function Projects() {
//   return (
//     <div className="container mx-auto px-6 py-20">
//       <motion.div 
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-center mb-16"
//       >
//         <h1 className="text-4xl font-bold text-gray-800 mb-4 dark:text-white">Key Projects</h1>
//         <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
//           A highlight of my technical contributions in Data Science, Engineering, and Software Development across the banking and security sectors.
//         </p>
//       </motion.div>

//       <motion.div 
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         // FIX: Changed xl:grid-cols-3 to xl:grid-cols-2 for better symmetry with 4 items
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8"
//       >
//         {projects.map((project, index) => (
//           <ProjectCard key={index} project={project} />
//         ))}
//       </motion.div>
//     </div>
//   );
// }




















import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, X } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import CryptoChart from '../components/CryptoDashboard'; // Import your new chart component

const projects = [
  {
    title: 'Institutional Crypto Monitor',
    company: 'Personal Portfolio',
    year: '2025',
    type: 'Full-Stack Data Engineering',
    description: 'A complete ELT pipeline. Extracts data via Python (GitHub Actions), stores in BigQuery, transforms with dbt, and serves live analytics via a custom Python API.',
    techStack: ['Python', 'FastAPI', 'BigQuery', 'dbt', 'React'],
    imageUrl: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=1000', 
    sourceUrl: 'https://github.com/Meresa16/crypto-etl',
    embedUrl: null, // <--- ADD THIS (Satisfies TypeScript)
    liveUrl: null,
  },
  {
    title: 'Financial Fraud Detection System',
    company: 'Wegagen Bank S.C',
    year: '2025 - Present',
    type: 'Data Science',
    description: 'Developed and deployed predictive models using machine learning and statistical analysis to identify and mitigate financial fraud risks.',
    techStack: ['Python', 'Scikit-learn', 'SQL', 'Statistical Analysis'],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
    sourceUrl: '', 
    embedUrl: null, // <--- ADD THIS
    liveUrl: null,
  },
  {
    title: 'Enterprise Data Warehouse & ETL',
    company: 'Wegagen Bank S.C',
    year: '2022 - 2024',
    type: 'Data Engineering',
    description: 'Architected data warehouse structures and developed robust ETL pipelines using SSIS and SQL Server. Built interactive Power BI dashboards.',
    techStack: ['ETL', 'Data Warehousing', 'Power BI', 'SQL', 'Data Modeling'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=1000',
    sourceUrl: '',
    embedUrl: null, // <--- ADD THIS
    liveUrl: null,
  },
  {
    title: 'App Lifecycle Management System',
    company: 'INSA',
    year: '2019 - 2022',
    type: 'Software Dev',
    description: 'Managed the full software development life cycle (SDLC). Developed scalable software solutions using the MERN stack.',
    techStack: ['ExpressJS', 'NextJS', 'MongoDB', 'Docker', 'Git'],
    imageUrl: '/task mgt.png', 
    liveUrl: 'https://task-mogndb.vercel.app/login',
    sourceUrl: '',
    embedUrl: null, // <--- ADD THIS
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="container mx-auto px-6 py-20 relative">
      
      {/* --- SECTION 1: HEADER --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4 dark:text-white">Technical Projects</h1>
        <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
          From Data Engineering pipelines to Full-Stack applications. 
          Below is a <strong>Live Demo</strong> of my BigQuery integration.
        </p>
      </motion.div>

      {/* --- SECTION 2: LIVE BIGQUERY DEMO --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-20 bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Live Market Data
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              This chart fetches real-time data directly from my <strong>Google BigQuery</strong> warehouse via a <strong>Python FastAPI</strong> backend.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
             <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
               Architecture: React → FastAPI → BigQuery
             </span>
          </div>
        </div>

        {/* THE CHART COMPONENT */}
        <CryptoChart />
      </motion.div>

      {/* --- SECTION 3: PROJECT GRID --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <div key={index} onClick={() => project.embedUrl && setSelectedProject(project)}>
             <ProjectCard project={project} />
          </div>
        ))}
      </motion.div>

      {/* --- OPTIONAL: MODAL FOR IFRAMES (If needed later) --- */}
      <AnimatePresence>
        {selectedProject && selectedProject.embedUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <div className="bg-white dark:bg-gray-900 w-full h-[85vh] max-w-6xl rounded-2xl overflow-hidden shadow-2xl flex flex-col">
              <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold dark:text-white">{selectedProject.title}</h3>
                <div className="flex gap-2">
                   {selectedProject.sourceUrl && (
                     <a href={selectedProject.sourceUrl} target="_blank" rel="noreferrer" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                       <Github size={20} className="dark:text-white"/>
                     </a>
                   )}
                   <button onClick={() => setSelectedProject(null)} className="p-2 hover:bg-red-100 hover:text-red-600 rounded-full">
                     <X size={24} />
                   </button>
                </div>
              </div>
              <div className="flex-1 bg-gray-100 dark:bg-black">
                <iframe
                  src={selectedProject.embedUrl}
                  title="Project Demo"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}