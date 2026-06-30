import type { PillarPageContent } from "./types";
import { mediaPaths } from "./site";

export const educationContent: PillarPageContent = {
  slug: "space-education",
  path: "/space-education",
  layoutVariant: "education",
  kicker: "Learning",
  title: "Space Education",
  tagline: "Inspiring Africa's next generation of scientists and explorers.",
  heroDescription:
    "From classroom astronomy to space camps and teacher training — we equip schools, students, and educators across Africa with the tools to reach for the stars.",
  heroImage: `${mediaPaths.images}/pillar-education.png`,
  heroVideo: `${mediaPaths.videos}/hero.mp4`,
  heroWatermark: { position: "right", opacity: 0.06 },
  heroCta: {
    primaryLabel: "Explore programs",
    primaryHref: "#programs",
    secondaryLabel: "Partner with us",
    secondaryHref: "/#contact",
  },
  mission: {
    eyebrow: "Why Space Education",
    title: "Making space science accessible across the continent.",
    paragraphs: [
      "Leo Sky Africa's Space Education pillar delivers hands-on astronomy, rocketry, and satellite literacy programs designed for schools, universities, and community centres.",
      "We partner with educators and institutions to build lasting pathways from classroom curiosity to careers in the space economy.",
      "For a continent of over 1.4 billion people, space education is not a luxury — it is the foundation of Africa's scientific sovereignty and economic future.",
    ],
  },
  learningExperience: {
    eyebrow: "Learning Experience",
    title: "Hands-on discovery, from classroom to cosmos.",
    paragraphs: [
      "Every Leo Sky Africa program blends theory with practice — students build rockets, operate telescopes, analyse satellite data, and present their findings to peers and mentors.",
      "Our facilitators bring world-class expertise to local contexts, ensuring that learning feels relevant, rigorous, and inspiring regardless of where students begin.",
    ],
    image: {
      src: `${mediaPaths.gallery}/education-1.jpg`,
      alt: "Students engaged in a hands-on space science workshop",
    },
  },
  programs: {
    eyebrow: "Programs",
    title: "Pathways into space science.",
    itemLabel: "Program",
    items: [
      {
        title: "School Astronomy Programs",
        description:
          "Curriculum-aligned STEM and astronomy modules for primary and secondary schools, with portable telescope kits and trained facilitators.",
      },
      {
        title: "Youth Space Camps",
        description:
          "Multi-day residential camps combining stargazing, rocketry, robotics, and satellite data challenges for students aged 12–18.",
      },
      {
        title: "Teacher Development",
        description:
          "Professional workshops equipping educators to deliver engaging, standards-aligned space science and astronomy content.",
      },
      {
        title: "Space Careers Pathways",
        description:
          "Mentorship, industry talks, and internship connections linking students and graduates with African and international space organisations.",
      },
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Learning in action.",
    images: [
      { src: `${mediaPaths.images}/pillar-education.png`, alt: "Students in a space education workshop" },
      { src: `${mediaPaths.gallery}/education-1.jpg`, alt: "Telescope observation session" },
      { src: `${mediaPaths.gallery}/education-2.jpg`, alt: "STEM classroom activity" },
      { src: `${mediaPaths.gallery}/education-3.jpg`, alt: "Youth space camp participants" },
    ],
  },
  impact: {
    eyebrow: "Impact",
    title: "Education that reaches thousands.",
    stats: [
      { value: 1200, suffix: "+", label: "Students Reached" },
      { value: 45, suffix: "+", label: "Schools Partnered" },
      { value: 28, suffix: "", label: "Educator Workshops" },
      { value: 12, suffix: "", label: "Space Camps Delivered" },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "Voices from the classroom.",
    items: [
      {
        quote:
          "Leo Sky Africa transformed how our students see science. For the first time, space feels like a career they can reach.",
        author: "Dr. Amara Osei",
        role: "Head of Science, Nairobi Academy",
      },
      {
        quote:
          "The telescope workshops gave our rural school access to equipment we could never afford. The impact on student engagement has been extraordinary.",
        author: "James Mutua",
        role: "STEM Coordinator, Laikipia County",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common questions.",
    items: [
      {
        question: "Who can participate in Space Education programs?",
        answer:
          "Our programs serve students aged 8–24, educators, and community groups. School partnerships are available across Kenya and expanding to other African nations.",
      },
      {
        question: "Do you provide equipment for schools?",
        answer:
          "Yes. We supply portable telescope kits, educational materials, and trained facilitators as part of our school partnership packages.",
      },
      {
        question: "How can my institution partner with Leo Sky Africa?",
        answer:
          "Contact our education team to discuss curriculum integration, teacher training, or hosting a space camp at your institution.",
      },
    ],
  },
  relatedEventsSection: {
    eyebrow: "Events",
    title: "Related events",
  },
  relatedEvents: [
    {
      title: "African Space Education Summit 2026",
      description: "Three days of keynotes, panels, and hands-on workshops.",
      date: "October 12–14, 2026",
      location: "Nairobi, Kenya",
      image: `${mediaPaths.images}/event-summit.png`,
      href: "/events",
      cta: "Register",
    },
    {
      title: "Space Careers & Economy Webinar",
      description: "Career paths in the emerging African space industry.",
      date: "September 24, 2026",
      location: "Online",
      image: `${mediaPaths.images}/event-webinar.png`,
      href: "/events",
      cta: "RSVP",
    },
  ],
  cta: {
    title: "Bring space education to your community.",
    description: "Partner with Leo Sky Africa to deliver world-class space science programs.",
    primaryLabel: "Get in touch",
    primaryHref: "/#contact",
    secondaryLabel: "View events",
    secondaryHref: "/events",
  },
};

export const educationPageMetadata = {
  title: "Space Education",
  description: educationContent.heroDescription,
} as const;
