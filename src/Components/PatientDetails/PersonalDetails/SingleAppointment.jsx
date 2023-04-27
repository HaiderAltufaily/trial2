import { Circle, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

function SingleAppointment() {
  return (
    <HStack
      w="100%"
      border="1px solid #F5F7FF"
      px="12px"
      borderRadius={"12px"}
      py="2px"
      align="center"
    >
      <Circle size={"15px"} bg="#8FDC7C" />
      <Stack spacing="0">
        <Text>حجز</Text>
        <Text>December 1 , 2021 </Text>
      </Stack>
    </HStack>
  );
}

export default SingleAppointment;
