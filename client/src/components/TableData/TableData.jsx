import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const TableData = ({ headers, rows }) => {
  const color1 = useColorModeValue("gray.400", "gray.400");
  return (
    <Table
      w="full"
      bg="white"
      _dark={{ bg: "gray.800" }}
      display={{
        base: "block",
        md: "table",
      }}
      sx={{
        "@media print": {
          display: "table",
        },
      }}
    >
      <Thead
        display={{
          base: "none",
          md: "table-header-group",
        }}
        sx={{
          "@media print": {
            display: "table-header-group",
          },
        }}
      >
        <Tr>
          {headers.map((x) => (
            <Th key={x}>{x}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody
        display={{
          base: "block",
          lg: "table-row-group",
        }}
        sx={{
          "@media print": {
            display: "table-row-group",
          },
        }}
      >
        {rows.map((token, tid) => {
          return (
            <Tr
              key={tid}
              display={{
                base: "grid",
                md: "table-row",
              }}
              sx={{
                "@media print": {
                  display: "table-row",
                },
                gridTemplateColumns: "minmax(0px, 35%) minmax(0px, 65%)",
                gridGap: "10px",
              }}
            >
              {Object.keys(token).map((x) => {
                return (
                  <React.Fragment key={`${tid}${x}`}>
                    <Td
                      display={{
                        base: "table-cell",
                        md: "none",
                      }}
                      sx={{
                        "@media print": {
                          display: "none",
                        },
                        textTransform: "uppercase",
                        color: color1,
                        fontSize: "xs",
                        fontWeight: "bold",
                        letterSpacing: "wider",
                        fontFamily: "heading",
                      }}
                    >
                      {x}
                    </Td>
                    <Td color={"gray.500"} fontSize="md" fontWeight="hairline">
                      {token[x]}
                    </Td>
                  </React.Fragment>
                );
              })}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
export default TableData;
