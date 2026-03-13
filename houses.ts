export interface HouseModel {
  id: string;
  name: string;
  style: string;
  bedrooms: number;
  bathrooms: number;
  floors: number;
  floorArea: number;
  landSize: number;
  materialGrade: string;
  modules: number;
  buildTimeMonths: number;
  priceUSD: number;
  imageUrl: string;
  description: string;
  location?: string;
}

const STYLES = ["Minimalist", "Contemporary", "Industrial", "Scandinavian", "Japanese"];
const MATERIALS = ["Standard", "Premium", "Luxury"];
const NAMES_PREFIX = ["Nova", "Vertex", "Axis", "Prism", "Atlas", "Zenith", "Edge", "Core", "Arc", "Flux"];
const NAMES_SUFFIX = ["One", "Pro", "Max", "Elite", "Plus", "Prime", "X", "S", "A", "Z"];

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export function generateHouseId(index: number, config: { landSize: number; bedrooms: number; floors: number; style: string; material: string }): string {
  return `${config.style}-${config.material}-${config.landSize}-${config.bedrooms}-${config.floors}-${index}`;
}

const LOCATIONS = ["Dubai, UAE", "Shanghai, China", "London, UK", "Moscow, Russia", "Jakarta, Indonesia", "Singapore", "Sydney, Australia", "Berlin, Germany"];

export function generateConcepts(config: {
  landSize: number;
  bedrooms: number;
  floors: number;
  style: string;
  material: string;
}): HouseModel[] {
  const count = 24;
  const results: HouseModel[] = [];
  const seed = config.landSize * 100 + config.bedrooms * 10 + config.floors + STYLES.indexOf(config.style) * 1000 + MATERIALS.indexOf(config.material) * 5000;
  const rand = seededRandom(seed);

  for (let i = 0; i < count; i++) {
    const variation = 0.7 + rand() * 0.6;
    const baseArea = config.landSize * 0.6 * config.floors * variation;
    const floorArea = Math.round(baseArea);
    const modules = Math.max(2, Math.round(floorArea / 25));
    const materialMultiplier = config.material === "Luxury" ? 1.8 : config.material === "Premium" ? 1.35 : 1;
    const complexityMultiplier = 0.85 + rand() * 0.3;
    const pricePerSqm = (850 + rand() * 400) * materialMultiplier * complexityMultiplier;
    const price = Math.round(floorArea * pricePerSqm / 100) * 100;
    const buildTime = Math.max(3, Math.round((modules * 1.2 + config.floors * 2) * (0.8 + rand() * 0.4)));
    const bathrooms = Math.max(1, Math.round(config.bedrooms * (0.5 + rand() * 0.5)));

    const nameIdx = Math.floor(rand() * NAMES_PREFIX.length);
    const suffIdx = Math.floor(rand() * NAMES_SUFFIX.length);
    const locIdx = Math.floor(rand() * LOCATIONS.length);

    results.push({
      id: generateHouseId(i, config),
      name: `${NAMES_PREFIX[nameIdx]} ${NAMES_SUFFIX[suffIdx]} ${config.style.charAt(0)}${i + 1}`,
      style: config.style,
      bedrooms: config.bedrooms,
      bathrooms,
      floors: config.floors,
      floorArea,
      landSize: config.landSize,
      materialGrade: config.material,
      modules,
      buildTimeMonths: buildTime,
      priceUSD: price,
      imageUrl: `https://images.unsplash.com/photo-${getHousePhoto(i)}?w=600&h=400&fit=crop`,
      description: `A ${config.style.toLowerCase()} modular home featuring ${config.bedrooms} bedrooms across ${config.floors} floor${config.floors > 1 ? "s" : ""}. Built with ${config.material.toLowerCase()} grade materials for lasting quality.`,
      location: LOCATIONS[locIdx],
    });
  }

  return results;
}

