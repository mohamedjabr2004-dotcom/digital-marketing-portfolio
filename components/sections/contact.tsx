"use client"

function MailIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M6.5 8.5H3V21h3.5V8.5Z" />
      <path d="M4.75 3C3.65 3 3 3.75 3 4.7c0 .95.65 1.7 1.7 1.7h.05c1.1 0 1.75-.75 1.75-1.7C6.5 3.75 5.85 3 4.75 3Z" />
      <path d="M13 8.5H9.5V21H13v-6.15c0-1.62.3-3.2 2.3-3.2 1.98 0 2 1.85 2 3.3V21H21v-6.75c0-3.3-.7-5.75-4.5-5.75-1.8 0-3 .98-3.5 1.9V8.5Z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.2-4.6A8.5 8.5 0 1 1 20.5 11.5Z" />
      <path d="M8.5 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.6.7c.6 1.1 1.5 2 2.6 2.6l.7-.6c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1.3.4-2.1.1-1.1-.4-2.3-1.1-3.5-2.3-1.1-1.1-1.9-2.3-2.3-3.5-.3-.8-.1-1.7.1-2.1Z" />
    </svg>
  )
}

function ArrowUpRightIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#070d1a] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s Connect
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-slate-700" />

            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

            <span className="h-px w-10 bg-slate-700" />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Have a project, opportunity, or collaboration in mind?
            Let&apos;s talk.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Left Side */}
          <div className="space-y-4">

            {/* Email */}
            <a
              href="mailto:mohmed.jabr.2004@gmail.com"
              className="group flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-900"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <MailIcon />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                    mohmed.jabr.2004@gmail.com
                  </p>
                </div>

              </div>

              <span className="text-slate-500 transition group-hover:text-cyan-400">
                <ArrowUpRightIcon />
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mohamed-jabr-5aa83337a/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-900"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <LinkedInIcon />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                    Connect on LinkedIn
                  </p>
                </div>

              </div>

              <span className="text-slate-500 transition group-hover:text-cyan-400">
                <ArrowUpRightIcon />
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/972595436274"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-900"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <WhatsAppIcon />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                    Send a message
                  </p>
                </div>

              </div>

              <span className="text-slate-500 transition group-hover:text-cyan-400">
                <ArrowUpRightIcon />
              </span>
            </a>

          </div>

          {/* Right Side - Form */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">

            <form
              action="mailto:mohmed.jabr.2004@gmail.com"
              method="post"
              encType="text/plain"
              className="space-y-5"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="Name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-[#0a1120] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 placeholder:text-slate-600"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="Email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-[#0a1120] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 placeholder:text-slate-600"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="Message"
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  className="w-full resize-none rounded-xl border border-slate-700 bg-[#0a1120] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 placeholder:text-slate-600"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-400"
              >
                <SendIcon />
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  )
}