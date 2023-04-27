import React from "react";
import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";
import PersonalDetails from "./PersonalDetails";
import NextAppointment from "./NextAppointments";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AssociatedDocuments from "./AssociatedDocuments";
function MainPatientDetails() {
  const { id } = useParams();

  const patients = useSelector((state) => state.patients.patients);
  const currentPatient = patients.find((p) => p.id === +id);
  return (
    <Stack minW="38%" spacing="44px" mx="2" p="16px" bg="white">
      <PersonalDetails {...currentPatient} />
      <NextAppointment {...currentPatient} />
      <AssociatedDocuments />
    </Stack>
  );
}

export default MainPatientDetails;
