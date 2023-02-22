import React from "react";
import Loader from "../../components/Loader";
import { Flex } from "@chakra-ui/react";
import useGetStudents from "../../hooks/useGetStudents";
import TableData from "../../components/TableData/TableData";
import { createColumnHelper } from "@tanstack/react-table";

const Students = () => {
  const columnHelper = createColumnHelper();
  // const headers = ["name", "created"];
  const headers = [
    columnHelper.accessor("sn", {
      header: "S.N",
      isNumeric: true,
      cell: (cell) => cell.row.index + 1,
    }),
    columnHelper.accessor("student_name", {
      header: "Name",
      cell: (cell) => cell.getValue(),
    }),
  ];
  const { students, error } = useGetStudents();

  if (!students) return <Loader />;

  if (error) return <h1>Error Occured</h1>;

  return (
    <Flex w="full" bg="white" p={50} justifyContent="center">
      <TableData columns={headers} data={students} />
    </Flex>
  );
};

export default Students;