function getHousePhoto(index: number): string {
  const photos = [
    "1600596542815-ffad4c1539a9",
    "1600585154340-be6161a56a0c",
    "1600607687939-ce8a6c25118c",
    "1600566753086-00f18fb6b3ea",
    "1600573472591-ee8da0a75894",
    "1613490493805-01e45e9b8c54",
    "1600047509807-ba8f99d2cdde",
    "1600566753190-17f0baa2a6c3",
    "1605276374104-dee2a0ed3cd6",
    "1600585153490-76fb20a32601",
    "1600607687644-aac4c3eac7f4",
    "1600566753376-12c8ab7a5a0e",
    "1602343168117-6d4d1e2e3b5a",
    "1600596542815-ffad4c1539a9",
    "1600585154340-be6161a56a0c",
    "1600607687939-ce8a6c25118c",
    "1600566753086-00f18fb6b3ea",
    "1600573472591-ee8da0a75894",
    "1613490493805-01e45e9b8c54",
    "1600047509807-ba8f99d2cdde",
    "1600566753190-17f0baa2a6c3",
    "1605276374104-dee2a0ed3cd6",
    "1600585153490-76fb20a32601",
    "1600607687644-aac4c3eac7f4",
  ];
  return photos[index % photos.length];
}

export const FEATURED_HOUSES: HouseModel[] = [
  {
    id: "featured-1",
    name: "Nova Prime M1",
    style: "Minimalist",
    bedrooms: 3,
    bathrooms: 2,
    floors: 2,
    floorArea: 145,
    landSize: 200,
    materialGrade: "Premium",
    modules: 6,
    buildTimeMonths: 8,
    priceUSD: 189000,
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop",
    description: "A sleek minimalist modular home with clean lines and open living spaces.",
    location: "Dubai, UAE",
  },
  {
    id: "featured-2",
    name: "Vertex Elite C2",
    style: "Contemporary",
    bedrooms: 4,
    bathrooms: 3,
    floors: 2,
    floorArea: 210,
    landSize: 300,
    materialGrade: "Luxury",
    modules: 8,
    buildTimeMonths: 10,
    priceUSD: 345000,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop",
    description: "A spacious contemporary design with luxury finishes throughout.",
    location: "Shanghai, China",
  },
  {
    id: "featured-3",
    name: "Axis Pro S3",
    style: "Scandinavian",
    bedrooms: 2,
    bathrooms: 1,
    floors: 1,
    floorArea: 85,
    landSize: 150,
    materialGrade: "Standard",
    modules: 4,
    buildTimeMonths: 5,
    priceUSD: 98000,
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop",
    description: "A cozy Scandinavian-inspired modular home perfect for small families.",
    location: "London, UK",
  },
];

