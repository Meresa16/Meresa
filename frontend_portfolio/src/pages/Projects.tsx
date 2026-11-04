
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

export interface Project {
  title: string;
  company: string;
  year: string;
  type: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  sourceUrl: string;
  liveUrl: string | null;
}

const projects: Project[] = [
  {
    title: 'Financial Fraud Detection & Monitoring',
    company: 'Wegagen Bank S.C',
    year: '2025 - Present',
    type: 'Data Analytics',
    description: 'Developed a fraud-monitoring approach that combines rule-based logic and statistical analysis to help identify and assess potential financial fraud risks.',
    techStack: ['SQL', 'Statistical Analysis'],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
    sourceUrl: '',
    liveUrl: null,
  },
  {
    title: 'App Lifecycle Management System',
    company: 'INSA',
    year: '2019 - 2022',
    type: 'Software Development',
    description: 'Contributed to the software development lifecycle and built application features using JavaScript technologies and MongoDB.',
    techStack: ['Express.js', 'Next.js', 'MongoDB', 'Docker', 'Git'],
    imageUrl: '/task mgt.png',
    liveUrl: 'https://task-mogndb.vercel.app/login',
    sourceUrl: '',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const Projects: React.FC = () => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const handleCardImageClick = (project: Project) => {
    setZoomedImage(project.imageUrl);
  };

  return (
    <div className="container relative mx-auto min-h-screen px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">Selected Projects</h1>
        <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
          A selection of my work in data analytics and software development. Each project
          highlights the problem area, my contribution, and the tools involved.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2"
      >
        {projects.map((project) => (
          <div key={project.title} className="relative">
            <ProjectCard
              project={project}
              onImageClick={() => handleCardImageClick(project)}
            />
          </div>
        ))}
      </motion.div>

      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-4xl max-h-full overflow-hidden"
            >
              <button 
                onClick={() => setZoomedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>
              <img src={zoomedImage} alt="Zoomed Project View" className="w-full h-auto object-contain rounded-lg shadow-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Projects;
