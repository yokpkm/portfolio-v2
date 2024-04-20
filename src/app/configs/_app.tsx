import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import { lightTheme } from "../../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
