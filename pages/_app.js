import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  tasker_red: {
    50: "#F8EDED",
    100: "#EBCCCC",
    200: "#DDABAB",
    300: "#D08A8A",
    400: "#C36A6A",
    500: "#B64949",
    600: "#923A3A",
    700: "#6D2C2C",
    800: "#491D1D",
    900: "#240F0F",
  },
  tasker_green: {
    50: "#EBF9EF",
    100: "#C8EED2",
    200: "#A5E3B5",
    300: "#82D997",
    400: "#5FCE7A",
    500: "#3CC35D",
    600: "#309C4A",
    700: "#247538",
    800: "#184E25",
    900: "#0C2713",
  },
  tasker_sorbet: {
    900: "#F1F9F3",
  },
};

const fonts = {
  heading: "Poppins, sans-serif",
  body: "Source Sans Pro, sans-serif",
};

const theme = extendTheme({ colors, fonts });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />;
    </ChakraProvider>
  );
}

export default MyApp;
