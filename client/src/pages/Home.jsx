import Calendar from '../components/Calendar/Calendar';
import TimeLine from '../components/TimeLine/TimeLine';
import {Flex} from "@chakra-ui/react";
import { useState } from 'react';
export const Home = () => {
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
        <Flex w={{sm:'100%', md:'65%', lg:'35%'}}flexDir="column" p="16px" >
        <Calendar setDate={setDate}/>
        <TimeLine title="Sunday" date={date}/>
        </Flex>
  )
}

export default Home;