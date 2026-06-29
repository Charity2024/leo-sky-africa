"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";
import clsx from "clsx";

type FormState = "idle" | "loading" | "success" | "error";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

function validate(name: string, email: string, message: string): FormErrors {
  const errors: FormErrors = {};
  if (!name.trim()) errors.name = "Name is required";
  if (!email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email";
  if (!message.trim()) errors.message = "Message is required";
  else if (message.trim().length < 10) errors.message = "Message must be at least 10 characters";
  return errors;
}

const inputClass =
  "w-full rounded-xl border border-brand-secondary/15 bg-brand-primary/5 px-4 py-3 text-sm text-brand-cream placeholder:text-brand-muted backdrop-blur-sm transition-colors focus:border-brand-secondary/40 focus:outline-none focus:ring-2 focus:ring-brand-secondary/30";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const prefersReducedMotion = useReducedMotion();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validation = validate(name, email, message);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setState("loading");
    await new Promise((r) => setTimeout(r, 1400));
    setState("success");
  };

  if (state === "success") {
    return (
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center rounded-2xl border border-brand-secondary/15 bg-brand-primary/5 px-8 py-16 text-center backdrop-blur-md"
        role="status"
      >
        <CheckCircle className="mb-4 h-12 w-12 text-brand-accent" aria-hidden />
        <h3 className="text-xl font-semibold text-brand-cream">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm text-brand-body/80">
          Thank you for reaching out. Our team will respond within two business days.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-xs font-medium tracking-wide text-brand-muted uppercase">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={clsx(inputClass, errors.name && "border-red-400/50")}
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p
                id="name-error"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-1.5 text-xs text-red-400"
                role="alert"
              >
                {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-xs font-medium tracking-wide text-brand-muted uppercase">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={clsx(inputClass, errors.email && "border-red-400/50")}
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                id="email-error"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-1.5 text-xs text-red-400"
                role="alert"
              >
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="mb-2 block text-xs font-medium tracking-wide text-brand-muted uppercase">
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-xs font-medium tracking-wide text-brand-muted uppercase">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={clsx(inputClass, "resize-none", errors.message && "border-red-400/50")}
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              id="message-error"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-1.5 text-xs text-red-400"
              role="alert"
            >
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-primary px-8 py-3.5 text-sm font-semibold tracking-wide text-brand-cream shadow-[0_4px_30px_rgba(105,21,135,0.4)] transition-all duration-300 hover:bg-brand-purple-tone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary disabled:opacity-70 sm:w-auto"
      >
        {state === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}
