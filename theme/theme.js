import { theme } from "@chakra-ui/core";

export const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    font: {
      lucida: "Lucida Handwriting",
      comic: "Comic Sans MS",
      century: "Century Gothic",
      futara: "Futara",
      trebuchet: "Trebuchet MS",
      courier: "Courier, monospace"
    },
    heading: "Menlo, monospace"
  },
  colors: {
    ...theme.colors,
    color: {
      content: "#f2f754"
    }
  }
};
