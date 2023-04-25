import { Avatar, Box, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Calender } from "../../../assets";
import SingleAppointment from "./SingleAppointment";
import SingleSession from "./SingleSession";

function PreviousAppointments() {
  return (
    <Stack spacing="18px" p="16px" bg="white">
      <HStack justify={"space-between"}>
        <HStack spacing={"8"}>
          <HStack align="center">
            <Calender />
            <Stack spacing="0">
              <Text color="lightText">تاريخ المراجعة</Text>
              <Text fontSize={"lg"}>December 1 , 2021 </Text>
            </Stack>
          </HStack>
          <HStack align={"center"}>
            <Avatar
              src={`https://randomuser.me/api/portraits/med/men/66.jpg`}
              name="نور محمد"
              color="white"
              boxSize={"45px"}
              borderRadius={"18px"}
            />
            <Stack spacing="0">
              <Text color="lightText"> الطبيب المعالج </Text>
              <Text fontSize={"lg"} dir="ltr">
                د.سارة احمد{" "}
              </Text>
            </Stack>
          </HStack>
        </HStack>
        <Box
          w="0"
          h="0"
          borderBottom="14px solid #ddd"
          borderLeft="11px solid transparent"
          borderRight="11px solid transparent"
          borderBottomLeftRadius="3px"
          borderBottomRightRadius="3px"
          transform="rotate(180deg)"
          justifySelf={"flex-end"}
        />
      </HStack>

      <Stack>
        <SingleAppointment />
        <SingleSession />
      </Stack>
    </Stack>
  );
}

export default PreviousAppointments;
