const palette = {
  neutral100: "#FFFFFF",
  neutral150: "#E0E0E0",
  neutral500: "#978F8A",
  neutral900: "#000000",

  primary400: "#f8f7f7",
  primary500: "#aae581",

  secondary400: "#2A2D4380",
  secondary500: "#214a82",

  angry500: "#F2385F",
  gray: "#9F9F9F",
} as const;

export const COLORS = {
  primary1: palette.primary500,
  primary2: palette.primary400,
  secondary: palette.secondary500,
  secondary50: palette.secondary400,
  gray: palette.gray,
  lightGray: "#E8E8E8",
  lightBg: "#F7F7F7",
  pigmentGreen: "#20A53D",
  white: palette.neutral100,
  semiWhite: palette.neutral150,
  black: palette.neutral900,
  error: palette.angry500,
  redNCS: "#ff6c6c",
  transparent: "transparent",
  info: "#00FFFF",
};
