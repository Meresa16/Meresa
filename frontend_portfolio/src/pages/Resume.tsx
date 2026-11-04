import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Download, ExternalLink, FileText } from 'lucide-react';

export default function Resume() {
  const [isLoading, setIsLoading] = useState(true);
  const prefersReducedMotion = useReducedMotion();
  const fileId = '1u960-UpyVggtyLyVVvgq6k6uTDaQf8Ej';
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const viewUrl = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  return (
    <div className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-br from-slate-50 via-gray-100 to-indigo-50 px-4 py-20 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950 sm:px-6 sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -right-36 top-8 -z-10 h-96 w-96 rounded-full bg-indigo-400/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-7 flex flex-col gap-5 rounded-2xl border border-white/80 bg-white/80 p-5 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-gray-900/70 sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-300">
              <FileText size={23} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">
                Professional profile
              </p>
              <h1 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">Resume</h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                Cyber data analytics · Data science · Data warehousing · Software development
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <motion.a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-indigo-300 hover:text-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-indigo-400/50 dark:hover:text-indigo-300"
            >
              Open in Drive <ExternalLink size={16} />
            </motion.a>
            <motion.a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-colors hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Download resume <Download size={16} />
            </motion.a>
          </div>
        </motion.header>

        <motion.section
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20, rotateX: 1 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.65, delay: prefersReducedMotion ? 0 : 0.12, ease: 'easeOut' }}
          whileHover={prefersReducedMotion ? undefined : { y: -2 }}
          style={{ transformPerspective: 1200 }}
          className="relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-2 shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-gray-900 sm:p-3"
        >
          <div className="relative min-h-[70vh] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-950 sm:min-h-[78vh]">
            {isLoading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-gray-100 px-6 text-center text-gray-600 dark:bg-gray-950 dark:text-gray-300">
                <motion.span
                  animate={prefersReducedMotion ? undefined : { y: [0, -5, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-md dark:bg-gray-900 dark:text-indigo-300"
                >
                  <FileText size={26} />
                </motion.span>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Loading resume preview</p>
                  <p className="mt-1 text-sm">If it doesn&apos;t appear, open or download the file above.</p>
                </div>
              </div>
            )}
            <iframe
              src={embedUrl}
              onLoad={() => setIsLoading(false)}
              className="relative z-10 min-h-[70vh] w-full border-0 sm:min-h-[78vh]"
              title="Meresa Gidey resume preview"
              allow="autoplay"
            />
          </div>
        </motion.section>

        <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          The preview is provided by Google Drive. Use the buttons above if it is unavailable in your browser.
        </p>
      </div>
    </div>
  );
}
