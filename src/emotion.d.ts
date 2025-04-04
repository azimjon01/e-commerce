// src/emotion.d.ts

import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      background: string;
      text: string;
      primary: string;
      border: string;
    };
    spacing: {
      sm: string;
      md: string;
      lg: string;
    };
    font: {
      heading: string;
    };
  }
}
