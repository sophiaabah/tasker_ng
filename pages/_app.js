import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import Navbar from "components/navbar";
import "styles/globals.css";

const colors = {
  primary: {
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
  secondary: {
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
    100: "#F1F9F3",
  },
};

const fonts = {
  heading: "Domine, serif",
  body: "Inter, sans-serif",
};

const theme = extendTheme({ colors, fonts });

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // useEffect(() => {
  //   ReactGA.initialize(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
  //   ReactGA.send({ hitType: "pageview", page: router.asPath });

  //   const handleRouteChange = (url) => {
  //     ReactGA.send({ hitType: "pageview", page: url });
  //   };

  //   router.events.on("routeChangeComplete", handleRouteChange);

  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router]);

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
