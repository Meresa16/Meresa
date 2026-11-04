


import { AnimatePresence, motion, MotionConfig, useReducedMotion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { ThemeProvider } from './context/ThemeContext'; // Ensure this path is correct
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
// import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Experience from './pages/Exprience';
import Footer from './components/Footer';
import Projects from './pages/Projects';

function App() {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <div className="min-h-screen bg-white font-sans transition-colors duration-300 dark:bg-gray-900">
          <Header />
          <AnimatePresence mode="wait" initial={false}>
            <motion.main
              key={location.pathname}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </motion.main>
          </AnimatePresence>
          <Footer />
          <Toaster position="top-right" />
        </div>
      </ThemeProvider>
    </MotionConfig>
  );
}

export default App;