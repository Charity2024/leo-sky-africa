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
    eyebrow: "Why It Matters",
    title: "Developing Africa's next generation of scientists, engineers, and innovators.",
    paragraphs: [
      "Africa's youth represent the continent's greatest resource. Space education transforms curiosity into capability, equipping students with STEM skills that transcend the classroom.",
      "We partner with schools and institutions to build lasting pathways from classroom discovery to careers in the global space economy.",
      "Space literacy is the foundation of Africa's scientific sovereignty and economic future.",
    ],
  },
  learningExperience: {
    eyebrow: "Our Approach",
    title: "Hands-on discovery that inspires and empowers.",
    paragraphs: [
      "Every program blends theory with practice — students build rockets, operate telescopes, analyse satellite data, and present findings to peers and mentors.",
      "Our facilitators bring world-class expertise to local contexts, ensuring learning feels relevant, rigorous, and inspiring.",
    ],
    image: {
      src: `${mediaPaths.gallery}/education/workshop-1.jpg`,
      alt: "Students engaged in a hands-on space science workshop",
    },
  },
  programs: {
    eyebrow: "What We Do",
    title: "Programmes that reach students and educators.",
    itemLabel: "Programme",
    items: [
      {
        title: "Space Academy",
        description:
          "Curriculum-aligned STEM and astronomy modules with portable telescope kits.",
        image: `${mediaPaths.gallery}/education/workshop-1.jpg`,
      },
      {
        title: "Space Camps",
        description:
          "Multi-day camps with stargazing, rocketry, robotics, and satellite data.",
        image: `${mediaPaths.gallery}/education/camp-1.jpg`,
      },
      {
        title: "Astronomy Workshops",
        description:
          "Professional workshops for educators to deliver space science content.",
        image: `${mediaPaths.gallery}/education/workshop-2.jpg`,
      },
      {
        title: "Space Careers Pathways",
        description:
          "Mentorship and internship connections with space organisations.",
        image: `${mediaPaths.images}/pillar-education.png`,
      },
    ],
  },
  gallery: {
    eyebrow: "Learning in Action",
    title: "Inspiring curiosity, building STEM skills, empowering the next generation.",
    images: [
      { src: `${mediaPaths.images}/pillar-education.png`, alt: "Students in a space education workshop" },
      { src: `${mediaPaths.gallery}/education/workshop-1.jpg`, alt: "Telescope observation session" },
      { src: `${mediaPaths.gallery}/education/workshop-2.jpg`, alt: "STEM classroom activity" },
      { src: `${mediaPaths.gallery}/education/camp-1.jpg`, alt: "Youth space camp participants" },
      { src: `${mediaPaths.gallery}/education/workshop-1.jpg`, alt: "Hands-on learning" },
      { src: `${mediaPaths.gallery}/education/camp-1.jpg`, alt: "Students building rockets" },
    ],
  },
  impact: {
    eyebrow: "Impact",
    title: "Building Africa's STEM future.",
    stats: [
      { value: 1200, suffix: "+", label: "Students Reached" },
      { value: 45, suffix: "+", label: "Schools Partnered" },
      { value: 85, suffix: "+", label: "Educators Trained" },
      { value: 12, suffix: "", label: "Space Camps Delivered" },
    ],
  },
  testimonials: {
    eyebrow: "Voices",
    title: "From our community.",
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
    description: "Partner with Leo Sky Africa to deliver world-class space science programs that inspire the next generation.",
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
