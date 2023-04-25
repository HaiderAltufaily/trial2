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
import { ThreeDots } from "../../assets";
import CardMenu from "./CardMenu";
import { Link } from "react-router-dom";

function PatientCard({
  name,
  phoneNumber,
  address,
  gender,
  imageUrl,
  birthDay,
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
      content: birthDay || "1992/7/2",
    },
    {
      title: "الملاحظات",
      content: "لاتوجد",
    },
  ];
  return (
    <LinkBox
      as={Stack}
      borderRadius={"md"}
      p="16px"
      bg="white "
      border="1px solid #EFF2FA"
      boxShadow={"card"}
      spacing="8px"
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
              <Text fontFamily={"dinMedium"} fontSize={"lg"}>
                {" "}
                {name}{" "}
              </Text>
            </LinkOverlay>
            <Text dir="ltr" color="lightText">
              +964 {phoneNumber}
            </Text>
          </Stack>
        </HStack>
        <CardMenu />
      </HStack>

      <HStack>
        <Stack spacing="8px">
          {details.map((detail) => (
            <Stack key={detail.title}>
              <Text color="lightText">{detail.title}:</Text>
              {/* <Text> {detail.content} </Text> */}
            </Stack>
          ))}
        </Stack>
        <Stack>
          {details.map((detail) => (
            <Stack key={detail.title}>
              {/* <Text color="lightText">{detail.title}:</Text> */}
              <Text> {detail.content} </Text>
            </Stack>
          ))}
        </Stack>
      </HStack>
    </LinkBox>
  );
}

export default PatientCard;
