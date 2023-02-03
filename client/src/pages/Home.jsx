import Calendar from "../components/Calendar/Calendar";
import TimeLine from "../components/TimeLine/TimeLine";
import { Flex } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";
import { TbBook } from "react-icons/tb";
export const Home = () => {
  const { colorMode } = useColorMode();
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
    <Flex
      w="100vw"
      h="100vh"
      p="16px"
      bg={colorMode === "light" ? "white" : "gray.700"}
      justify="center"
    >
      <Flex
        flexDir="column"
        w={{ base: "100%", sm: "100%", md: "50%", lg: "40%" }}
        gap="20px"
      >
        <Calendar setDate={setDate} />
        {/* <TimeLine  date={date}/> */}
        <Timeline>
          <TimelineEvent
            title="Computer Networking"
            createdAt="11:06 AM"
            icon={<TbBook size="fill" />}
            contentStyle={{
              background: "#DD6B20",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Class is ongoing
          </TimelineEvent>
          <TimelineEvent
            title="Math"
            createdAt="09:06 AM"
            icon={<TbBook size="fill" />}
            contentStyle={{
              background: "#33691e",
              color: "white",
              fontWeight: "bold",
            }}
          >
            You were present
          </TimelineEvent>
          <TimelineEvent
            title="English"
            createdAt="7:00 AM"
            icon={<TbBook size="fill" />}
            contentStyle={{
              background: "#E53E3E",
              color: "white",
              fontWeight: "bold",
            }}
          >
            You were Absent
          </TimelineEvent>
        </Timeline>
      </Flex>
    </Flex>
  );
};

export default Home;
