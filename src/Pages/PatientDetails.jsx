import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import MainPatientDetails from "../Components/PatientDetails/PersonalDetails/MainPatientDetails";
import AppointmentReport from "../Components/PatientDetails/Appointments&Report";

function PatientDetails() {
  return (
    <HStack flexBasis={"58%"} align="start">
      <MainPatientDetails />
      <AppointmentReport />
    </HStack>
  );
}

export default PatientDetails;
