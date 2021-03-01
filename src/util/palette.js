import { ColorPalette } from "wmk-color-palette";

export const colors = new ColorPalette([
  // Primary Color
  { value: "#F16724", group: "orange", primary: true },
  // Secondary Color
  { value: "#595f67", group: "black", secondary: true },
  // Tertiary Color
  { value: "#d0d0d0", group: "gray", tertiary: true },
  // Accent Color
  { value: "#F16724", group: "orange", accent: true },
  // Co-Accent Color
  { value: "#F16724", group: "orange", coaccent: true },
  // Global Black Color
  { value: "#2f2f2f", group: "black", black: true },
  // Global Text Color
  { value: "#2f2f2f", group: "black", text: true },
  // Global White Color
  { value: "#fcfcfc", group: "white", reverse: true },
]);
