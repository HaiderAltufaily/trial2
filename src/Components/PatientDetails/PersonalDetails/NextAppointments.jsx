import React from "react";
import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";
import SingleAppointment from "./SingleAppointment";
import { Appointment2 } from "../../../assets";
function NextAppointment() {
  const appointments = [1, 2, 3, 4, 5];
  return (
    <Stack fontSize={"lg"}>
      <HStack>
        <Appointment2 />
        <Text>الحجوزات القادمة</Text>
      </HStack>
      <Stack>
        {appointments.map((a) => (
          <SingleAppointment key={a} />
        ))}
      </Stack>
    </Stack>
  );
}

export default NextAppointment;
