import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
  Stack,
} from "@chakra-ui/react";
import SingleVisit from "./SingleVisit";
import MedicalReport from "./MedicalReport";

function AppointmentReport() {
  return (
    <Tabs flexGrow={1} size={"sm"} variant={"unstyled"} colorScheme="blue">
      <TabList color="primary" fontWeight={"medium"}>
        <HStack>
          <Tab
            boxShadow={"sm"}
            bg="white"
            borderRadius={"lg"}
            fontSize={"lg"}
            _selected={{ bg: "primary", color: "white" }}
          >
            المراجعات السابقة
          </Tab>
          <Tab
            boxShadow={"sm"}
            bg="white"
            borderRadius={"lg"}
            fontSize={"lg"}
            _selected={{ bg: "primary", color: "white" }}
          >
            التقرير الصحي
          </Tab>
        </HStack>
      </TabList>
      <TabPanels>
        <TabPanel px="0">
          <Stack>
            <SingleVisit />
            <SingleVisit />
            <SingleVisit />
            <SingleVisit />
            <SingleVisit />
            <SingleVisit />
          </Stack>
        </TabPanel>
        <TabPanel px="0">
          <Stack spacing="4">
            <MedicalReport />
            <MedicalReport />
            <MedicalReport />
          </Stack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default AppointmentReport;
