import type { EventItem } from "@/data/site-content";

export type Program = {
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PillarPageContent = {
  slug: string;
  path: string;
  kicker: string;
  title: string;
  tagline: string;
  heroDescription: string;
  heroImage: string;
  heroVideo?: string;
  mission: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
  };
  programs: {
    eyebrow: string;
    title: string;
    items: readonly Program[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    images: readonly { src: string; alt: string }[];
  };
  impact: {
    eyebrow: string;
    title: string;
    stats: readonly { value: number; suffix: string; label: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: readonly Testimonial[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: readonly FaqItem[];
  };
  relatedEvents: readonly EventItem[];
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
};

export const pillarPages: Record<string, PillarPageContent> = {
  "space-education": {
    slug: "space-education",
    path: "/space-education",
    kicker: "Learning",
    title: "Space Education",
    tagline: "Inspiring Africa's next generation of scientists and explorers.",
    heroDescription:
      "Immersive STEM programs, telescope workshops, and curriculum partnerships that put young Africans at the centre of the global space conversation.",
    heroImage: "/images/pillar-education.png",
    heroVideo: "/videos/hero.mp4",
    mission: {
      eyebrow: "Our Mission",
      title: "Making space science accessible across the continent.",
      paragraphs: [
        "Leo Sky Africa's Space Education pillar delivers hands-on astronomy, rocketry, and satellite literacy programs designed for schools, universities, and community centres.",
        "We partner with educators and institutions to build lasting pathways from classroom curiosity to careers in the space economy.",
      ],
    },
    programs: {
      eyebrow: "Programs",
      title: "Pathways into space science.",
      items: [
        {
          title: "School Astronomy Labs",
          description:
            "Portable telescope kits, curriculum guides, and trained facilitators for primary and secondary schools across East Africa.",
        },
        {
          title: "Space Careers Academy",
          description:
            "Mentorship, industry talks, and internship pathways connecting students with African and international space organisations.",
        },
        {
          title: "Teacher Training",
          description:
            "Professional development workshops equipping educators to deliver engaging, standards-aligned space science content.",
        },
        {
          title: "Youth Space Camps",
          description:
            "Multi-day residential camps combining stargazing, robotics, and satellite data challenges for ages 12–18.",
        },
      ],
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Learning in action.",
      images: [
        { src: "/images/pillar-education.png", alt: "Students in a space education workshop" },
        { src: "/gallery/education-1.jpg", alt: "Telescope observation session" },
        { src: "/gallery/education-2.jpg", alt: "STEM classroom activity" },
        { src: "/gallery/education-3.jpg", alt: "Youth space camp participants" },
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
    relatedEvents: [
      {
        title: "African Space Education Summit 2026",
        description: "Three days of keynotes, panels, and hands-on workshops.",
        date: "October 12–14, 2026",
        location: "Nairobi, Kenya",
        image: "/images/event-summit.png",
        href: "/events",
        cta: "Register",
      },
      {
        title: "Space Careers & Economy Webinar",
        description: "Career paths in the emerging African space industry.",
        date: "September 24, 2026",
        location: "Online",
        image: "/images/event-webinar.png",
        href: "/events",
        cta: "RSVP",
      },
    ],
    cta: {
      title: "Bring space education to your community.",
      description:
        "Partner with Leo Sky Africa to deliver world-class space science programs.",
      primaryLabel: "Get in touch",
      primaryHref: "/contact",
      secondaryLabel: "View events",
      secondaryHref: "/events",
    },
  },

  astrotourism: {
    slug: "astrotourism",
    path: "/astrotourism",
    kicker: "Exploration",
    title: "Astrotourism",
    tagline: "Connecting people to the universe under Africa's darkest skies.",
    heroDescription:
      "Immersive stargazing experiences, dark sky camps, and celestial storytelling that celebrate Africa's extraordinary astronomical heritage.",
    heroImage: "/images/pillar-astrotourism.png",
    mission: {
      eyebrow: "Our Mission",
      title: "Africa's skies are the world's greatest observatory.",
      paragraphs: [
        "From the Namib Desert to the Laikipia Plateau, Africa offers some of the planet's most pristine dark skies. Leo Sky Africa opens these experiences to travellers, communities, and astronomy enthusiasts.",
        "Our astrotourism programs combine scientific observation with cultural storytelling, creating unforgettable journeys beneath the cosmos.",
      ],
    },
    programs: {
      eyebrow: "Experiences",
      title: "Journeys beneath the stars.",
      items: [
        {
          title: "Dark Sky Camps",
          description:
            "Multi-night expeditions to certified dark sky locations with professional telescopes and expert guides.",
        },
        {
          title: "Astrophotography Workshops",
          description:
            "Hands-on training in capturing the Milky Way, planetary transits, and deep-sky objects under African skies.",
        },
        {
          title: "Cultural Astronomy Tours",
          description:
            "Guided experiences connecting indigenous astronomical knowledge with modern observational science.",
        },
        {
          title: "Private Observatory Evenings",
          description:
            "Exclusive stargazing sessions for corporate retreats, celebrations, and special occasions.",
        },
      ],
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Under African skies.",
      images: [
        { src: "/images/pillar-astrotourism.png", alt: "Milky Way over African landscape" },
        { src: "/gallery/astro-1.jpg", alt: "Telescope stargazing session" },
        { src: "/gallery/astro-2.jpg", alt: "Dark sky camp at night" },
        { src: "/gallery/astro-3.jpg", alt: "Astrophotography workshop" },
      ],
    },
    impact: {
      eyebrow: "Impact",
      title: "Tourism that inspires and preserves.",
      stats: [
        { value: 800, suffix: "+", label: "Stargazers Hosted" },
        { value: 15, suffix: "", label: "Dark Sky Locations" },
        { value: 24, suffix: "", label: "Astro Events" },
        { value: 6, suffix: "", label: "Community Partners" },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Unforgettable experiences.",
      items: [
        {
          quote:
            "Standing under the Laikipia sky with Leo Sky Africa was the most profound travel experience of my life. Pure magic.",
          author: "Sarah Chen",
          role: "Travel Writer, Condé Nast Traveller",
        },
        {
          quote:
            "Our corporate retreat stargazing evening was elegant, educational, and completely unique. Our team is still talking about it.",
          author: "David Okello",
          role: "CEO, Horizon Ventures",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Planning your journey.",
      items: [
        {
          question: "What is the best time for stargazing in East Africa?",
          answer:
            "Dry seasons (June–October and January–February) offer the clearest skies. New moon periods provide optimal dark sky conditions.",
        },
        {
          question: "Do I need prior astronomy experience?",
          answer:
            "No. Our experiences are designed for all levels, from first-time stargazers to experienced amateur astronomers.",
        },
        {
          question: "Can you arrange private group experiences?",
          answer:
            "Yes. We design bespoke astrotourism packages for groups, corporate events, and special celebrations.",
        },
      ],
    },
    relatedEvents: [
      {
        title: "Astrotourism Dark Sky Camp",
        description: "Weekend of telescope stargazing and astrophotography.",
        date: "August 18–20, 2026",
        location: "Laikipia, Kenya",
        image: "/images/event-darksky.png",
        href: "/events",
        cta: "Join waitlist",
      },
    ],
    cta: {
      title: "Experience Africa's greatest show.",
      description: "Book a dark sky experience or partner with us on astrotourism development.",
      primaryLabel: "Book an experience",
      primaryHref: "/contact",
      secondaryLabel: "View events",
      secondaryHref: "/events",
    },
  },

  "space-innovation": {
    slug: "space-innovation",
    path: "/space-innovation",
    kicker: "Innovation",
    title: "Space Innovation",
    tagline: "Unlocking Africa's role in the global space economy.",
    heroDescription:
      "Hackathons, satellite data challenges, and entrepreneurship programs that turn African innovation into space-ready solutions.",
    heroImage: "/images/pillar-innovation.png",
    mission: {
      eyebrow: "Our Mission",
      title: "Building Africa's space economy from the ground up.",
      paragraphs: [
        "The global space economy is projected to exceed $1 trillion by 2040. Leo Sky Africa's Innovation pillar ensures African entrepreneurs, researchers, and startups claim their share.",
        "We connect talent with satellite data, mentorship, and funding pathways to solve real challenges in agriculture, climate, urban planning, and beyond.",
      ],
    },
    programs: {
      eyebrow: "Programs",
      title: "From idea to orbit.",
      items: [
        {
          title: "Space Innovation Hackathons",
          description:
            "Intensive weekends solving real-world challenges using open-source satellite data and space technology.",
        },
        {
          title: "Startup Accelerator",
          description:
            "Mentorship, pitch training, and investor introductions for early-stage African space-tech ventures.",
        },
        {
          title: "Satellite Data Lab",
          description:
            "Access to Earth observation datasets with guided projects in agriculture, disaster response, and environmental monitoring.",
        },
        {
          title: "Research Partnerships",
          description:
            "Collaborative research programs connecting African universities with international space agencies and observatories.",
        },
      ],
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Innovation in progress.",
      images: [
        { src: "/images/pillar-innovation.png", alt: "Earth from space above Africa" },
        { src: "/gallery/innovation-1.jpg", alt: "Space hackathon team collaboration" },
        { src: "/gallery/innovation-2.jpg", alt: "Satellite data analysis workshop" },
        { src: "/gallery/innovation-3.jpg", alt: "Startup pitch event" },
      ],
    },
    impact: {
      eyebrow: "Impact",
      title: "Driving the space economy forward.",
      stats: [
        { value: 350, suffix: "+", label: "Innovators Engaged" },
        { value: 8, suffix: "", label: "Hackathons Hosted" },
        { value: 15, suffix: "", label: "Startups Supported" },
        { value: 4, suffix: "", label: "Research Partnerships" },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Builders and founders.",
      items: [
        {
          quote:
            "The hackathon gave our team access to satellite data we never knew existed. We built a crop monitoring prototype in 48 hours.",
          author: "Fatima Hassan",
          role: "Co-founder, AgriOrbit",
        },
        {
          quote:
            "Leo Sky Africa's accelerator connected us with mentors from ESA and NASA. That network changed our trajectory entirely.",
          author: "Kwame Asante",
          role: "CEO, Orbital Africa",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Getting started.",
      items: [
        {
          question: "Who can join Space Innovation programs?",
          answer:
            "Developers, researchers, entrepreneurs, and students with an interest in applying space technology to African challenges.",
        },
        {
          question: "Do I need a technical background?",
          answer:
            "Hackathons welcome multidisciplinary teams. Technical, design, business, and domain expertise are all valuable.",
        },
        {
          question: "How does the startup accelerator work?",
          answer:
            "Selected ventures receive 12 weeks of mentorship, workspace access, and introductions to investors and space industry partners.",
        },
      ],
    },
    relatedEvents: [
      {
        title: "Space Innovation Hackathon",
        description: "Build solutions with open-source satellite data.",
        date: "November 6–8, 2026",
        location: "Cape Town & Online",
        image: "/images/event-hackathon.png",
        href: "/events",
        cta: "Register team",
      },
    ],
    cta: {
      title: "Build the future of African space.",
      description: "Join our next hackathon or apply to the startup accelerator.",
      primaryLabel: "Apply now",
      primaryHref: "/contact",
      secondaryLabel: "View events",
      secondaryHref: "/events",
    },
  },
};

export const pillarPaths = Object.values(pillarPages).map((p) => p.path);
