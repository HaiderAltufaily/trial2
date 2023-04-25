import React, { useState } from "react";
import PatientCard from "../Components/Patients/PatientCard";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { GridIcon, ListIcon, Plus, Search } from "../assets";
import { Outlet, useParams } from "react-router-dom";
import AddPatientModal from "../Components/Patients/AddPatientModal";
import PatientsTable from "../Components/Patients/PatientsTable";
import { useSelector } from "react-redux";

function Patients() {
  const [showTable, setShowTable] = useState(false);
  const { id } = useParams();
  const patients = useSelector((state) => state.patients.patients);

  return (
    <Stack spacing="0" px="22px">
      <InputGroup
        mb="18px"
        border="1px solid #EFF4F8"
        mt="24px"
        size="lg"
        boxShadow={"sm"}
        dir="ltr"
        maxW="400px"
      >
        <Input
          placeholder="بحث"
          textAlign={"right"}
          borderRadius={"12px"}
          bg="white"
        />
        <InputRightElement children={<Search />} />
      </InputGroup>

      <Flex
        flexDir={{ base: "column", lg: "row" }}
        // spacing="4"
        align={"flex-start"}
        overflow={{ sm: "auto", lg: "hidden" }}
      >
        <Stack ml="3" overflow={"auto"} flexGrow={"1"}>
          {showTable ? (
            <PatientsTable />
          ) : (
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: id ? 2 : 3, "2xl": id ? 2 : 4 }}
              gap="20px"
              flexGrow={1}
              maxH={"68vh"}
              overflow={"auto"}
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
            >
              {patients.map((p) => (
                <PatientCard key={p.id} {...p} />
              ))}
            </SimpleGrid>
          )}

          <HStack py="8px" align="center" justify={"end"}>
            <AddPatientModal />
            <HStack
              boxShadow={"sm"}
              py="4.5px"
              px="6px"
              borderRadius={"8px"}
              align="center"
              bg="white"
            >
              <IconButton
                p="0"
                onClick={() => setShowTable(false)}
                bg={!showTable && "lightPurple"}
                icon={
                  <Stack spacing="0">
                    <GridIcon />
                    <GridIcon />
                  </Stack>
                }
              />

              <IconButton
                onClick={() => setShowTable(true)}
                p="0"
                bg={showTable && "lightPurple"}
                icon={<ListIcon />}
              />
            </HStack>
          </HStack>
        </Stack>
        <Outlet />
      </Flex>
    </Stack>
  );
}

export default Patients;
