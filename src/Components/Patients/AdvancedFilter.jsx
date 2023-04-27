import React, { useState } from "react";
import {
  Center,
  Text,
  Select,
  Input,
  Grid,
  GridItem,
  PopoverBody,
  FormControl,
  Divider,
  Button,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderMark,
  Tooltip,
  RadioGroup,
  Radio,
  Popover,
  PopoverContent,
  PopoverArrow,
  PopoverTrigger,
  HStack,
  IconButton,
  PopoverCloseButton,
  useDisclosure,
  CloseButton,
} from "@chakra-ui/react";
import { FilterIcon } from "../../assets";
import { createSearchParams, useNavigate } from "react-router-dom";
function AdvancedFilter() {
  const [filterData, setFilterData] = useState({
    minAge: 1,
    maxAge: 100,
    minDate: "",
    maxDate: "",
    gender: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  function handleInputChange(e) {
    setFilterData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleFilterSubmit(e) {
    e.preventDefault();
    const newFilterParams = Object.fromEntries(
      Object.entries(filterData).filter(([_, v]) => v !== "")
    );

    navigate({
      pathname: "/patients",
      search: `?${createSearchParams(newFilterParams)}`,
    });
    onClose();
  }
  function handleCancelFilters() {
    navigate({
      pathname: "/patients",
    });
    onClose();
  }
  return (
    <Popover isOpen={isOpen} onClose={onClose} onOpen={onOpen} size="xl">
      <PopoverTrigger>
        <IconButton
          onClick={onOpen}
          boxSize={"48px"}
          borderRadius={"16px"}
          size="lg"
          variant={"secondary"}
          icon={<FilterIcon />}
        />
      </PopoverTrigger>
      <PopoverContent
        mx="10px"
        _focus={{ boxShadow: "lg" }}
        boxShadow="lg"
        width={{ base: "27rem", sm: "35rem", md: "40rem", lg: "40rem" }}
      >
        <CloseButton
          onClick={onClose}
          position="absolute"
          top="2px"
          left="2px"
        />

        <PopoverArrow />

        <PopoverBody>
          <form onSubmit={handleFilterSubmit} id="country">
            <Text mt={4} fontSize={"lg"} fontWeight={"500"}>
              العمر
            </Text>
            <Divider mb="4" mt="2" />

            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(6, 1fr)" }}
              gap={{ base: 0, md: 4 }}
              mb={4}
            >
              <GridItem colSpan={1} h="10">
                <Text py={2}>من</Text>
              </GridItem>
              <GridItem colSpan={2} h="10">
                <FormControl>
                  <Select
                    onChange={handleInputChange}
                    cursor="pointer"
                    textAlign={"center"}
                    maxW="400px"
                    name="minAge"
                    overflow={"auto"}
                    value={filterData.minAge}
                    maxH="10rem"
                  >
                    {Array.from({ length: 100 }).map((u, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1} سنة
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1} h="10">
                <Center display={{ base: "none", md: "flex" }}>
                  <Text py={2}>الى</Text>
                </Center>
              </GridItem>

              <GridItem colSpan={2} h="10">
                <FormControl>
                  <Select
                    value={filterData.maxAge}
                    onChange={handleInputChange}
                    cursor="pointer"
                    textAlign={"center"}
                    maxW="400px"
                    name="maxAge"
                  >
                    {Array.from({ length: 100 }).map((u, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1} سنة
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </GridItem>
            </Grid>

            <Text mt={8} fontSize={"lg"} fontWeight={"500"}>
              تاريخ الزيارة
            </Text>
            <Divider mb="4" mt="2" />
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(6, 1fr)" }}
              gap={{ base: 0, md: 4 }}
              mb={4}
            >
              <GridItem colSpan={1} h="10">
                <Text py={2}>من</Text>
              </GridItem>
              <GridItem colSpan={2} h="10">
                <FormControl>
                  <Input
                    value={filterData.minDate}
                    onChange={handleInputChange}
                    type="date"
                    maxW="400px"
                    name="minDate"
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1} h="10">
                <Center display={{ base: "none", md: "flex" }}>
                  <Text py={2}>الى</Text>
                </Center>
              </GridItem>

              <GridItem colSpan={2} h="10">
                <FormControl>
                  <Input
                    value={filterData.maxDate}
                    onChange={handleInputChange}
                    type="date"
                    maxW="400px"
                    name="maxDate"
                  />
                </FormControl>
              </GridItem>
            </Grid>
            <Text mt={8} fontSize={"lg"} fontWeight={"500"}>
              الجنس
            </Text>
            <Divider mb="4" mt="2" />

            <FormControl>
              <RadioGroup
                onChange={(e) =>
                  setFilterData((prev) => ({ ...prev, gender: e }))
                }
                value={filterData.gender}
                name="gender"
              >
                <HStack spacing="8">
                  <Radio value="غير محدد">غير محدد</Radio>
                  <Radio value="ذكر">ذكر</Radio>
                  <Radio value="أنثى">أنثى</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
            <HStack justify="end">
              <Button
                onClick={handleCancelFilters}
                fontSize={"lg"}
                fontWeight={"500"}
                rounded="5px"
                px={6}
                py={4}
                size="md"
                variant="outline"
              >
                الغاء
              </Button>
              <Button
                type="submit"
                fontSize={"lg"}
                fontWeight={"500"}
                variant={"primary"}
                rounded="5px"
                px={6}
                py={4}
                size="md"
              >
                بحث
              </Button>
            </HStack>
          </form>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default AdvancedFilter;
