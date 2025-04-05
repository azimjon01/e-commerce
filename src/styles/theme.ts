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
  shadows: {
    sm: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    md: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0px 6px 10px rgba(0, 0, 0, 0.15)",
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
  shadows: {
    sm: "0px 2px 4px rgba(255, 255, 255, 0.05)",
    md: "0px 4px 6px rgba(255, 255, 255, 0.08)",
    lg: "0px 6px 10px rgba(255, 255, 255, 0.12)",
  },
  borderRadius: "12px",
};

export type ThemeType = typeof lightTheme;
