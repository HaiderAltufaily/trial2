import {
  Collapse,
  Divider,
  HStack,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Calender2 } from "../../../assets";
import SingleService from "./SingleService";

function SingleAppointment() {
  const [showAppointment, setShowAppointment] = useState(false);
  return (
    <Stack borderRadius={"md"} py="8px" px="10px" bg="#F5F7FF">
      <HStack
        onClick={() => setShowAppointment((prev) => !prev)}
        align="center"
        cursor={"pointer"}
      >
        <Stack
          boxSize={"40px"}
          borderRadius={"16px"}
          bg="primaryLight"
          align="center"
          justify={"center"}
        >
          <Calender2 fill="#7B61FF" />
        </Stack>
        <Stack spacing="0">
          <Text fontSize={"lg"} color="primary">
            تاريخ الحجز
          </Text>
          <Text>December 1 , 2021 </Text>
        </Stack>
      </HStack>
      <Collapse in={showAppointment}>
        <Divider />
        <Stack>
          <HStack py="8px" px="10px" spacing="16">
            <Stack spacing="0">
              <Text color="lightText">الطابور</Text>
              <Text fontSize={"lg"}>طابور 1</Text>
            </Stack>
            <Stack spacing="0">
              <Text color="lightText">سرقم الحجز </Text>
              <Text fontSize={"lg"}>14</Text>
            </Stack>
          </HStack>
          <Stack>
            <SingleService />
            <SingleService />
            <SingleService />
            <SingleService />
          </Stack>
        </Stack>
      </Collapse>
    </Stack>
  );
}

export default SingleAppointment;
