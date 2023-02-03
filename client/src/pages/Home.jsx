import Calendar from '../components/Calendar/Calendar';
import TimeLine from '../components/TimeLine/TimeLine';
import {Flex} from "@chakra-ui/react";
import { useColorMode } from '@chakra-ui/react';
import { useState } from 'react';
export const Home = () => {
  const {colorMode} = useColorMode();
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
        <Flex w="100vw" h='100vh' p="16px"  bg={colorMode==="light"? 'white': "gray.700"} justify="center">
        <Flex flexDir='column' w={{base:'100%',sm:'100%', md:'50%', lg:'40%'}}>
        <Calendar setDate={setDate}/>
        <TimeLine  date={date}/>
        </Flex>
        </Flex>
  )
}

export default Home;