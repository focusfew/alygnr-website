'use client';

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const reasonOptions = [
  'I want to see a demo',
  'I have a question before signing up',
  "I'm an agency and want to learn more",
  "Something isn't working",
  'Something else',
];

// Any of these plan query params pre-selects the demo option.
const planToReason: Record<string, string> = {
  solo: 'I want to see a demo',
  teams: 'I want to see a demo',
  studio: 'I want to see a demo',
  practice: 'I want to see a demo',
  network: 'I want to see a demo',
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputBase =
  'w-full rounded-[8px] border border-white/[0.12] bg-[#13171D] px-4 py-3 text-[14px] text-white placeholder:text-[#555] focus:border-[#EC6427] focus:outline-none';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const searchParams = useSearchParams();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState<Status>('idle');

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Pre-select the reason from the `plan` query param on mount.
  useEffect(() => {
    const plan = searchParams.get('plan');
    if (plan && planToReason[plan]) {
      setReason(planToReason[plan]);
    }
  }, [searchParams]);

  // Close the custom dropdown on outside click.
  useEffect(() => {
    if (!dropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [dropdownOpen]);

  function computeErrors() {
    const errs: { name?: string; email?: string; reason?: string } = {};
    if (!name.trim()) errs.name = 'Please enter your name.';
    if (!email.trim()) errs.email = 'Please enter your work email.';
    else if (!emailRegex.test(email.trim())) errs.email = 'Please enter a valid email address.';
    if (!reason) errs.reason = 'Please select a reason.';
    return errs;
  }

  // Errors are only surfaced after the first submit attempt.
  const errors = attempted ? computeErrors() : {};

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setAttempted(true);
    if (Object.keys(computeErrors()).length > 0) return;

    const subject = `Contact form: ${reason}`;
    const body = `Name: ${name.trim()}\nEmail: ${email.trim()}\nReason: ${reason}\nMessage: ${message.trim()}`;
    const mailtoUrl = `mailto:support@alygnr.ai?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
    setStatus('success');
  }

  return (
    <section className="px-6">
      <div className="mx-auto flex min-h-[calc(100vh-56px)] max-w-[1080px] items-center py-20 md:min-h-[calc(100vh-64px)] md:py-[120px]">
        <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-[35fr_65fr] md:gap-16">
          {/* LEFT COLUMN */}
          <div className="self-center">
            <h1 className="text-[40px] font-bold leading-[1.1] tracking-[-0.03em] text-white md:text-[64px]">
              We&apos;re here.
            </h1>
            <p className="mt-6 max-w-[280px] text-[15px] leading-[1.65] text-[#B4B4B4]">
              Whether you have a question before signing up, want to see ALYGNR in action, or need
              help with something: we&apos;re here.
            </p>
            <div className="my-8 border-t border-white/[0.12]" />
            <p className="text-[14px] text-[#B4B4B4]">Or write to us directly at</p>
            <a
              href="mailto:support@alygnr.ai"
              className="mt-1 block text-[14px] font-medium text-white transition-colors duration-150 hover:text-[#EC6427]"
            >
              support@alygnr.ai
            </a>
          </div>

          {/* RIGHT COLUMN — form card */}
          <div className="rounded-[20px] border border-white/[0.08] bg-[#1C2029] p-8 md:p-12">
            {status === 'success' ? (
              <p className="py-12 text-center text-[18px] font-medium text-white">
                Message sent. We&apos;ll be in touch shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div className="mb-5">
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-[13px] font-medium text-[#B4B4B4]"
                  >
                    Name*
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="John Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputBase}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-[12px] text-[#EC6427]">{errors.name}</p>
                  )}
                </div>

                {/* Work email */}
                <div className="mb-5">
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-[13px] font-medium text-[#B4B4B4]"
                  >
                    Work email*
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="johnsmith@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputBase}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-[12px] text-[#EC6427]">{errors.email}</p>
                  )}
                </div>

                {/* Reason — custom dropdown */}
                <div className="mb-5">
                  <label className="mb-2 block text-[13px] font-medium text-[#B4B4B4]">
                    How can we help you?*
                  </label>
                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setDropdownOpen((o) => !o)}
                      aria-haspopup="listbox"
                      aria-expanded={dropdownOpen}
                      className={`${inputBase} flex items-center justify-between text-left`}
                    >
                      <span className={reason ? 'text-white' : 'text-[#555]'}>
                        {reason || 'Select a reason'}
                      </span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        className={`shrink-0 text-[#B4B4B4] transition-transform duration-150 ${
                          dropdownOpen ? 'rotate-180' : ''
                        }`}
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {dropdownOpen && (
                      <ul
                        role="listbox"
                        className="absolute left-0 right-0 top-full z-50 mt-1 overflow-hidden rounded-[8px] border border-white/[0.12] bg-[#1C2029] py-1"
                      >
                        {reasonOptions.map((opt) => (
                          <li key={opt} role="option" aria-selected={reason === opt}>
                            <button
                              type="button"
                              onClick={() => {
                                setReason(opt);
                                setDropdownOpen(false);
                              }}
                              className={`w-full px-4 py-3 text-left text-[14px] transition-colors duration-150 hover:bg-white/[0.06] ${
                                reason === opt ? 'text-[#EC6427]' : 'text-white'
                              }`}
                            >
                              {opt}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {errors.reason && (
                    <p className="mt-1.5 text-[12px] text-[#EC6427]">{errors.reason}</p>
                  )}
                </div>

                {/* Message */}
                <div className="mb-5">
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-[13px] font-medium text-[#B4B4B4]"
                  >
                    Your message
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${inputBase} min-h-[140px] resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="rounded-[8px] border-[1.5px] border-white px-4 py-1.5 text-[14px] font-normal text-white transition-colors duration-150 hover:border-[#EC6427]"
                >
                  {status === 'submitting' ? 'Sending...' : 'Submit'}
                </button>

                {status === 'error' && (
                  <p className="mt-3 text-[13px] text-[#EC6427]">
                    Something went wrong. Please try again or email us directly at
                    support@alygnr.ai
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
