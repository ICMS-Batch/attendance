import React from "react";
import Loader from "../../components/Loader";
import { Flex } from "@chakra-ui/react";
import TableData from "../../components/TableData/TableData";
import useGetAttendances from "../../hooks/useGetAttendances";

const Attendances = () => {
  const headers = ["student_name", "subject_name", "recorded_time", "weekday"];
  const { attendances, error } = useGetAttendances();

  if (!attendances) return <Loader />;

  if (error) return <h1>Error Occured</h1>;

  return (
    <Flex w="full" _dark={{ bg: "#3e3e3e" }} p={50} justifyContent="center">
      <TableData headers={headers} rows={attendances} />
    </Flex>
  );
};

export default Attendances;
