import type { AboutContent } from "./types";
import { mediaPaths, socialLinks } from "./site";

export const aboutContent: AboutContent = {
  eyebrow: "Our Mission",
  title: "We Believe Africa Belongs at the Center of the Space Age.",
  description: [
    "Leo Sky Africa was founded in 2014 by economist Kimani Wa Nyoike. The idea was simple: Africa has extraordinary skies, extraordinary talent, and an extraordinary story to tell — and it deserved an organisation built to tell it. Africans in Space, for Africa, by Africans.",
  ],
  cta: {
    label: "Our story",
    href: socialLinks.story,
  },
  image: {
    src: `${mediaPaths.images}/kimani.webp`,
    alt: "Astronomical telescope pointed toward a star-filled night sky",
  },
};
