import React from "react";
import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";
import SingleAppointment from "./SingleAppointment";
import { Appointment2 } from "../../../assets";
function NextAppointment() {
  const appointments = Array.from({ length: 5 });
  return (
    <Stack fontSize={"lg"}>
      <HStack>
        <Appointment2 />
        <Text>الحجوزات القادمة</Text>
      </HStack>
      <Stack>
        {appointments.map((a, i) => (
          <SingleAppointment key={i} />
        ))}
      </Stack>
    </Stack>
  );
}

export default NextAppointment;
