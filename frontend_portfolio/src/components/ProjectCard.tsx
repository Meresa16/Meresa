// import { motion } from 'framer-motion';
// import { Globe, Github } from 'lucide-react';

// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { 
//     opacity: 1, 
//     y: 0,
//     transition: { duration: 0.5, ease: 'easeOut' }
//   },
// };

// export default function ProjectCard({ project }) {
//   return (
//     <motion.div 
//       variants={cardVariants}
//       className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
//     >
//       <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
//         <p className="text-gray-600 mb-4">{project.description}</p>
//         <div className="flex justify-between items-center">
//           <div className="flex space-x-4">
//             <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors flex items-center">
//               <Globe size={20} className="mr-1" /> Live Demo
//             </a>
//             <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-colors flex items-center">
//               <Github size={20} className="mr-1" /> Source
//             </a>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }













import { motion } from 'framer-motion';
import { Globe, Github, Building2, Calendar } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
};

export default function ProjectCard({ project }) {
  return (
    <motion.div 
      // variants={cardVariants}
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="relative">
        <img src={project.imageUrl} alt={project.title} className="w-full h-100 object-cover" />
        <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs px-3 py-1 rounded-bl-lg font-semibold">
          {project.type}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">{project.title}</h3>
          
          <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
             <span className="flex items-center"><Building2 size={14} className="mr-1"/> {project.company}</span>
             <span className="flex items-center"><Calendar size={14} className="mr-1"/> {project.year}</span>
          </div>

          <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
          
          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium border border-gray-200">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links - Only render if URLs exist */}
        {(project.liveUrl || project.sourceUrl) && (
          <div className="flex space-x-4 pt-4 border-t border-gray-100">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors flex items-center text-sm font-medium">
                <Globe size={18} className="mr-1" /> Live Demo
              </a>
            )}
            {project.sourceUrl && (
              <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-colors flex items-center text-sm font-medium">
                <Github size={18} className="mr-1" /> Source Code
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}