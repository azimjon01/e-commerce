export interface Setting {
  key: string;
  value: string | number | boolean;
}

export const settings: Setting[] = [
  {
    key: "siteTitle",
    value: "My E-Commerce Site",
  },
  {
    key: "currency",
    value: "USD",
  },
  {
    key: "theme",
    value: "light",
  },
  // Add more settings
];
