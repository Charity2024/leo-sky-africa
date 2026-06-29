export type Partner = {
  name: string;
  logo: string;
  url: string;
  width: number;
  height: number;
};

export const partners: readonly Partner[] = [
  {
    name: "NASA",
    logo: "/partners/nasa.svg",
    url: "https://www.nasa.gov",
    width: 240,
    height: 80,
  },
  {
    name: "European Space Agency",
    logo: "/partners/esa.svg",
    url: "https://www.esa.int",
    width: 240,
    height: 80,
  },
  {
    name: "UNESCO",
    logo: "/partners/unesco.svg",
    url: "https://www.unesco.org",
    width: 280,
    height: 80,
  },
  {
    name: "Kenya Space Agency",
    logo: "/images/ksa.png",
    url: "https://www.ksa.go.ke",
    width: 320,
    height: 80,
  },
  {
    name: "University Partner",
    logo: "/partners/university.svg",
    url: "https://www.unesco.org/en/fieldoffice/nairobi",
    width: 300,
    height: 80,
  },
  {
    name: "Observatory Partner",
    logo: "/partners/observatory.svg",
    url: "https://www.esa.int",
    width: 300,
    height: 80,
  },
] as const;
