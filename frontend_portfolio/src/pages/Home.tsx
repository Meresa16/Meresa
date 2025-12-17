



import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const roles = [
  "Cyber Data Analyst",
  "Data Scientist",
  "Software & Database Developer"
];

export default function Home() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      // Typing Speed Logic
      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        // Finished typing word, pause before deleting
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div 
      // style={{ backgroundImage: "url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/087f6b9e-4dad-47b1-a3f2-3811a555b2ff/hero-background-mejxijj-176545<|fim_middle|><|fim_middle|><|fim_middle|>_sn<|fim_middle|><|fim_middle|><|fim_middle|><|fim_middle|>
      className=" h-screen bg-cover bg-center  bg-no-repeat"
      // style={{ backgroundImage: "url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/087f6b9e-4dad-47b1-a3f2-3811a555b2ff/hero-background-mejxijj-1765459879136.webp')" }}
      style={{ backgroundImage: "url('/public/image.png')" }}

    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        
        {/* Name Animation */}
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          Meresa Gidey
        </motion.h1>

        {/* Typewriter Role Animation */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
          className="h-16 md:h-20 mb-2 flex items-center justify-center"
        >
          <span className="text-2xl md:text-4xl font-semibold text-indigo-300 mr-2">I am a</span>
          <span className="text-3xl md:text-5xl font-bold text-white min-w-[10px]">
            {text}
          </span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-1 h-8 md:h-12 bg-indigo-400 ml-1 inline-block"
          />
        </motion.div>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="max-w-3xl text-lg md:text-xl text-gray-200 mb-8 leading-relaxed mt-4"
        >
          Specializing in SQL, predictive modeling, ETL pipelines, and business intelligence to drive data-driven strategies.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'backOut' }}
        >
          <Link 
            to="/experience"
            className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            View My Experience <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}



