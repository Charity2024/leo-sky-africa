import type { ContactSectionContent, InquiryFormContent } from "./types";

export const contactSectionContent: ContactSectionContent = {
  eyebrow: "Contact",
  title: "Let's Build Africa's Future in Space",
  description:
  "Whether you're a safari lodge looking to add world-class Astrotourism to your offering, a school that wants to bring space science to your students, or an organisation that believes in Africa's space future, We want to hear from you.",
  contactLabels: {
    email: "Email",
    phone: "Phone",
    location: "Location",
  },
  cards: [
    {
      id: "general",
      title: "Get in Touch",
      description: "Questions about our programs, events, or organisation? Send us a message and we'll respond within two business days.",
      submitLabel: "Send Message",
    },
  ],
};

export const inquiryFormContent: InquiryFormContent = {
  selectPlaceholder: "Select",
  loadingLabel: "Sending…",
  successTitle: "Thank you",
  successMessage: "Your inquiry has been received. We will respond within two business days.",
  validation: {
    name: "Name is required",
    email: "Email is required",
    emailInvalid: "Enter a valid email",
    message: "Message is required",
  },
  fields: {
    general: [
      { id: "name", name: "name", label: "Name" },
      { id: "email", name: "email", label: "Email", type: "email" },
      { id: "message", name: "message", label: "Message", as: "textarea" },
    ],
    meeting: [],
    proposal: [],
    partnership: [],
  } satisfies InquiryFormContent["fields"],
};

export const contactPageMetadata = {
  title: "Contact",
  description:
    "Get in touch with Leo Sky Africa for partnerships, program inquiries, astrotourism bookings, and Leo Sky Labs opportunities.",
} as const;
