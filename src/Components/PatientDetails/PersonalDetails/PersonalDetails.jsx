import React from "react";
import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";

function PersonalDetails({ name, address, phoneNumber, gender, imageUrl }) {
  const details = [
    {
      title: "العنوان",
      content: address,
    },
    {
      title: "الجنس",
      content: gender,
    },
    {
      title: "تاريخ الميلاد",
      content: "1992/7/2",
    },
    {
      title: "الملاحظات",
      content: "لاتوجد",
    },
  ];
  return (
    <Stack fontSize={"lg"}>
      <HStack align={"center"}>
        <Avatar
          src={imageUrl}
          bg="        "
          name="نور محمد"
          color="white"
          boxSize={"120px"}
          borderRadius={"38px"}
        />
        <Stack>
          <Text fontWeight={"normal"} fontSize={"lg"}>
            {" "}
            {name}{" "}
          </Text>
          <Text dir="ltr" color="lightText">
            +964 {phoneNumber}
          </Text>
        </Stack>
      </HStack>
      <HStack fontSize={"lg"}>
        <Stack spacing="8px">
          {details.map((detail) => (
            <Stack key={detail.title}>
              <Text color="lightText">{detail.title}:</Text>
            </Stack>
          ))}
        </Stack>
        <Stack>
          {details.map((detail) => (
            <Stack key={detail.title}>
              <Text> {detail.content} </Text>
            </Stack>
          ))}
        </Stack>
      </HStack>
    </Stack>
  );
}

export default PersonalDetails;
