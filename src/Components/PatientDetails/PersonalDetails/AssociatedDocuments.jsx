import { HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { DocumentIcon, DocumentIcon2 } from "../../../assets";

function AssociatedDocuments() {
  const documents = [
    {
      title: "أشعة",
      url: "",
    },
    {
      title: "نتائج التحليل",
      url: "",
    },
    {
      title: "نتائج أشعة سن العقل",
      url: "",
    },
    {
      title: "نتائج السونار",
      url: "",
    },
  ];
  return (
    <Stack fontSize={"lg"}>
      <HStack>
        <DocumentIcon />
        <Text>الملفات المرفقة</Text>
      </HStack>
      <Stack
        borderRadius={"12px"}
        border="1px solid"
        p="12px"
        borderColor={"stroke"}
      >
        {documents.map((document) => (
          <HStack key={document.title} align="center">
            <DocumentIcon2 />
            <Text>{document.title}.pdf</Text>
          </HStack>
        ))}
      </Stack>
    </Stack>
  );
}

export default AssociatedDocuments;
