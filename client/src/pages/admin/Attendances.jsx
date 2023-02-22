import React from "react";
import Loader from "../../components/Loader";
import { Flex } from "@chakra-ui/react";
import TableData from "../../components/TableData/TableData";
import useGetAttendances from "../../hooks/useGetAttendances";
import { createColumnHelper } from "@tanstack/react-table";

const Attendances = () => {
  const columnHelper = createColumnHelper();

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
    columnHelper.accessor("subject_name", {
      header: "Subject",
      cell: (cell) => cell.getValue(),
    }),
    columnHelper.accessor("recorded_time", {
      header: "Recorded Time",
      cell: (cell) => cell.getValue(),
    }),
    columnHelper.accessor("day", {
      header: "Day",
      cell: (cell) => cell.getValue(),
    }),
  ];

  const { attendances, error } = useGetAttendances();

  if (!attendances.length) return <Loader />;

  if (error) return <h1>Error Occured</h1>;

  return (
    <Flex w="full" bg="white" p={50} justifyContent="center">
      <TableData columns={headers} data={attendances} />
    </Flex>
  );
};

export default Attendances;
