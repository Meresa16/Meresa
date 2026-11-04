import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone, Send } from 'lucide-react';

const contactDetails = [
  {
    label: 'Email',
    value: 'meresagidey0938@gmail.com',
    href: 'mailto:meresagidey0938@gmail.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '+251 938 140 959',
    href: 'tel:+251938140959',
    icon: Phone,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const prefersReducedMotion = useReducedMotion();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${formData.name.trim()}`);
    const body = encodeURIComponent(
      `${formData.message.trim()}\n\nReply to: ${formData.email.trim()}`
    );
    window.location.href = `mailto:meresagidey0938@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-6 py-24 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950">
      <div aria-hidden="true" className="pointer-events-none absolute -left-36 top-16 -z-10 h-96 w-96 rounded-full bg-indigo-400/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-36 -right-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-300">
            Get in touch
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Let&apos;s start a conversation
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Have a role, project, or question in mind? Send me a note and I&apos;ll be glad to connect.
          </p>
        </motion.header>

        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.aside
            initial={prefersReducedMotion ? false : { opacity: 0, x: -24, rotateY: 4 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            style={{ transformPerspective: 1100 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-800 to-slate-900 p-8 text-white shadow-2xl shadow-indigo-950/20 sm:p-10"
          >
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/10"
              animate={prefersReducedMotion ? undefined : { rotate: 360, scale: [1, 1.08, 1] }}
              transition={{ rotate: { duration: 36, repeat: Infinity, ease: 'linear' }, scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' } }}
            />
            <div className="relative">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-lg backdrop-blur">
                <Mail size={25} />
              </span>
              <h2 className="mt-8 text-2xl font-bold">Contact details</h2>
              <p className="mt-3 max-w-sm leading-relaxed text-indigo-100">
                The quickest way to reach me is by email. You can also call or send a message using the form.
              </p>

              <div className="mt-8 space-y-3">
                {contactDetails.map(({ label, value, href, icon: Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={prefersReducedMotion ? undefined : { x: 4 }}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-colors hover:bg-white/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-indigo-100">
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-medium uppercase tracking-wider text-indigo-200">{label}</span>
                      <span className="mt-1 block break-all font-medium">{value}</span>
                    </span>
                    <ArrowUpRight size={17} className="shrink-0 text-indigo-200 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>
                ))}

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-indigo-100">
                    <MapPin size={20} />
                  </span>
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wider text-indigo-200">Location</span>
                    <span className="mt-1 block font-medium">Addis Ababa, Ethiopia</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.aside>

          <motion.section
            initial={prefersReducedMotion ? false : { opacity: 0, x: 24, rotateY: -3 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: prefersReducedMotion ? 0 : 0.1, ease: 'easeOut' }}
            whileHover={prefersReducedMotion ? undefined : { y: -3, rotateX: 0.5 }}
            style={{ transformPerspective: 1100 }}
            className="rounded-3xl border border-gray-200/80 bg-white/85 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-gray-900/70 dark:shadow-black/10 sm:p-9"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Send a message</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Fill out the form to open a pre-addressed email in your default mail app. You&apos;ll review and send it there.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  placeholder="How can I help?"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition-colors hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:w-auto"
              >
                Open email draft <Send size={17} />
              </motion.button>
            </form>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
