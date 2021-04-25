import { ChakraProvider } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

import "./styles.css";

const breakpoints = createBreakpoints({
  sm: "23em",
  md: "48em",
  lg: "64em",
  xl: "90em",
  "2xl": "120em"
});
// 368(23, iphonex), 768(48, Ipad), 1024(64 Ipad Pro),1280x800 80,1440x900(90), 1920(120, fullHD)
const theme = extendTheme({ breakpoints });

function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
