import { COLORS, FONTS, FONT_SIZES } from "../constants";
import { Theme } from "../types";

export default function useTheme() {
  const DefaultTheme: Theme = {
    dark: false,
    COLORS: {
      primary: COLORS.primary,
      primary50: COLORS.primary50,
      secondary: COLORS.secondary,
      secondary50: COLORS.secondary50,
      gray: COLORS.gray,
      teritary: COLORS.teritary,
      white: COLORS.white,
      black: COLORS.black,
      error: COLORS.error,
      pending: COLORS.redNCS,
      approve: COLORS.pigmentGreen,
      overlay: COLORS.overlay,
      transparent: COLORS.transparent,
    },
    // FONTS: {
    //   thin: FONTS.thin,
    //   light: FONTS.light,
    //   regular: FONTS.regular,
    //   medium: FONTS.medium,
    //   semibold: FONTS.semibold,
    //   bold: FONTS.bold,
    //   extrabold: FONTS.extrabold,
    // },
    // FONT_SIZES: {
    //   tiny: FONT_SIZES.tiny,
    //   small: FONT_SIZES.small,
    //   regular: FONT_SIZES.regular,
    //   medium: FONT_SIZES.medium,
    //   large: FONT_SIZES.large,
    //   extraLarge: FONT_SIZES.extraLarge,
    // },
    // w: w,
    // h: h,
  };
  return DefaultTheme;
}
