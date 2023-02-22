import { Alert, Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { useAuth } from "../contexts/AuthContext";
import useCustomToast from "../hooks/useCustomToast";
import useGetCurrentClass from "../hooks/useGetCurrentClass";
import supabase from "../supabase";

const AttendanceForm = () => {
  const { success, error: toastError } = useCustomToast();
  const [hasAttended, setHasAttended] = useState(false);

  const { currentUser } = useAuth();
  const { currentClass, error, isLoading } = useGetCurrentClass();

  const fetchAttendance = async () => {
    const { data } = await supabase.rpc("has_attendance", {
      p_routine_id: currentClass.id,
      p_student_id: currentUser.id,
    });
    setHasAttended(data);
  };

  useEffect(() => {
    if (currentClass) {
      fetchAttendance();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentClass, currentUser]);

  const onClick = async () => {
    const response = await supabase.rpc("check_and_insert_attendance", {
      p_student_id: currentUser.id,
      p_routine_id: currentClass.id,
    });

    if (response.data) {
      success({
        message: "Attendance marked",
        onCloseComplete: () => {
          fetchAttendance();
        },
      });
    }

    if (response.error) {
      toastError({
        message: response.error.message,
      });
    }
  };
  if (error) {
    return <Alert status="error">{error}</Alert>;
  }

  if (isLoading || !currentClass) {
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
        {hasAttended ? (
          <>
            <Text fontSize="40" fontWeight="bold">
              You are currently attending the {currentClass.subject_name} class
            </Text>
            <Text width="full" fontSize="32">
              The class will end on {currentClass.formatted_ed_time}
            </Text>
          </>
        ) : (
          <>
            <Text size="lg" fontSize="32">
              Current Class
            </Text>
            <Text fontSize="40" fontWeight="bold">
              ( {currentClass.subject_name} )
            </Text>

            <Text width="full" fontSize="32">
              Start Time: {currentClass.formatted_st_time}
            </Text>
            <Text width="full" fontSize="32">
              End Time: {currentClass.formatted_ed_time}
            </Text>

            <Button
              width="2xs"
              colorScheme="pink"
              marginTop="10"
              onClick={onClick}
            >
              Attend
            </Button>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default AttendanceForm;
