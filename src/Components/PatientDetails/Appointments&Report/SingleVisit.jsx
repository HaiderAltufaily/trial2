import { Avatar, Box, Collapse, HStack, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Calender } from "../../../assets";
import SingleAppointment from "./SingleAppointment";
import SingleSession from "./SingleSession";
function SingleVisit() {
  const [showAppointmentDetails, setShowAppointmentDetails] = useState(false);
  return (
    <Stack
      border="1px solid"
      borderColor={"stroke"}
      spacing="18px"
      p="16px"
      boxShadow={"softShadow"}
      bg="white"
    >
      <HStack
        cursor={"pointer"}
        onClick={() => setShowAppointmentDetails((prev) => !prev)}
        justify={"space-between"}
      >
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
          transform={!showAppointmentDetails && "rotate(180deg)"}
          justifySelf={"flex-end"}
          transition={"0.3s ease-in-out"}
        />
      </HStack>
      <Collapse in={showAppointmentDetails}>
        <Stack>
          <SingleAppointment />
          <SingleSession />
        </Stack>
      </Collapse>
    </Stack>
  );
}

export default SingleVisit;
