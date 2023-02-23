import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  config: {},
  colors: {
    brand: {
      50: "#F2E3FF",
      100: "#EEDAFF",
      200: "#DBB5FF",
      300: "#C591FF",
      400: "#B275FF",
      500: "#9148FF",
      600: "#7034DB",
      700: "#5324B7",
      800: "#391693",
      900: "#270D7A",
    },
    green: {
      50: "#F5FEDD",
      100: "#F5FECF",
      200: "#E9FD9F",
      300: "#D8F96F",
      400: "#C6F44A",
      500: "#ABED12",
      600: "#8CCB0D",
      700: "#6FAA09",
      800: "#558905",
      900: "#427103",
    },
    blue: {
      50: "#D9F9FF",
      100: "#D6FCFE",
      200: "#ADF4FE",
      300: "#85E7FD",
      400: "#66D6FB",
      500: "#34BBF9",
      600: "#2693D6",
      700: "#1A6EB3",
      800: "#104E90",
      900: "#093877",
    },
    yellow: {
      50: "#FFF9DB",
      100: "#FFFAD9",
      200: "#FFF3B3",
      300: "#FFEB8D",
      400: "#FFE371",
      500: "#FFD642",
      600: "#DBB230",
      700: "#B79021",
      800: "#936F15",
      900: "#7A580C",
    },
    red: {
      50: "#FFE4E1",
      100: "#FFE8D9",
      200: "#FFCBB3",
      300: "#FFA78D",
      400: "#FF8671",
      500: "#FF4E42",
      600: "#DB3033",
      700: "#B72130",
      800: "#93152C",
      900: "#7A0C2A",
    },
  },
  shadows: {
    outline: "0 0 0 3px rgb(219, 181, 255)",
  },
});

export default theme;
