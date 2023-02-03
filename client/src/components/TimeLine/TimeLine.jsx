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
    position='relative'
      _before={{
        backgroundColor: theme.colors.gray[300],
        bottom: 0,
        content: "''",
        display: "flex",
        left:0,
        position: "absolute",
        top: 3,
        width: "3px",
      }}
    >
      <Text  fontSize={{ base: '22px', md: '24px', lg: '28px' }} fontWeight="medium" ml='2' mt='2'>{days[date.getDay()]}</Text>
      <List spacing={2} ml='3'>
        {events.map((event, index) => {
          const isSuccess = event.status === "success";
          return (
            <ListItem key={index} fontSize={{base:'16px', md:'18px', lg:'20'}}>
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
