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
import React, { useEffect, useMemo } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { TableCheckbox } from "./TableCheckbox";
import CardMenu from "./CardMenu";
import Alert from "../Shared/Alert";
import { useDispatch } from "react-redux";
import { deletePatient } from "../../store/slices/patientsSlice";
import PatientFormModal from "./PatientFormModal";
const columnsData = [
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
    Cell: ({ cell }) => {
      return (
        <HStack textAlign={"center"}>
          <Box>
            <CardMenu patient={cell.row.original} />
          </Box>
        </HStack>
      );
    },
  },
];

export default function PatientsTable({ patients }) {
  //   const patients = useSelector((state) => state.patients.patients);
  const dispatch = useDispatch();

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => patients, [patients]);
  useEffect(() => {}, []);
  function onDeletePatients(patientsIds) {
    patientsIds.map((id) => dispatch(deletePatient(id)));
  }
  const tableInstance = useTable(
    {
      columns,
      data,
    },

    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps, selectedFlatRows }) => (
            <HStack position="relative" py="2" align="center" spacing="6">
              <TableCheckbox {...getToggleAllRowsSelectedProps()} />
              {selectedFlatRows.length > 0 && (
                <HStack
                  spacing="4"
                  fontFamily={"dinMedium"}
                  fontWeight={"400"}
                  fontSize={"lg"}
                  color="textColor"
                  position="absolute"
                  w="25rem"
                >
                  <Text fontFamily={"din"}>
                    {selectedFlatRows.length} عناصر محددة
                  </Text>
                  <Alert
                    btnVariant={""}
                    onConfirm={() =>
                      onDeletePatients(
                        selectedFlatRows.map((p) => p.original.id)
                      )
                    }
                    body={"هل أنت متأكد من حذف المراجع؟"}
                    header="حذف المراجع"
                  />
                  {selectedFlatRows.length === 1 && (
                    <PatientFormModal
                      btnVariant={"edit"}
                      patient={selectedFlatRows[0].original}
                    />
                  )}
                </HStack>
              )}
            </HStack>
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
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
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
      maxH="68vh"
      overflowX={{ base: "scroll", lg: "hidden" }}
      boxShadow={"softShadow"}
    >
      <Table
        fontFamily={"din"}
        {...getTableProps()}
        bg="white"
        variant="simple"
        mb="24px"
        color="#4A5568"
      >
        <Thead borderBottom={"1px solid"} borderColor={borderColor}>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) =>
                selectedFlatRows.length > 0
                  ? column.id === "selection" && (
                      <Th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        //   pe="10px"
                        key={index}
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
                  : column.Header !== "settings" && (
                      <Th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        //   pe="10px"
                        key={index}
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
              <Tr
                bg={row.isSelected ? "veryLightGray" : "white"}
                _hover={{
                  bg: "veryLightGray",
                }}
                {...row.getRowProps()}
                key={index}
              >
                {row.cells.map((cell, index) => {
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: "14px" }}
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor="transparent"
                      borderRight={
                        cell.row.isSelected &&
                        cell.column.id === "selection" &&
                        "5px solid"
                      }
                      borderRightColor={
                        cell.row.isSelected &&
                        cell.column.id === "selection" &&
                        "primary"
                      }
                    >
                      <Text fontSize={"16px"}>{cell.render("Cell")}</Text>
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
