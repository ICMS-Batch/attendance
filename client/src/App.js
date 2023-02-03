import "./App.css";
import Header from "./components/Header/Header";
import { ChakraProvider } from "@chakra-ui/provider";
import { extendTheme } from "@chakra-ui/theme-utils";
import { Home } from "./pages/Home";
import Routers from "./router";
const colors = {
  brand: {
    50: "#ecefff",
    100: "#cbceeb",
    200: "#a9aed6",
    300: "#888ec5",
    400: "#666db3",
    500: "#4d5499",
    600: "#3c4178",
    700: "#2a2f57",
    800: "#181c37",
    900: "#080819",
  },
};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

const theme = extendTheme({ colors, config, breakpoints });
function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Header /> */}
      {/* <Home /> */}
      <Routers />
    </ChakraProvider>
  );
}

export default App;
