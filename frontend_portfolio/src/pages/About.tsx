

// import { motion } from 'framer-motion';
// import { User, ShieldCheck, ExternalLink } from 'lucide-react';

// export default function About() {
//   return (
//     <div className="container mx-auto px-6 py-12 pt-24 min-h-screen">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-4xl mx-auto"
//       >
//         <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">About Me</h1>

//         {/* Profile Section */}
//         <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
//           <motion.img
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2 }}
//             // Ensure profile.jpg is in your public folder
//             src="/profile.jpg"
//             alt="Meresa Gidey"
//             className="w-56 h-56 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800 bg-gray-200"
//           />

//           <div className="flex-1 text-center md:text-left">
//             <h2 className="text-2xl font-semibold text-gray-700 dark:text-indigo-400 mb-4 flex items-center justify-center md:justify-start">
//               <User className="mr-2" /> Who I Am
//             </h2>
//             <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
//               I am a <strong>Cyber Data Analyst</strong> and <strong>Data Scientist Professional</strong> based in Addis Ababa, Ethiopia. 
//               With over six years of experience, I specialize in bridging the gap between raw data and strategic business decisions.
//             </p>
//             <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
//               My professional journey spans across <strong>Wegagen Bank</strong> and the <strong>Information Network Security Administration (INSA)</strong>. 
//               I am passionate about building predictive models to detect financial fraud and architecting robust data infrastructures that serve entire organizations.
//             </p>
//             Cyber Data Analyst and Data Scientist professional with 7+ years of experience driving strategic business decisions through data. 
//             Proven expertise in architecting robust data infrastructures, developing scalable ETL pipelines, and building predictive models for financial fraud detection. 
//             Skilled in Python, SQL, Apache Kafka, Apache Spark, and Business Intelligence tools, with a track record of delivering high-quality, scalable solutions. 
//             Adept at leveraging data analysis, database management, and application development to solve complex challenges. Based in Addis Ababa, Ethiopia.
//           </div>
//         </div>

//         {/* Verified Digital Presence Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-10 rounded-3xl border border-indigo-100 dark:border-indigo-800 text-center shadow-sm"
//         >
//           <div className="flex flex-col items-center">
//             <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-md mb-6">
//               <ShieldCheck className="text-indigo-600 dark:text-indigo-400 w-12 h-12" />
//             </div>

//             <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Verified Digital Credentials</h3>

//             <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto mb-8 leading-relaxed">
//               I maintain an active portfolio of verified certifications and badges on Credly. 
//               Click below to verify my technical skills in Data Science, Cybersecurity, and Analytics.
//             </p>

//             {/* Credly Link Button */}
//             <a 
//               href="https://www.credly.com/users/meresa-gidey/badges" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="inline-flex items-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
//             >
//               View My Credly Badges <ExternalLink size={18} className="ml-2" />
//             </a>
//           </div>
//         </motion.div>

//       </motion.div>
//     </div>
//   );
// }








import { motion } from 'framer-motion';
import { User, ShieldCheck, ExternalLink } from 'lucide-react';

// --- Animation Variants ---
const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const profileImageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 }
  }
};

const profileTextVariants = {
  hidden: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.3 } }
};

const credentialsVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.4 }
  }
};

export default function About() {
  // Use the refined summary text for the profile description
  const profileSummary =
    `A Cyber Data Analyst and Data Warehouse professional with over seven years of hands-on experience in data analysis, database management, application development, and business intelligence. I excel at predictive modeling, ETL pipeline development, and crafting interactive dashboards that translate complex data into strategic insights. My technical proficiencies include Python, SQL, Apache Kafka, Apache Spark, and a range of modern data engineering tools. I am known for delivering scalable, high-quality solutions and a proactive approach to adopting new technologies.`
  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-blue-950 min-h-screen py-24 px-6"> {/* Vibrant gradient background */}

      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate="animate"
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-6xl font-extrabold text-center mb-16 text-gray-900 dark:text-white tracking-tight leading-tight">
          About Meresa Gidey
        </h1>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20"> {/* Increased gap */}

          <motion.div variants={profileImageVariants} initial="hidden" animate="animate" className="flex-shrink-0">
            <motion.img
              src="/profile.jpg" // Ensure profile.jpg is in your public folder
              alt="Meresa Gidey"
              className="w-64 h-64 rounded-full object-cover shadow-xl border-8 border-white/50 dark:border-gray-800/50 bg-gray-200 transition-all duration-300 hover:shadow-2xl hover:scale-105"
              whileHover={{ rotate: 2, scale: 1.03 }} // Subtle hover effect
              whileTap={{ scale: 0.98 }}
            />
          </motion.div>
          <motion.div
            variants={profileTextVariants}
            initial="hidden"
            animate="animate"
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-5 flex items-center justify-center md:justify-start">
              <User className="mr-5 size-30" /> Cyber Data Analyst | Data Scientist | Data Warehouse & Analytics | Software & Database Development
            </h2>
            {/* This paragraph now correctly displays the refined summary */}
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              {profileSummary}
            </p>
          </motion.div>
        </div>

        {/* Verified Digital Presence Section */}
        <motion.div
          variants={credentialsVariants}
          initial="hidden"
          animate="animate"
          className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg dark:backdrop-blur-xl p-12 rounded-3xl border border-indigo-200 dark:border-indigo-800 text-center shadow-lg"
        >
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-br from-indigo-400 to-blue-500 text-white p-5 rounded-xl shadow-lg mb-7 flex items-center justify-center">
              <ShieldCheck className="w-14 h-14" />
            </div>

            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Verified Digital Credentials</h3>

            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed text-base">
              Explore my verified certifications and badges showcasing expertise in Data Science, Cybersecurity, and Analytics.
            </p>

            {/* Credly Link Button */}
            <motion.a
              href="https://www.credly.com/users/meresa-gidey/badges"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(90, 50, 200, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800 text-white font-bold rounded-full shadow-lg transition-all duration-300 ease-out"
            >
              View My Credly Badges <ExternalLink size={20} className="ml-3" />
            </motion.a>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}