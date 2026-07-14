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
    "From classroom astronomy to space camps and teacher training;  we equip schools, students, and educators across Africa with the tools to reach for the stars.",
  heroImage: `${mediaPaths.gallery}/education/school.png`,
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
      "Every program blends theory with practice ; students build rockets, operate telescopes, analyse satellite data, and present findings to peers and mentors.",
      "Our facilitators bring world-class expertise to local contexts, ensuring learning feels relevant, rigorous, and inspiring.",
    ],
    image: {
      src: `${mediaPaths.gallery}/education/kids.png`,
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
        image: `${mediaPaths.gallery}/education/school.png`,
      },
      {
        title: "Space Camps",
        description:
          "Multi-day camps with stargazing, rocketry, robotics, and satellite data.",
        image: `${mediaPaths.gallery}/education/camp.png`,
      },
      {
        title: "Astronomy Workshops",
        description:
          "Professional workshops for educators to deliver space science content.",
        image: `${mediaPaths.gallery}/education/Teacher.png`,
      },
    
    ],
  },
  gallery: {
    eyebrow: "Learning in Action",
    title: "Inspiring curiosity, building STEM skills, empowering the next generation.",
    images: [
     
      { src: `${mediaPaths.gallery}/education/1.png`, alt: "" },
      { src: `${mediaPaths.gallery}/education/school.png`, alt: "" },
      { src: `${mediaPaths.gallery}/education/2.png`, alt: "" },
      { src: `${mediaPaths.gallery}/education/3.png`, alt: "" },
      { src: `${mediaPaths.gallery}/education/sabis4.jpeg`, alt: "" },
      { src: `${mediaPaths.gallery}/education/4.png`, alt: "" },


     
    ],
  },
 

  
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
