import {
  Flex,
  Table,
  Checkbox,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Avatar,
  HStack,
  Stack,
  Box,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from "react-table";
import { TableCheckbox } from "./TableCheckbox";
import CardMenu from "./CardMenu";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const columnsData = [
  //   {
  //     Header: "ت",
  //     accessor: (d, i) => <div>{i + 1}</div>,
  //   },
  {
    Header: "اسم المراجع",
    accessor: "name",
    Cell: ({ row }) => (
      <HStack align="center">
        <Text ml="4" fontSize="16px">
          {row.index + 1}{" "}
        </Text>
        <HStack align="center">
          <Avatar
            boxSize={"45px"}
            borderRadius={"18px"}
            src={row.original.imageUrl}
          />
          <Stack spacing="1">
            <Text fontSize="16px">{row.original.name}</Text>
            <Text fontSize="16px" color="lightText">
              {" "}
              {row.original.phoneNumber}{" "}
            </Text>
          </Stack>
        </HStack>
      </HStack>
    ),
  },
  {
    Header: "الرقم",
    accessor: "phoneNumber",
  },
  {
    Header: "العنوان",
    accessor: "address",
  },
  {
    Header: "الجنس",
    accessor: "gender",
  },
  {
    Header: "settings",
    Cell: () => (
      <HStack textAlign={"center"}>
        <Box>
          <CardMenu />
        </Box>
      </HStack>
    ),
  },
];

export default function PatientsTable(props) {
  const patients = useSelector((state) => state.patients.patients);

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => patients, [patients]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <TableCheckbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => (
            <TableCheckbox
              isChecked={row.isSelected}
              {...row.getToggleRowSelectedProps()}
            />
          ),
        },
        ...columns,
      ]);
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
    selectedFlatRows,
  } = tableInstance;
  initialState.pageSize = 12;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  const navigate = useNavigate();
  return (
    <Flex
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#c9c9c9",
          borderRadius: "24px",
        },
      }}
      direction="column"
      w="100%"
      px="0px"
      overflowX="scroll"
      boxShadow={"softShadow"}
    >
      {/* <Flex px="25px" justify="space-between" mb="20px" align="center">
        <Text fontSize="22px" lineHeight="100%">
          Check Table
        </Text>
        {/* <Menu /> */}
      {/* </Flex> */}
      <Table
        fontFamily={"dinMedium"}
        {...getTableProps()}
        bg="white"
        variant="simple"
        mb="24px"
        color="#4A5568"
      >
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map(
                (column, index) =>
                  column.Header !== "settings" && (
                    <Th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      pe="10px"
                      key={index}
                      borderColor={borderColor}
                    >
                      <Flex
                        justify="space-between"
                        align="center"
                        color="lightText"
                        fontSize={{ sm: "10px", lg: "14px" }}
                      >
                        {column.render("Header")}
                      </Flex>
                    </Th>
                  )
              )}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);

            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => {
                  let data = "";
                  if (cell.column.id === "selection") {
                    data = cell.render("Cell");
                  }
                  if (cell.column.Header === "ت") {
                    data = cell.render("Cell");
                  }
                  if (cell.column.Header === "اسم المراجع") {
                    data = (
                      <Flex align="center">
                        {/* <Checkbox
                          defaultChecked={cell.value[1]}
                          //   colorScheme="brandScheme"
                        //   me="10px"
                        /> */}
                        {cell.render("Cell")}
                      </Flex>
                    );
                  } else if (cell.column.Header === "الرقم") {
                    data = (
                      //   <Flex align="flex-start">
                      <Text
                        fontSize="16px"
                        // me="10px"
                      >
                        {cell.value}
                      </Text>
                      //   </Flex>
                    );
                  } else if (cell.column.Header === "العنوان") {
                    data = <Text fontSize={"16px"}>{cell.value}</Text>;
                  } else if (cell.column.Header === "الجنس") {
                    data = <Text fontSize={"16px"}>{cell.value}</Text>;
                  }
                  if (cell.column.Header === "settings") {
                    data = cell.render("Cell");
                  }
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      bg={cell.row.isSelected ? "lightPurple" : "white"}
                      fontSize={{ sm: "14px" }}
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor="transparent"
                    >
                      {data}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Flex>
  );
}
