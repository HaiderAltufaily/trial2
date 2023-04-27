import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    "html, body": {
      color: "#3B4351",
    },
  },
};
const fonts = {
  body: "din, sans-serif",
};
const shadows = {
  softShadow: " 0px 2px 8px 0px #0000000A;",
  card: "0px 2px 8px 0px #0000000A, 0px -2px 8px 0px #0000000A",
};
const colors = {
  primary: "#7B61FF",

  lightPurple: "rgba(123, 97, 255, 0.15)",
  secondary: "#42DDDD",
  secondary15: "rgba(66, 221, 219, 0.15)",

  mastard: "#FFCC18",
  yellow20: "rgba(255, 204, 24, 0.2)",
  yellow15: "rgba(255, 204, 24, 0.15)",

  green: "#8FDC7C",
  green20: "rgba(143, 220, 124, 0.2)",
  // red: "#FA5F55",
  red15: "rgba(238, 133, 133, 0.15)",
  textColor: "#3B4351",
  mediumGray: "#7E8DA7",
  lightText: "#BEC4D9",
  veryLightGray: "#F5F7FF",
  nudeishGray: "#FAFAFA",
  stroke: "#EFF2FA",
  gradientPurple: "linear-gradient(333.43deg, #7B61FF 22.22%, #A99FDE 84.72%);",
};
const components = {
  Button: {
    variants: {
      primary: {
        bg: "primary",
        fontFamily: "din",
        color: "#ffff",
        _hover: {
          bg: "#5230ff",
        },
        _active: {
          bg: "#4222de",
        },
      },
      secondary: {
        bg: "#ffffff",
        border: "2px solid ",
        borderColor: "stroke",
        fontWeight: "400",
        _hover: {
          bg: "veryLightGray",
        },
      },
    },
  },

  // Checkbox: {
  //   variants: {
  //     rounded: {
  //       control: {
  //         borderRadius: "50%",
  //         bg: "#ffff",
  //       },
  //     },
  //   },
  // },
  Input: {
    variants: {
      primary: {
        field: {
          boxShadow: "sm",
          border: "1px solid #EFF4F8",
          borderRadius: "12px",
          _placeholder: { color: "lightText" },
          _focus: {
            border: "1px solid",
            borderColor: "primary",
          },
        },
      },
      error: {
        field: {
          boxShadow: "sm",
          border: "1px solid",
          borderColor: "#b40e0e",
          borderRadius: "3px",
          _focus: {
            border: "1px solid",
            borderColor: "#ff8800",
            bg: "#fbd4d2",
          },
        },
      },
    },
  },
};

const theme = extendTheme({ colors, components, styles, fonts, shadows });

export default theme;
