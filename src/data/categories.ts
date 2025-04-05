export interface Category {
  id: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Electronics",
    description: "All kinds of electronic devices",
  },
  {
    id: "2",
    name: "Mobile Phones",
    description: "Smartphones, feature phones, and accessories",
  },
  {
    id: "3",
    name: "New Arrivals",
    description: "Latest products that just arrived.",
  },
  {
    id: "4",
    name: "Bestsellers",
    description: "Popular and trending products.",
  },
  {
    id: "5",
    name: "Top Rated",
    description: "Highly rated products by customers.",
  },
  {
    id: "6",
    name: "Sale",
    description: "Discounted products at special prices.",
  },
];
