export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryId: string;
  available: boolean;
  isFavorite: boolean;
}

export const products: Product[] = [
  // Electronics
  {
    id: "1",
    name: "Laptop",
    description: "High performance laptop",
    price: 999.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-four.webp",
    categoryId: "1", // Electronics
    available: true,
    isFavorite: false,
  },
  {
    id: "2",
    name: "Smartphone",
    description: "Latest model smartphone",
    price: 799.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-one.webp",
    categoryId: "1", // Electronics
    available: true,
    isFavorite: false,
  },
  {
    id: "3",
    name: "Tablet",
    description: "Portable tablet with high-resolution display",
    price: 499.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-two.webp",
    categoryId: "1", // Electronics
    available: true,
    isFavorite: false,
  },
  {
    id: "4",
    name: "Smartwatch",
    description: "Track your health and fitness with this smartwatch",
    price: 199.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-three.webp",
    categoryId: "1", // Electronics
    available: true,
    isFavorite: false,
  },
  {
    id: "5",
    name: "Wireless Headphones",
    description: "Noise-canceling wireless headphones",
    price: 299.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-four.webp",
    categoryId: "1", // Electronics
    available: true,
    isFavorite: false,
  },
  {
    id: "6",
    name: "4K TV",
    description: "Ultra high definition 4K TV with smart features",
    price: 799.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-five.webp",
    categoryId: "1", // Electronics
    available: true,
    isFavorite: false,
  },
  {
    id: "7",
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with powerful sound",
    price: 129.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-six.webp",
    categoryId: "1", // Electronics
    available: true,
    isFavorite: false,
  },
  {
    id: "8",
    name: "Camera",
    description: "Professional digital camera for high-quality photos",
    price: 1499.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-seven.webp",
    categoryId: "1", // Electronics
    available: true,
    isFavorite: false,
  },
  {
    id: "9",
    name: "Gaming Console",
    description: "Next-generation gaming console for immersive gameplay",
    price: 499.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-eight.webp",
    categoryId: "1", // Electronics
    available: true,
    isFavorite: false,
  },
  {
    id: "10",
    name: "Laptop Stand",
    description: "Adjustable laptop stand for ergonomic use",
    price: 59.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-nine.webp",
    categoryId: "1", // Electronics
    available: true,
    isFavorite: false,
  },

  // Mobile Phones
  {
    id: "11",
    name: "Smartphone A",
    description: "Affordable smartphone with great features",
    price: 499.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-one.webp",
    categoryId: "2", // Mobile Phones
    available: true,
    isFavorite: false,
  },
  {
    id: "12",
    name: "Smartphone B",
    description: "Smartphone with top-notch camera and performance",
    price: 899.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-two.webp",
    categoryId: "2", // Mobile Phones
    available: true,
    isFavorite: false,
  },
  {
    id: "13",
    name: "Smartphone C",
    description: "High-end smartphone with premium features",
    price: 1199.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-three.webp",
    categoryId: "2", // Mobile Phones
    available: true,
    isFavorite: false,
  },

  // New Arrivals
  {
    id: "14",
    name: "Smart Home Hub",
    description: "Central hub to control your smart home devices",
    price: 129.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-four.webp",
    categoryId: "3", // New Arrivals
    available: true,
    isFavorite: false,
  },
  {
    id: "15",
    name: "Wireless Router",
    description: "High-speed wireless router for home and office",
    price: 79.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-five.webp",
    categoryId: "3", // New Arrivals
    available: true,
    isFavorite: false,
  },
  {
    id: "16",
    name: "Portable Power Bank",
    description: "Compact power bank for charging devices on the go",
    price: 39.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-six.webp",
    categoryId: "3", // New Arrivals
    available: true,
    isFavorite: false,
  },

  // Bestsellers
  {
    id: "17",
    name: "Laptop Cooling Pad",
    description: "Cooling pad for laptops to prevent overheating",
    price: 29.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-seven.webp",
    categoryId: "4", // Bestsellers
    available: true,
    isFavorite: false,
  },
  {
    id: "18",
    name: "Portable Speaker",
    description: "Mini speaker with great sound quality",
    price: 49.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-eight.webp",
    categoryId: "4", // Bestsellers
    available: true,
    isFavorite: false,
  },
  {
    id: "19",
    name: "Bluetooth Headset",
    description: "Wireless Bluetooth headset for calls and music",
    price: 79.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-nine.webp",
    categoryId: "4", // Bestsellers
    available: true,
    isFavorite: false,
  },

  // Sale
  {
    id: "20",
    name: "Smart Light Bulb",
    description: "LED smart light bulb that works with voice assistants",
    price: 19.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-ten.webp",
    categoryId: "6", // Sale
    available: true,
    isFavorite: false,
  },
  {
    id: "21",
    name: "Electric Kettle",
    description: "Cordless electric kettle with fast boiling capabilities",
    price: 49.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-one.webp",
    categoryId: "6", // Sale
    available: true,
    isFavorite: false,
  },
  {
    id: "22",
    name: "Cordless Vacuum Cleaner",
    description: "Lightweight and powerful cordless vacuum cleaner",
    price: 199.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-two.webp",
    categoryId: "6", // Sale
    available: true,
    isFavorite: false,
  },
  {
    id: "23",
    name: "Smart Thermostat",
    description: "Energy-efficient smart thermostat for home automation",
    price: 199.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-three.webp",
    categoryId: "6", // Sale
    available: true,
    isFavorite: false,
  },

  // Top Rated
  {
    id: "24",
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with smooth tracking",
    price: 29.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-four.webp",
    categoryId: "5", // Top Rated
    available: true,
    isFavorite: false,
  },
  {
    id: "25",
    name: "Wireless Keyboard",
    description: "Sleek and quiet wireless keyboard",
    price: 59.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-five.webp",
    categoryId: "5", // Top Rated
    available: true,
    isFavorite: false,
  },
  {
    id: "26",
    name: "Ergonomic Chair",
    description: "Ergonomic chair for long hours of comfort",
    price: 149.99,
    imageUrl: "/assets/images/data/products/electronics/electronics-five.webp",
    categoryId: "5", // Top Rated
    available: true,
    isFavorite: false,
  },
];
