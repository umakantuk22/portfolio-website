"use client";

import * as React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [submitted, setSubmitted] = React.useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Please enter a message.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject =
      formData.subject.trim() ||
      `Portfolio Inquiry from ${formData.name.trim()}`;
    const body = `Hi Umakant,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`;

    const mailtoLink = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 border-b border-[#172338]/80 bg-[#060a16]"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-1 text-xs font-mono font-semibold text-cyan-400">
            CONNECT &amp; HIRE
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-5xl font-black tracking-tight text-white"
          >
            Let&apos;s Build Something Great.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
            I am actively interviewing for software engineering roles, full-stack, and AI/backend developer opportunities. Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Direct Channels Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-[#172338] bg-[#090e1a] p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white">
                Direct Channels
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="block text-xs font-mono text-cyan-400 uppercase">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="mt-1 inline-block font-semibold text-white hover:text-cyan-400 transition-colors break-all"
                  >
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>

                <div>
                  <span className="block text-xs font-mono text-cyan-400 uppercase">
                    Location
                  </span>
                  <p className="mt-1 font-medium text-slate-200">
                    {PORTFOLIO_DATA.personal.location}
                  </p>
                </div>

                <div>
                  <span className="block text-xs font-mono text-cyan-400 uppercase">
                    Phone
                  </span>
                  <p className="mt-1 font-mono font-medium text-slate-200">
                    {PORTFOLIO_DATA.personal.phone}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#172338] space-y-3">
                <span className="block text-xs font-mono text-cyan-400 uppercase">
                  Verified Online Profiles
                </span>
                <div className="flex flex-col gap-2">
                  <a
                    href={PORTFOLIO_DATA.personal.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors gap-1.5"
                  >
                    LinkedIn Profile ↗
                  </a>
                  <a
                    href={PORTFOLIO_DATA.personal.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors gap-1.5"
                  >
                    GitHub Profile ↗
                  </a>
                  <a
                    href={PORTFOLIO_DATA.personal.links.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors gap-1.5"
                  >
                    LeetCode Profile ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mailto Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#172338] bg-[#090e1a] p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Operates with zero backend database. Submitting directly opens your native email client with pre-filled message data.
              </p>

              {submitted && (
                <div className="mb-6 rounded-xl border border-cyan-500/30 bg-cyan-950/40 p-4 text-xs text-cyan-300">
                  Email client triggered. If it did not launch automatically, please email{" "}
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="underline font-semibold"
                  >
                    {PORTFOLIO_DATA.personal.email}
                  </a>{" "}
                  directly.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#1e293b] bg-[#060a14] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="Jane Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Your Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#1e293b] bg-[#060a14] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="recruiter@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#1e293b] bg-[#060a14] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="Software Engineering Opportunity"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#1e293b] bg-[#060a14] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 resize-y transition-colors"
                    placeholder="Hello Umakant, I saw your portfolio and would love to connect..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400">{errors.message}</p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto min-h-[46px] px-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-sm font-bold text-white transition-all shadow-[0_0_25px_rgba(0,210,255,0.35)]"
                  >
                    Send Message ↗
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
