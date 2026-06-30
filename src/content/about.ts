import type { AboutContent } from "./types";
import { mediaPaths } from "./site";

export const aboutContent: AboutContent = {
  eyebrow: "Our Mission",
  title: "Building Africa's future in the space economy.",
  description: [
    "Leo Sky Africa exists to make space accessible, inspiring, and economically relevant for the next generation of Africans.",
    "Through education, astrotourism, and Leo Sky Labs, we are creating pathways into one of the world's fastest-growing industries.",
  ],
  cta: {
    label: "Our story",
    href: "/#about",
  },
  image: {
    src: `${mediaPaths.images}/about.png`,
    alt: "Astronomical telescope pointed toward a star-filled night sky",
  },
};
