import { Box, Flex, List, ListIcon, ListItem } from "@chakra-ui/layout";
import { useTheme, Text } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
const TimeLine = ({ title, date }) => {
  const theme = useTheme();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const events = [
    {
      title: "Math",
      status: "success",
    },
    {
      title: "English",
      status: "error",
    },
  ];
  return (
    <Box
      _before={{
        backgroundColor: theme.colors.gray[300],
        bottom: 0,
        content: "''",
        display: "block",
        left: 0,
        position: "absolute",
        top: 0,
        width: "2px",
      }}
    >
      <Text fontSize={{sm:'20px', md:'22px', lg:'24px'}}>{days[date.getDay()]}</Text>
      <List spacing={3}>
        {events.map((event, index) => {
          const isSuccess = event.status === "success";
          return (
            <ListItem key={index} fontSize="14px">
              <ListIcon
                as={isSuccess ? MdCheckCircle : RxCrossCircled}
                color={event.status === "success" ? "green.500" : "red.500"}
              />
              {event.title}
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default TimeLine;
