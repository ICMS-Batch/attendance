import "./App.css";
import Header from "./components/Header/Header";
import { ChakraProvider } from "@chakra-ui/provider";
import { extendTheme } from "@chakra-ui/theme-utils";
import Calendar from "./components/Calendar/Calendar";
import TimeLine from "./components/TimeLine/TimeLine";
import { Box, Flex } from "@chakra-ui/layout";
import { useState } from "react";
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

const theme = extendTheme({ colors, config });
function App() {
  const [date, setDate] = useState(new Date());
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (date) {
    var day = days[date.getUTCDay()];
    console.log(day);
  }

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Flex justifyContent="center" marginTop="10">
        <Flex width="2xl" flexDirection="column" gap="5">
          <Calendar setDate={setDate} />
          <TimeLine title="Sunday" date={date} />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