export const LISTING_HOUSES: HouseModel[] = [
  ...FEATURED_HOUSES,
  {
    id: "listing-4",
    name: "Prism Max I4",
    style: "Industrial",
    bedrooms: 3,
    bathrooms: 2,
    floors: 2,
    floorArea: 165,
    landSize: 220,
    materialGrade: "Premium",
    modules: 7,
    buildTimeMonths: 9,
    priceUSD: 225000,
    imageUrl: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=500&fit=crop",
    description: "An industrial-style modular home with exposed structural elements and modern finishes.",
    location: "Berlin, Germany",
  },
  {
    id: "listing-5",
    name: "Atlas One J5",
    style: "Japanese",
    bedrooms: 2,
    bathrooms: 2,
    floors: 1,
    floorArea: 95,
    landSize: 180,
    materialGrade: "Premium",
    modules: 4,
    buildTimeMonths: 6,
    priceUSD: 142000,
    imageUrl: "https://images.unsplash.com/photo-1600573472591-ee8da0a75894?w=800&h=500&fit=crop",
    description: "A Japanese-inspired modular home emphasizing harmony with nature and minimalism.",
    location: "Singapore",
  },
  {
    id: "listing-6",
    name: "Zenith Plus M6",
    style: "Minimalist",
    bedrooms: 5,
    bathrooms: 4,
    floors: 3,
    floorArea: 320,
    landSize: 400,
    materialGrade: "Luxury",
    modules: 12,
    buildTimeMonths: 14,
    priceUSD: 520000,
    imageUrl: "https://images.unsplash.com/photo-1613490493805-01e45e9b8c54?w=800&h=500&fit=crop",
    description: "A grand minimalist estate with three floors of luxury modular living.",
    location: "Dubai, UAE",
  },
  {
    id: "listing-7",
    name: "Edge X C7",
    style: "Contemporary",
    bedrooms: 1,
    bathrooms: 1,
    floors: 1,
    floorArea: 55,
    landSize: 100,
    materialGrade: "Standard",
    modules: 2,
    buildTimeMonths: 3,
    priceUSD: 62000,
    imageUrl: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=500&fit=crop",
    description: "A compact contemporary studio module, perfect as a starter home or guest house.",
    location: "Jakarta, Indonesia",
  },
  {
    id: "listing-8",
    name: "Core A S8",
    style: "Scandinavian",
    bedrooms: 3,
    bathrooms: 2,
    floors: 2,
    floorArea: 155,
    landSize: 250,
    materialGrade: "Premium",
    modules: 6,
    buildTimeMonths: 8,
    priceUSD: 198000,
    imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=500&fit=crop",
    description: "A warm Scandinavian modular home with natural wood accents and cozy interiors.",
    location: "Moscow, Russia",
  },
  {
    id: "listing-9",
    name: "Arc Prime C9",
    style: "Contemporary",
    bedrooms: 4,
    bathrooms: 3,
    floors: 2,
    floorArea: 240,
    landSize: 350,
    materialGrade: "Luxury",
    modules: 10,
    buildTimeMonths: 11,
    priceUSD: 415000,
    imageUrl: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=500&fit=crop",
    description: "A luxury contemporary villa with panoramic views and premium modular construction.",
    location: "Dubai, UAE",
  },
  {
    id: "listing-10",
    name: "Flux Elite I10",
    style: "Industrial",
    bedrooms: 2,
    bathrooms: 1,
    floors: 2,
    floorArea: 110,
    landSize: 160,
    materialGrade: "Standard",
    modules: 5,
    buildTimeMonths: 6,
    priceUSD: 118000,
    imageUrl: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&h=500&fit=crop",
    description: "A compact industrial loft-style modular home with efficient two-floor living.",
    location: "Shanghai, China",
  },
  {
    id: "listing-11",
    name: "Nova Max M11",
    style: "Minimalist",
    bedrooms: 4,
    bathrooms: 3,
    floors: 2,
    floorArea: 195,
    landSize: 280,
    materialGrade: "Premium",
    modules: 8,
    buildTimeMonths: 9,
    priceUSD: 268000,
    imageUrl: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&h=500&fit=crop",
    description: "A spacious minimalist family home with clean geometry and abundant natural light.",
    location: "Sydney, Australia",
  },
  {
    id: "listing-12",
    name: "Vertex Pro J12",
    style: "Japanese",
    bedrooms: 3,
    bathrooms: 2,
    floors: 2,
    floorArea: 140,
    landSize: 200,
    materialGrade: "Luxury",
    modules: 6,
    buildTimeMonths: 8,
    priceUSD: 285000,
    imageUrl: "https://images.unsplash.com/photo-1600566753376-12c8ab7a5a0e?w=800&h=500&fit=crop",
    description: "A refined Japanese-inspired home blending traditional zen aesthetics with modular engineering.",
    location: "Singapore",
  },
  {
    id: "listing-13",
    name: "Zenith X S13",
    style: "Scandinavian",
    bedrooms: 2,
    bathrooms: 2,
    floors: 1,
    floorArea: 90,
    landSize: 170,
    materialGrade: "Premium",
    modules: 4,
    buildTimeMonths: 5,
    priceUSD: 135000,
    imageUrl: "https://images.unsplash.com/photo-1602343168117-6d4d1e2e3b5a?w=800&h=500&fit=crop",
    description: "A cozy Nordic retreat with warm wood tones and energy-efficient modular design.",
    location: "London, UK",
  },
  {
    id: "listing-14",
    name: "Prism Elite C14",
    style: "Contemporary",
    bedrooms: 6,
    bathrooms: 5,
    floors: 3,
    floorArea: 420,
    landSize: 500,
    materialGrade: "Luxury",
    modules: 16,
    buildTimeMonths: 16,
    priceUSD: 780000,
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop",
    description: "An ultra-luxury modular mansion with three floors of premium living space and rooftop terrace.",
    location: "Dubai, UAE",
  },
  {
    id: "listing-15",
    name: "Atlas S M15",
    style: "Minimalist",
    bedrooms: 2,
    bathrooms: 1,
    floors: 1,
    floorArea: 72,
    landSize: 120,
    materialGrade: "Standard",
    modules: 3,
    buildTimeMonths: 4,
    priceUSD: 78000,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop",
    description: "An affordable minimalist starter home with smart space utilization and clean aesthetics.",
    location: "Jakarta, Indonesia",
  },
];
