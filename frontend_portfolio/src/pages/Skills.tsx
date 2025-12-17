import { motion } from 'framer-motion';
import { Code, Database, Server, Terminal } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Data Analysis & Visualization",
      icon: <Database size={24} />,
      skills: [ "SQL","Python", "Excel", ]
    },
    {
      title: "Data Engineering & Big Data",
      icon: <Server size={24} />,
      skills: ["ETL Pipelines", "Data Warehousing", "Apache Spark", "Apache Kafka", "Apache Nifi", "Oracle", "MongoDB"]
    },
    {
      title: " Data Science & ML",
      icon: <Code size={24} />,
      skills: ["TensorFlow", "Scikit-learn", "Predictive Modeling"]
    },
    {
      title: "Programming ",
      icon: <Terminal size={24} />,
      skills: ["JavaScript", "Docker", "Git" ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-6 py-12 pt-24 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Technical Skills</h1>
        <p className="text-gray-600 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed text-lg">
         Leveraging a diverse and powerful toolkit to tackle complex data challenges, build robust systems, and drive impactful insights.

        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto bg-gray-200 dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
      >
        {skillCategories.map((cat, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg mr-4">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{cat.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 text-sm font-medium bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full border border-gray-200 dark:border-gray-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}











// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Code, Database, Server, Terminal, LayoutGrid, Puzzle, 
//   // Import specific icons for known technologies
//   // You'd typically use a library like 'react-icons/fa' or 'react-icons/si' for actual brand logos
//   // Here, we'll use lucide-react for structure, but imagine these are brand logos
//   Coffee, // Placeholder for "General" (used as Python placeholder instead of Flask)
//   Cpu, // Placeholder for ML/AI
//   Box, // Placeholder for Docker
//   GitBranch, // Placeholder for Git
//   Cloud, // Placeholder for Cloud/Big Data
//   Bug, // Placeholder for Debugging/Tools
//   Atom // Placeholder for JS/React
// } from 'lucide-react';

// // --- Skill Data with Simulated Logos ---
// // In a real app, you'd map skill names to actual SVG logo components
// const skillCategories = [
//   {
//     title: "Programming Languages",
//     icon: <Coffee size={36} />, // Simulating Python/General Lang (using Coffee as placeholder)
//     skills: [
//       { name: "Python", logo: Coffee }, // Using Coffee as a placeholder for Python
//       { name: "SQL", logo: Database },
//       { name: "JavaScript", logo: Atom }, // Simulating JS/React
//     ]
//   },
//   {
//     title: "Data Science & ML",
//     icon: <Cpu size={36} />, // Simulating ML/AI
//     skills: [
//       { name: "Pandas", logo: Puzzle }, // Placeholder
//       { name: "Scikit-learn", logo: Puzzle }, // Placeholder
//       { name: "TensorFlow", logo: Puzzle }, // Placeholder
//       { name: "Predictive Modeling", logo: Puzzle },
//       { name: "Statistical Analysis", logo: Puzzle },
//     ]
//   },
//   {
//     title: "Data Engineering & Big Data",
//     icon: <Cloud size={36} />, // Simulating Cloud/Big Data
//     skills: [
//       { name: "ETL Pipelines", logo: Server },
//       { name: "Data Warehousing", logo: Database },
//       { name: "Apache Spark", logo: Server }, // Placeholder
//       { name: "Apache Kafka", logo: Server }, // Placeholder
//       { name: "Apache Nifi", logo: Server }, // Placeholder
//     ]
//   },
//   {
//     title: "DevOps & Tools",
//     icon: <Terminal size={36} />,
//     skills: [
//       { name: "Docker", logo: Box }, // Simulating Docker
//       { name: "Git", logo: GitBranch }, // Simulating Git
//       { name: "Postman", logo: Bug }, // Placeholder
//       { name: "Linux", logo: Terminal },
//       { name: "Oracle", logo: Database },
//       { name: "MySQL", logo: Database },
//       { name: "MongoDB", logo: Database },
//     ]
//   },
//   {
//     title: "Visualization & BI",
//     icon: <LayoutGrid size={36} />, // Placeholder
//     skills: [
//       { name: "Power BI", logo: LayoutGrid }, // Placeholder
//       { name: "Excel", logo: LayoutGrid }, // Placeholder
//     ]
//   }
// ];

// // --- Animation Variants ---
// const containerVariants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       staggerChildren: 0.05, // Faster stagger for more items
//       delayChildren: 0.2,
//       ease: "easeOut",
//     }
//   }
// };

// const categoryCardVariants = {
//   hidden: { opacity: 0, y: 30, rotateX: -10, scale: 0.98 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     rotateX: 0,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 20,
//     }
//   }
// };

// const skillTagVariants = {
//   initial: { y: 0, scale: 1, opacity: 0.7, boxShadow: "0 2px 4px rgba(0,0,0,0.05)" },
//   hover: { 
//     y: -3, 
//     scale: 1.08, 
//     opacity: 1, 
//     boxShadow: "0 8px 16px rgba(90, 50, 200, 0.3)", // Stronger shadow on hover
//     transition: { type: 'spring', stiffness: 350, damping: 15 } 
//   }
// };

// const iconVariants = {
//   rest: { scale: 1, opacity: 0.8, rotate: 0 },
//   hover: { 
//     scale: 1.15, 
//     opacity: 1, 
//     rotate: [0, 5, -5, 0, 5, -5, 0], // More dynamic rotation
//     transition: { type: 'spring', stiffness: 200, damping: 10, duration: 0.8 } 
//   }
// };

// export default function Skills() {
//   return (
//     <div className="bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-blue-950 min-h-screen py-24 px-6"> {/* More vibrant gradient */}
      
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, ease: 'easeOut' }}
//         className="text-center mb-20"
//       >
//         <h1 className="text-6xl font-extrabold text-purple-800 dark:text-purple-300 mb-4 tracking-tight leading-tight">
//           My Arsenal of Skills
//         </h1>
//         <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
//           Leveraging a diverse and powerful toolkit to tackle complex data challenges, build robust systems, and drive impactful insights.
//         </p>
//       </motion.div>

//       <motion.div 
//         // variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto" // Wider max-width, larger gap
//       >
//         {skillCategories.map((cat, idx) => (
//           <motion.div 
//             key={idx} 
//             // variants={categoryCardVariants}
//             className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-lg dark:backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 
//                        hover:shadow-3xl transition-all duration-500 ease-in-out transform hover:-translate-y-4" // More pronounced effect
//             whileHover={{ scale: 1.03 }} // Slight scale up on hover
//             whileTap={{ scale: 0.98 }} // Tap effect
//           >
//             <motion.div className="flex items-center mb-6" whileHover="hover" initial="rest" 
//             animate={{ rest: {}, hover: { ...iconVariants.hover } }}>
//               <div className="p-5 bg-gradient-to-br from-purple-400 to-blue-500 dark:from-purple-600 dark:to-blue-700 text-white rounded-2xl shadow-lg mr-6 flex items-center justify-center">
//                 {cat.icon}
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{cat.title}</h3>
//             </motion.div>
            
//             <div className="flex flex-wrap gap-3 justify-start"> {/* Changed justify-center to justify-start */}
//               {cat.skills.map((skill, skillIdx) => (
//                 <motion.span 
//                   key={skill.name} 
//                   // variants={skillTagVariants}
//                   initial="initial"
//                   whileHover="hover"
//                   // Adding a delay to skill tag animation to make it appear after category card animation
//                   transition={{ type: 'spring', stiffness: 300, damping: 15, delay: skillIdx * 0.03 }} 
//                   className="px-5 py-2 text-base font-semibold bg-white/60 dark:bg-gray-700/60 text-gray-800 dark:text-gray-100 rounded-full border border-gray-300 dark:border-gray-600 shadow-md cursor-pointer 
//                              transition-all duration-300 ease-out backdrop-blur-sm" 
//                 >
//                   {/* Placeholder for actual brand logos */}
//                   {skill.logo && <skill.logo className="w-5 h-5 mr-2 inline-block" />} 
//                   {skill.name}
//                 </motion.span>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }