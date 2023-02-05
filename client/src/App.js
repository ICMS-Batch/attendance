import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import Router from "./router";

function App() {
  const colors = {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  };

  const breakpoints = {
    xs: "20em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  };
  const theme = extendTheme({
    colors,
    breakpoints,
    fonts: {
      body: '"Manjari", sans-serif',
    },
  });
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
