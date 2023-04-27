import {
  Avatar,
  Box,
  HStack,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import CardMenu from "./CardMenu";
import { Link } from "react-router-dom";

function PatientCard({
  name,
  phoneNumber,
  address,
  gender,
  imageUrl,
  birthdate,
  id,
}) {
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
      //temporary
      content: birthdate || "1992/7/2",
    },
    {
      title: "الملاحظات",
      content: "لاتوجد",
    },
  ];
  return (
    <LinkBox
      as={Stack}
      borderRadius={"12px"}
      p="16px"
      bg="white "
      boxShadow={"card"}
      spacing="8px"
      position={"relative"}
      _hover={{
        bg: "veryLightGray",
        border: "1px solid stroke",
      }}
    >
      <HStack align={"flex-start"} justify={"space-between"}>
        <HStack align={"center"}>
          <Avatar
            src={imageUrl}
            bg="primary "
            name={name}
            color="white"
            boxSize={"70px"}
            borderRadius={"28px"}
          />

          <Stack>
            <LinkOverlay as={Link} to={`/patients/${id}`}>
              {" "}
              <Text color="#4A5568" fontFamily={"dinMedium"} fontSize={"lg"}>
                {" "}
                {name}{" "}
              </Text>
            </LinkOverlay>
            <Text dir="ltr" color="lightText">
              +964 {phoneNumber}
            </Text>
          </Stack>
        </HStack>
        <Box top="0" left="3" position={"absolute"}>
          <CardMenu
            patient={{
              name,
              address,
              phoneNumber,
              gender,
              imageUrl,
              birthdate,
              id,
            }}
          />
        </Box>
      </HStack>

      <HStack>
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
    </LinkBox>
  );
}

export default PatientCard;
