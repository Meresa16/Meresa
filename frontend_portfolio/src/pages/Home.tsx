import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight, BarChart3, Database, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const roles = ['Cyber Data Analyst', 'Data Scientist', 'Data Engineer'];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 20, mass: 0.6 });
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 20, mass: 0.6 });
  const contentRotateX = useTransform(smoothY, [-1, 1], [3, -3]);
  const contentRotateY = useTransform(smoothX, [-1, 1], [-4, 4]);
  const sceneRotateX = useTransform(smoothY, [-1, 1], [8, -8]);
  const sceneRotateY = useTransform(smoothX, [-1, 1], [-10, 10]);
  const backgroundX = useTransform(smoothX, [-1, 1], [10, -10]);
  const backgroundY = useTransform(smoothY, [-1, 1], [8, -8]);
  const spotlightX = useTransform(smoothX, [-1, 1], [0, 100]);
  const spotlightY = useTransform(smoothY, [-1, 1], [0, 100]);
  const spotlight = useMotionTemplate`radial-gradient(560px circle at ${spotlightX}% ${spotlightY}%, rgba(99, 102, 241, 0.2), transparent 72%)`;

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % roles.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (prefersReducedMotion || event.pointerType !== 'mouse') return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 2 - 1);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 2 - 1);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative isolate flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-slate-950"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-[-2%] -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/image.png')",
          x: backgroundX,
          y: backgroundY,
        }}
        animate={prefersReducedMotion ? undefined : { scale: [1.04, 1.1, 1.04] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 -z-10 bg-slate-950/75" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-indigo-950/55" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 -top-32 -z-10 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"
        animate={prefersReducedMotion ? undefined : {
          x: [0, -55, 10, 0],
          y: [0, 50, 80, 0],
          scale: [1, 1.18, 0.92, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 left-[18%] -z-10 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl"
        animate={prefersReducedMotion ? undefined : {
          x: [0, 70, -35, 0],
          y: [0, -55, -10, 0],
          scale: [1, 0.9, 1.12, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundImage: spotlight }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-6 py-24 md:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            rotateX: prefersReducedMotion ? 0 : contentRotateX,
            rotateY: prefersReducedMotion ? 0 : contentRotateY,
            transformPerspective: 1100,
          }}
          className="relative z-10 text-white"
        >
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-indigo-300"
          >
            Turning complex data into clearer decisions
          </motion.p>

          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hello, I&apos;m <span className="text-indigo-300">Meresa Gidey.</span>
          </motion.h1>

          <p
            aria-label="I am a Cyber Data Analyst, Data Scientist, and Data Engineer"
            className="mt-5 flex min-h-12 items-center text-xl font-semibold text-slate-100 sm:text-2xl"
          >
            <span aria-hidden="true" className="mr-2 text-indigo-300">I am a</span>
            <span aria-hidden="true" className="relative inline-grid min-w-[12rem] overflow-hidden sm:min-w-[15rem]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={roles[roleIndex]}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 12, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12, filter: 'blur(4px)' }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="col-start-1 row-start-1 whitespace-nowrap text-indigo-200"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            {!prefersReducedMotion && (
              <motion.span
                aria-hidden="true"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.85, repeat: Infinity }}
                className="ml-1 inline-block h-7 w-0.5 bg-indigo-300"
              />
            )}
          </p>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.65 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl"
          >
            I design data pipelines, analytics, and software that turn complex information
            into useful insights and practical decisions.
          </motion.p>
          <p className="mt-4 text-sm text-slate-300">Addis Ababa, Ethiopia</p>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-950/30 transition duration-200 hover:-translate-y-1 hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore projects <ArrowRight size={18} />
            </Link>
            <Link
              to="/experience"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition duration-200 hover:-translate-y-1 hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              View experience <ArrowDown size={18} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          aria-hidden="true"
          style={{
            rotateX: prefersReducedMotion ? 0 : sceneRotateX,
            rotateY: prefersReducedMotion ? 0 : sceneRotateY,
            transformPerspective: 900,
          }}
          className="relative mx-auto hidden aspect-square w-full max-w-[26rem] md:block"
        >
          <motion.div
            className="absolute inset-[18%] rounded-full bg-indigo-500/20 blur-3xl"
            animate={prefersReducedMotion ? undefined : { opacity: [0.35, 0.8, 0.45], scale: [0.85, 1.12, 0.9] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            animate={prefersReducedMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-[8%] rounded-full border border-indigo-300/25"
          >
            <span className="absolute left-[13%] top-[17%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_24px_6px_rgba(103,232,249,0.5)]" />
          </motion.div>
          <motion.div
            animate={prefersReducedMotion ? undefined : { rotate: -360 }}
            transition={{ duration: 54, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-[20%] rounded-full border border-dashed border-violet-300/30"
          >
            <span className="absolute bottom-[5%] right-[22%] h-2.5 w-2.5 rounded-full bg-violet-300 shadow-[0_0_22px_5px_rgba(196,181,253,0.45)]" />
          </motion.div>

          <motion.div
            animate={prefersReducedMotion ? undefined : { y: [0, -13, 0], rotate: [0, 1.5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-[25%] flex flex-col items-center justify-center rounded-[2rem] border border-white/15 bg-slate-900/65 p-8 text-center shadow-2xl shadow-indigo-950/50 backdrop-blur-xl"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-200 ring-1 ring-indigo-300/30">
              <BarChart3 size={34} strokeWidth={1.6} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-200">Data to insight</p>
            <div className="mt-6 flex items-end gap-2">
              {[30, 48, 37, 68, 52, 82, 64].map((height, index) => (
                <motion.span
                  key={index}
                  initial={prefersReducedMotion ? false : { height: 8, opacity: 0.4 }}
                  animate={prefersReducedMotion ? undefined : { height: [height * 0.55, height, height * 0.75], opacity: 1 }}
                  transition={{ duration: 2.4, delay: index * 0.1, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                  className="w-2.5 rounded-full bg-gradient-to-t from-indigo-600 to-cyan-300"
                />
              ))}
            </div>
            <motion.div
              aria-hidden="true"
              className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent"
              animate={prefersReducedMotion ? undefined : { y: [0, 185, 0], opacity: [0, 0.8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          <motion.div
            animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-0 top-[22%] flex items-center gap-3 rounded-xl border border-white/15 bg-slate-900/75 px-4 py-3 text-sm text-white shadow-xl backdrop-blur-lg"
          >
            <Database className="text-cyan-300" size={19} />
            <span>Data Engineering</span>
          </motion.div>
          <motion.div
            animate={prefersReducedMotion ? undefined : { y: [0, 9, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-[19%] right-0 flex items-center gap-3 rounded-xl border border-white/15 bg-slate-900/75 px-4 py-3 text-sm text-white shadow-xl backdrop-blur-lg"
          >
            <ShieldCheck className="text-violet-300" size={19} />
            <span>Fraud Detection</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
