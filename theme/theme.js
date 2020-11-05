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
      trebuchet: "Trebuchet MS"
    },
    heading: "Menlo, monospace"
  }
};
