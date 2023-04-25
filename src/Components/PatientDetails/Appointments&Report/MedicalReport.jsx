import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Report } from "../../../assets";

function MedicalReport() {
  return (
    <HStack
      spacing="4"
      align={"flex-start"}
      bg="white"
      borderRadius={"8px"}
      p="10px"
    >
      <Box>
        <Report />
      </Box>

      <Stack>
        <Text color="mediumGray"> تخطيط قلب </Text>
        <Text fontSize={"lg"}>
          عدم انتظام ضربات القلب هو حالة يكون فيها القلب غير قادر على ضخ الدم
          إلى الجسم بكفاءة. تشمل أعراض عدم انتظام ضربات القلب ما يلي: ترفرف في
          الصدر ضربات القلب بطء ضربات القلب ألم صدر التعرق
        </Text>
      </Stack>
    </HStack>
  );
}

export default MedicalReport;
