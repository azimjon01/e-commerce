import { useTheme } from "@emotion/react";
import React from "react";

type ThemedIconProps = {
  light: React.ReactNode;
  dark: React.ReactNode;
};

const ThemedIcon = ({ light, dark }: ThemedIconProps) => {
  const theme = useTheme();

  return <>{theme.mode === "light" ? light : dark}</>;
};

export default ThemedIcon;
