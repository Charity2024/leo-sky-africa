import type { ContactSectionContent, InquiryFormContent } from "./types";

export const contactSectionContent: ContactSectionContent = {
  eyebrow: "Contact",
  title: "Let's Build Africa's Future in Space",
  description:
    "Whether you are exploring a partnership, booking an experience, or launching a project — our team is ready to help.",
  contactLabels: {
    email: "Email",
    phone: "Phone",
    location: "Location",
  },
  cards: [
    {
      id: "general",
      title: "General Inquiry",
      description: "Questions about our programs, events, or organisation.",
      submitLabel: "Submit",
    },
    {
      id: "meeting",
      title: "Book a Meeting",
      description: "Schedule a conversation with our leadership team.",
      submitLabel: "Book Meeting",
    },
    {
      id: "proposal",
      title: "Request a Proposal",
      description: "Tell us about your project and receive a tailored proposal.",
      submitLabel: "Request Proposal",
    },
    {
      id: "partnership",
      title: "Partnership Inquiry",
      description: "Explore institutional, corporate, or research partnerships.",
      submitLabel: "Submit",
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
    date: "Preferred date is required",
    time: "Preferred time is required",
    purpose: "Purpose is required",
    organization: "Organization is required",
    projectType: "Project type is required",
    budget: "Budget is required",
    description: "Description is required",
    contactPerson: "Contact person is required",
    partnershipType: "Partnership type is required",
  },
  fields: {
    general: [
      { id: "name", name: "name", label: "Name" },
      { id: "email", name: "email", label: "Email", type: "email" },
      { id: "message", name: "message", label: "Message", as: "textarea" },
    ],
    meeting: [
      { id: "name", name: "name", label: "Name" },
      { id: "email", name: "email", label: "Email", type: "email" },
      { id: "date", name: "date", label: "Preferred date", type: "date" },
      { id: "time", name: "time", label: "Preferred time", type: "time" },
      { id: "purpose", name: "purpose", label: "Purpose" },
    ],
    proposal: [
      { id: "organization", name: "organization", label: "Organization" },
      { id: "email", name: "email", label: "Email", type: "email" },
      {
        id: "projectType",
        name: "projectType",
        label: "Project type",
        as: "select",
        options: [
          "Education Program",
          "Astrotourism Experience",
          "Research & Innovation",
          "Corporate Event",
          "Other",
        ],
      },
      {
        id: "budget",
        name: "budget",
        label: "Budget",
        as: "select",
        options: ["Under $10,000", "$10,000 – $50,000", "$50,000 – $150,000", "$150,000+"],
      },
      { id: "description", name: "description", label: "Description", as: "textarea" },
    ],
    partnership: [
      { id: "organization", name: "organization", label: "Organization" },
      { id: "contactPerson", name: "contactPerson", label: "Contact Person" },
      { id: "email", name: "email", label: "Email", type: "email" },
      {
        id: "partnershipType",
        name: "partnershipType",
        label: "Partnership Type",
        as: "select",
        options: ["Institutional", "Corporate", "Research", "Government", "NGO"],
      },
      { id: "message", name: "message", label: "Message", as: "textarea" },
    ],
  },
};

export const contactPageMetadata = {
  title: "Contact",
  description:
    "Get in touch with Leo Sky Africa for partnerships, program inquiries, astrotourism bookings, and Leo Sky Labs opportunities.",
} as const;
