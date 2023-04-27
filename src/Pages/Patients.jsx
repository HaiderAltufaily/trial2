import React, { useCallback, useEffect, useState } from "react";
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
import { GridIcon, ListIcon, Search } from "../assets";
import {
  Outlet,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import PatientFormModal from "../Components/Patients/PatientFormModal";
import PatientsTable from "../Components/Patients/PatientsTable";
import { useSelector } from "react-redux";
import { debounce } from "lodash";
import SortMenu from "../Components/Patients/SortMenu";
import AdvancedFilter from "../Components/Patients/AdvancedFilter";
import moment from "moment/moment";
function Patients() {
  const [showTable, setShowTable] = useState(false);
  const { id } = useParams();
  const patients = useSelector((state) => state.patients.patients);
  const navigate = useNavigate();
  const [searchedPatients, setSearchedPatients] = useState([]);
  const [searchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState("");

  const searchedName = searchParams.get("name");
  const searchedGender = searchParams.get("gender");
  const searchedMinAge = searchParams.get("minAge");
  const searchedMaxAge = searchParams.get("maxAge");

  useEffect(() => {
    setSearchValue(searchedName || "");
  }, [searchedName]);

  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
    debounceSearch(e.target.value);
  };
  useEffect(() => {
    let filteredPatients = patients;

    if (searchedName) {
      filteredPatients = filteredPatients.filter((p) =>
        p.name.toLowerCase().includes(searchedName.toLowerCase())
      );
    }

    if (searchedGender && searchedGender !== "غير محدد") {
      filteredPatients = filteredPatients.filter(
        (p) => p.gender === searchedGender
      );
    }

    if (searchedMinAge) {
      filteredPatients = filteredPatients.filter((p) => {
        return moment().diff(p.birthdate, "years") >= searchedMinAge;
      });
    }

    if (searchedMaxAge) {
      filteredPatients = filteredPatients.filter(
        (p) => moment().diff(p.birthdate, "years") <= searchedMaxAge
      );
    }

    setSearchedPatients(filteredPatients);
  }, [searchedName, searchedGender, searchedMinAge, searchedMaxAge, patients]);

  const debounceSearch = useCallback(
    debounce((value) => {
      if (value.length > 1) {
        navigate({
          pathname: "/patients",
          search: `?name=${value}`,
        });
      } else if (value.length <= 1) {
        navigate("/patients");
      }
    }, 600),
    []
  );
  return (
    <Stack spacing="0" px="22px">
      <HStack mb="18px" mt="24px" align="center ">
        <InputGroup
          border="1px solid #EFF4F8"
          size="lg"
          borderRadius={"12px"}
          boxShadow={"sm"}
          dir="ltr"
          maxW="400px"
        >
          <Input
            onChange={handleSearch}
            value={searchValue}
            placeholder="بحث"
            textAlign={"right"}
            bg="white"
          />
          <InputRightElement children={<Search />} />
        </InputGroup>
        <AdvancedFilter />
        <SortMenu />
      </HStack>

      <Flex
        flexDir={{ base: "column", lg: "row" }}
        align={"flex-start"}
        overflow={{ sm: "auto", lg: "hidden" }}
      >
        <Stack ml="3" overflow={"auto"} flexGrow={"1"}>
          {showTable ? (
            <PatientsTable patients={searchedPatients} />
          ) : (
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: id ? 2 : 3, "2xl": id ? 2 : 4 }}
              gap="20px"
              pl="3"
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
              {searchedPatients.map((p) => (
                <PatientCard key={p.id} {...p} />
              ))}
            </SimpleGrid>
          )}

          <HStack py="8px" align="center" justify={"end"}>
            <PatientFormModal />
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
