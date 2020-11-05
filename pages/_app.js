// import '../styles/globals.css'
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";
// components
import { customTheme } from "../theme/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
