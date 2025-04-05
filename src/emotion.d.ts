import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    mode: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      border: string;
    };
    font: {
      base: string;
      heading: string;
    };
    spacing: {
      sm: string;
      md: string;
      lg: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
    };
    borderRadius: string;
  }
}
