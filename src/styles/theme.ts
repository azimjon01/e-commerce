export const lightTheme = {
  mode: "light",
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    background: "#ffffff",
    text: "#111111",
    border: "#e0e0e0",
  },
  font: {
    base: "'Inter', sans-serif",
    heading: "'Poppins', sans-serif",
  },
  spacing: {
    sm: "8px",
    md: "16px",
    lg: "32px",
  },
  borderRadius: "12px",
};

export const darkTheme = {
  mode: "dark",
  colors: {
    primary: "#1e90ff",
    secondary: "#999999",
    background: "#121212",
    text: "#f5f5f5",
    border: "#333333",
  },
  font: {
    base: "'Inter', sans-serif",
    heading: "'Poppins', sans-serif",
  },
  spacing: {
    sm: "8px",
    md: "16px",
    lg: "32px",
  },
  borderRadius: "12px",
};

// Tiplar uchun export
export type ThemeType = typeof lightTheme;
