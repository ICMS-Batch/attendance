import { Alert, Box, Button, Flex, Text } from "@chakra-ui/react";
import Loader from "../components/Loader";
import useCustomToast from "../hooks/useCustomToast";
import useGetCurrentClass from "../hooks/useGetCurrentClass";

const AttendanceForm = () => {
  const { success } = useCustomToast();

  const { currentClass, error } = useGetCurrentClass();

  const onClick = () => {
    success({
      message: "Attendance marked",
    });
  };
  if (error) {
    return <Alert status="error">{error}</Alert>;
  }

  if (!currentClass) {
    return <Loader />;
  }

  return (
    <Box height="100vh">
      <Flex
        flexDirection="column"
        justifyContent="center"
        height="100%"
        alignItems="center"
        gap="2"
      >
        <Text size="lg" fontSize="32">
          Current Class
        </Text>
        <Text fontSize="40" fontWeight="bold">
          ( {currentClass.subject.name} )
        </Text>

        <Text width="full" fontSize="32">
          Start Time: {currentClass.start_time}
        </Text>
        <Text width="full" fontSize="32">
          End Time: {currentClass.end_time}
        </Text>

        <Button width="2xs" colorScheme="pink" marginTop="10" onClick={onClick}>
          Attend
        </Button>
      </Flex>
    </Box>
  );
};

export default AttendanceForm;
