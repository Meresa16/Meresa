import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger children animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const iconHoverVariants = {
  hover: { scale: 1.1, rotate: 5, transition: { type: 'spring', stiffness: 300 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Start submission state

    // Basic form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill out all fields.', {
        description: 'All fields are required to send a message.',
        duration: 5000,
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission (replace with actual API call if needed)
    try {
      // Simulate a network request
      await new Promise(resolve => setTimeout(resolve, 1200));

      // If submission is successful
      toast.success('Message sent successfully!', {
        description: 'I will get back to you as soon as possible.',
        duration: 7000,
        // You can customize the toast further with icons, etc.
        // icon: <Send className="text-green-500" />,
      });
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      toast.error('Failed to send message.', {
        description: 'There was an error on our end. Please try again later.',
        duration: 5000,
      });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false); // End submission state
    }
  };

  return (
    <div className="container mx-auto px-6 py-20"> {/* Increased padding */}
      <motion.h1
        variants={itemVariants} // Use itemVariants for consistency
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-5xl font-extrabold text-center mb-16 text-gray-800 tracking-tight dark:text-white" // Larger, bolder title
      >
        Let's Connect
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start dark:text-white"> {/* Increased gap, align items start */}
        
        {/* Contact Info Section */}
        <motion.div 
          variants={containerVariants} // Use container for staggering children
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl font-bold text-gray-700 mb-8 dark:text-white" // Bolder subtitle
          >
            Get in Touch
          </motion.h2>
          <div className="space-y-8 text-gray-700 dark:text-white"> {/* Slightly darker text, more spacing */}
            
            {/* Email */}
            <motion.a 
              href="mailto:meresagidey0938@gmail.com" 
              className="flex items-center group cursor-pointer" 
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center mr-5 shadow-md transition-all duration-300 group-hover:bg-indigo-600 group-hover:shadow-lg">
                <Mail className="text-indigo-600 size-7 transition-colors duration-300 group-hover:text-white" />
              </div>
              <span className="text-xl font-medium transition-colors duration-300 group-hover:text-indigo-600">meresagidey0938@gmail.com</span>
            </motion.a>
            
            {/* Phone */}
            <motion.a 
              href="tel:+251938140959" 
              className="flex items-center group cursor-pointer" 
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center mr-5 shadow-md transition-all duration-300 group-hover:bg-indigo-600 group-hover:shadow-lg">
                <Phone className="text-indigo-600 size-7 transition-colors duration-300 group-hover:text-white" />
              </div>
              <span className="text-xl font-medium transition-colors duration-300 group-hover:text-indigo-600">+251 938 140 959</span>
            </motion.a>
            
            {/* Location */}
            <motion.div 
              className="flex items-center" 
              variants={itemVariants}
            >
              <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center mr-5 shadow-md">
                <MapPin className="text-indigo-600 size-7" />
              </div>
              <span className="text-xl font-medium">Addis Ababa, Ethiopia</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl font-bold text-gray-700 mb-8 dark:text-white"
          >
            Send Me a Message
          </motion.h2>
          <form onSubmit={handleSubmit} className="space-y-2 bg-white dark:bg-gray-800 dark:text-white p-2 rounded-xl shadow-xl border-t-4 border-indigo-500 transition-shadow duration-300 hover:shadow-2xl focus-within:shadow-2xl"> {/* More pronounced shadow, border-top */}
            
            {/* Name Input */}
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-lg dark:bg-gray-800 font-semibold text-gray-700 mb-2 dark:text-white">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
                           transition-all duration-300 shadow-sm focus:shadow-md dark:bg-gray-800 dark:text-white" 
                placeholder="Your Name"
                required // Added for basic HTML5 validation
              />
            </motion.div>

            {/* Email Input */}
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2 dark:text-white">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
                           transition-all duration-300 shadow-sm focus:shadow-md dark:bg-gray-800 dark:text-white" 
                placeholder="your.email@example.com"
                required
              />
            </motion.div>

            {/* Message Textarea */}
            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2 dark:text-white">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} // Slightly taller textarea
                value={formData.message} 
                onChange={handleChange} 
                className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
                           transition-all duration-300 shadow-sm focus:shadow-md resize-none dark:bg-gray-800 dark:text-white"
                placeholder="write your message here..."
                required
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <button 
                type="submit" 
                disabled={isSubmitting} // Disable while submitting
                className={`w-full inline-flex items-center justify-center px-8 py-4 
                           text-white font-bold rounded-lg shadow-lg transition-all duration-300
                           ${isSubmitting 
                             ? 'bg-gray-400 cursor-not-allowed' 
                             : 'bg-indigo-600 hover:bg-indigo-700 hover:-translate-y-1'
                           }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 8l4-3.709z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="ml-3 size-5" />
                  </>
                )}
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}









// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { toast } from 'sonner';
// import { Send, Phone, Mail, MapPin } from 'lucide-react';

// export default function Contact() {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Basic form validation
//     if (!formData.name || !formData.email || !formData.message) {
//       return toast.error('Please fill out all fields.');
//     }
//     // Simulate form submission
//     toast.success('Message sent successfully! I will get back to you soon.');
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <div className="container mx-auto px-6 py-12">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-4xl font-bold text-center mb-12 text-gray-800"
//       >
//         Get In Touch
//       </motion.h1>
//       <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
        
//         {/* Contact Info Section */}
//         <motion.div 
//           initial={{ opacity: 0, x: -50 }} 
//           animate={{ opacity: 1, x: 0 }} 
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <h2 className="text-2xl font-semibold text-gray-700 mb-6">Contact Information</h2>
//           <div className="space-y-6 text-gray-600">
//             <a href="mailto:meresagidey0938@gmail.com" className="flex items-center hover:text-indigo-600 transition-colors">
//               <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
//                 <Mail className="text-indigo-600" size={24} />
//               </div>
//               <span className="text-lg">meresagidey0938@gmail.com</span>
//             </a>
            
//             <a href="tel:+251938140959" className="flex items-center hover:text-indigo-600 transition-colors">
//               <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
//                 <Phone className="text-indigo-600" size={24} />
//               </div>
//               <span className="text-lg">+251 938 140 959</span>
//             </a>
            
//             <div className="flex items-center">
//               <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
//                 <MapPin className="text-indigo-600" size={24} />
//               </div>
//               <span className="text-lg">Addis Ababa, Ethiopia</span>
//             </div>
//           </div>
//         </motion.div>

//         {/* Form Section */}
//         <motion.div 
//           initial={{ opacity: 0, x: 50 }} 
//           animate={{ opacity: 1, x: 0 }} 
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           <h2 className="text-2xl font-semibold text-gray-700 mb-6">Send Me a Message</h2>
//           <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//               <input 
//                 type="text" 
//                 id="name" 
//                 name="name" 
//                 value={formData.name} 
//                 onChange={handleChange} 
//                 className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow" 
//                 placeholder="Your Name"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//               <input 
//                 type="email" 
//                 id="email" 
//                 name="email" 
//                 value={formData.email} 
//                 onChange={handleChange} 
//                 className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow" 
//                 placeholder="your.email@example.com"
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
//               <textarea 
//                 id="message" 
//                 name="message" 
//                 rows={4} 
//                 value={formData.message} 
//                 onChange={handleChange} 
//                 className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow resize-none"
//                 placeholder="How can we work together?"
//               ></textarea>
//             </div>
//             <button 
//               type="submit" 
//               className="w-full inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:-translate-y-1"
//             >
//               Send Message <Send className="ml-2" size={18} />
//             </button>
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   );
// }