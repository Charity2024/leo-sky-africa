"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import Button from "@/components/ui/Button";
import { inquiryFormContent } from "@/content/contact";
import type { ContactCardContent, ContactCardType } from "@/content/types";
import { easePremium } from "@/lib/motion";

const inputClass =
  "w-full rounded-xl border border-brand-secondary/15 bg-brand-primary/5 px-4 py-2.5 text-sm text-brand-cream placeholder:text-brand-muted transition-colors focus:border-brand-secondary/40 focus:outline-none focus:ring-2 focus:ring-brand-secondary/30";

const labelClass =
  "mb-1.5 block text-[10px] font-medium tracking-[0.18em] text-brand-muted uppercase";

type InquiryCardProps = ContactCardContent & {
  index: number;
};

type FieldConfig = (typeof inquiryFormContent.fields)[ContactCardType][number];

function Field({
  cardId,
  field,
  value,
  onChange,
  error,
}: {
  cardId: ContactCardType;
  field: FieldConfig;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  const id = `${cardId}-${field.id}`;

  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {field.label}
      </label>
      {field.as === "textarea" ? (
        <textarea
          id={id}
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={clsx(inputClass, "resize-none", error && "border-red-400/50")}
          aria-invalid={error ? "true" : undefined}
        />
      ) : field.as === "select" ? (
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={clsx(inputClass, error && "border-red-400/50")}
          aria-invalid={error ? "true" : undefined}
        >
          <option value="">{inquiryFormContent.selectPlaceholder}</option>
          {field.options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={field.type ?? "text"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={clsx(inputClass, error && "border-red-400/50")}
          aria-invalid={error ? "true" : undefined}
        />
      )}
      {error && (
        <p className="mt-1 text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function useInquiryForm(cardId: ContactCardType) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [fields, setFields] = useState<Record<string, string>>({});
  const validation = inquiryFormContent.validation;

  const setField = (key: string, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const validate = (): boolean => {
    const next: Record<string, string> = {};
    const email = fields.email?.trim() ?? "";

    const requireField = (key: keyof typeof validation, fieldKey: string) => {
      if (!fields[fieldKey]?.trim()) next[fieldKey] = validation[key];
    };

    const requireEmail = () => {
      if (!email) next.email = validation.email;
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = validation.emailInvalid;
    };

    if (cardId === "general") {
      requireField("name", "name");
      requireEmail();
      requireField("message", "message");
    }

    if (cardId === "meeting") {
      requireField("name", "name");
      requireEmail();
      requireField("date", "date");
      requireField("time", "time");
      requireField("purpose", "purpose");
    }



    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return { fields, setField, errors, handleSubmit, submitted, loading };
}

function FormFields({
  cardId,
  fields,
  setField,
  errors,
}: {
  cardId: ContactCardType;
  fields: Record<string, string>;
  setField: (key: string, value: string) => void;
  errors: Record<string, string>;
}) {
  const fieldConfigs = inquiryFormContent.fields[cardId];

  if (cardId === "meeting") {
    const beforeGrid = fieldConfigs.filter((f) => f.name !== "date" && f.name !== "time");
    const gridFields = fieldConfigs.filter((f) => f.name === "date" || f.name === "time");

    return (
      <>
        {beforeGrid.map((field) => (
          <Field
            key={field.id}
            cardId={cardId}
            field={field}
            value={fields[field.name] ?? ""}
            onChange={(v) => setField(field.name, v)}
            error={errors[field.name]}
          />
        ))}
        <div className="grid gap-4 sm:grid-cols-2">
          {gridFields.map((field) => (
            <Field
              key={field.id}
              cardId={cardId}
              field={field}
              value={fields[field.name] ?? ""}
              onChange={(v) => setField(field.name, v)}
              error={errors[field.name]}
            />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      {fieldConfigs.map((field) => (
        <Field
          key={field.id}
          cardId={cardId}
          field={field}
          value={fields[field.name] ?? ""}
          onChange={(v) => setField(field.name, v)}
          error={errors[field.name]}
        />
      ))}
    </>
  );
}

export function InquiryCard({ id, title, description, submitLabel, index }: InquiryCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const { fields, setField, errors, handleSubmit, submitted, loading } = useInquiryForm(id);
  const formContent = inquiryFormContent;

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.85, delay: index * 0.06, ease: easePremium }}
      className="group flex h-full flex-col rounded-2xl border border-brand-secondary/10 bg-brand-primary/5 p-6 backdrop-blur-md transition-all duration-500 hover:border-brand-secondary/25 hover:shadow-[0_12px_40px_rgba(105,21,135,0.18)] lg:p-8"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-brand-cream">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-body/80">{description}</p>
      </div>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-1 flex-col justify-center rounded-xl border border-brand-secondary/10 bg-brand-dark/30 px-4 py-8 text-center"
            role="status"
          >
            <p className="text-sm font-medium text-brand-cream">{formContent.successTitle}</p>
            <p className="mt-2 text-xs text-brand-body/75">{formContent.successMessage}</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-1 flex-col gap-4"
            aria-label={title}
          >
            <FormFields cardId={id} fields={fields} setField={setField} errors={errors} />

            <div className="mt-auto pt-2">
              <Button type="submit" disabled={loading} className="w-full px-6 py-3 text-sm">
                {loading ? formContent.loadingLabel : submitLabel}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
