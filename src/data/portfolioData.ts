import { ProjectType, CategoryType } from '../types/portfolio';

export const categories: CategoryType[] = [
  { id: 'all', label: 'portfolio.categories.all' },
  { id: 'photography', label: 'portfolio.categories.photography' },
  { id: 'video', label: 'portfolio.categories.video' },
  { id: 'graphics', label: 'portfolio.categories.graphics' },
  { id: 'printing', label: 'portfolio.categories.printing' },
  { id: 'drone', label: 'portfolio.categories.drone' },
  { id: 'web', label: 'portfolio.categories.web' },
];

export const projects: ProjectType[] = [
  {
    id: 1,
    translationKey: "project1",
    category: "photography",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    client: "Mode Magazine",
  },
  {
    id: 2,
    translationKey: "project2",
    category: "photography",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    client: "Gourmet Restaurants",
  },
  {
    id: 3,
    translationKey: "project3",
    category: "photography",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    client: "Tech Corp",
  },
  {
    id: 4,
    translationKey: "project4",
    category: "photography",
    image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b",
    client: "Luxury Brands",
  },
  {
    id: 5,
    translationKey: "project5",
    category: "photography",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
    client: "Event Planners Inc",
  },
  {
    id: 6,
    translationKey: "project6",
    category: "video",
    image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b",
    client: "Innovation Corp",
  },
  {
    id: 7,
    translationKey: "project7",
    category: "video",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",
    client: "Tech Startup",
  },
  {
    id: 8,
    translationKey: "project8",
    category: "video",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    client: "Private Client",
  },
  {
    id: 9,
    translationKey: "project9",
    category: "graphics",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    client: "Startup Company",
  },
  {
    id: 10,
    translationKey: "project10",
    category: "graphics",
    image: "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39",
    client: "Food Brand",
  },
  {
    id: 11,
    translationKey: "project11",
    category: "printing",
    image: "https://images.unsplash.com/photo-1504270997636-07ddfbd48945",
    client: "Corporate Client",
  },
  {
    id: 12,
    translationKey: "project12",
    category: "printing",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    client: "Publishing House",
  },
  {
    id: 13,
    translationKey: "project13",
    category: "drone",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f",
    client: "Real Estate Agency",
  },
  {
    id: 14,
    translationKey: "project14",
    category: "drone",
    image: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a",
    client: "Construction Corp",
  },
  {
    id: 15,
    translationKey: "project15",
    category: "web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    client: "Online Retailer",
  },
  {
    id: 16,
    translationKey: "project16",
    category: "web",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
    client: "Corporate Client",
  }
];

