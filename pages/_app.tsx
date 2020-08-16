import type { AppProps } from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";

export interface IColors {
  primary: string;
  primary10: string;
  primary30: string;
  background: string;
  color: string;
  color50: string;
}

export interface IFontSizes {
  body: string;
  titleS: string;
  titleM: string;
  titleL: string;
  titleXL: string;
}

export interface ISpacing {
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
}

export interface ITheme {
  colors: IColors;
  fontsizes: IFontSizes;
  spacing: ISpacing;
}

const theme: ITheme = {
  colors: {
    primary: "#FFD600",
    primary10: "rgba(255, 214, 0, 0.1)",
    primary30: "rgba(255, 214, 0, 0.3)",
    background: "#000000",
    color: "#FFFFFF",
    color50: "rgba(255, 255, 255, 0.2);",
  },
  fontsizes: {
    body: "1rem",
    titleS: "1.25rem",
    titleM: "1.5rem",
    titleL: "2rem",
    titleXL: "2.5rem",
  },
  spacing: {
    xs: "0.5rem",
    s: "1rem",
    m: "1.5rem",
    l: "2rem",
    xl: "3rem",
  },
};

export interface IThemeWrapper {
  theme: ITheme;
}

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
  html, body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.color};
    font-size: ${(props) => props.theme.fontsizes.body};
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
