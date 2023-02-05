import React from "react";
import Loader from "../../components/Loader";
import { Flex } from "@chakra-ui/react";
import useGetStudents from "../../hooks/useGetStudents";
import TableData from "../../components/TableData/TableData";

const Students = () => {
  const headers = ["name", "created"];
  const { students, error } = useGetStudents();
  const data = [
    { name: "Daggy", created: "7 days ago" },
    { name: "Anubra", created: "23 hours ago" },
    { name: "Josef", created: "A few seconds ago" },
    { name: "Sage", created: "A few hours ago" },
  ];

  if (!students) return <Loader />;

  if (error) return <h1>Error Occured</h1>;

  return (
    <Flex w="full" _dark={{ bg: "#3e3e3e" }} p={50} justifyContent="center">
      <TableData headers={headers} rows={data} />
    </Flex>
  );
};

export default Students;
