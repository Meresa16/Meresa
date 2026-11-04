


import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Education', path: '/education' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <nav className="container mx-auto px-6 py-2 flex justify-between items-center">
        
        {/* Brand Name / Logo Section (FIXED ALIGNMENT) */}
        <Link to="/" className="flex items-center gap-3">
          
          {/* Logo Container */}
          <motion.div
            whileHover={{ scale: 1.06, rotate: 4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="h-11 w-11 rounded-full bg-gray-200/50 p-0.5 shadow-md dark:bg-gray-700/50"
          >
            <img
              src="/profile.jpg"  /* Path to your image */
              alt="Meresa Gidey Profile Logo"
              className="h-full w-full rounded-full object-cover"
            />
          </motion.div>
          
          {/* Restored Name (Properly sized and aligned) */}
          <span className="text-xl font-bold tracking-tight text-gray-800 dark:text-white">
            Meresa Gidey
          </span>

        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-5 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'
                }`
              }
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.span
                  layoutId="desktop-active-nav"
                  className="absolute inset-x-0 bottom-1 h-0.5 rounded-full bg-indigo-600 dark:bg-indigo-400"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </NavLink>
          ))}

          {/* Dark Mode Toggle (Remains the same) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="ml-4 p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors focus:outline-none"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Controls (Remains the same) */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="text-gray-600 dark:text-gray-300 focus:outline-none"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown (Remains the same) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col items-stretch gap-1 px-6 py-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-300'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-indigo-400'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}