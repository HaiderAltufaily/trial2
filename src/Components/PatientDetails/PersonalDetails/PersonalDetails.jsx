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
    <Stack>
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
      <Stack spacing="8px">
        {details.map((detail) => (
          <HStack key={detail.title}>
            <Text color="lightText">{detail.title}:</Text>
            <Text> {detail.content} </Text>
          </HStack>
        ))}
      </Stack>
    </Stack>
  );
}

export default PersonalDetails;
