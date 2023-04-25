import {
  Avatar,
  AvatarGroup,
  HStack,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Service, Trash } from "../../../assets";
import Status from "../../Shared/Status";

function SingleService() {
  return (
    <Stack borderRadius={"12px"} p="10px" bg="white">
      <HStack w="100%" justify={"space-between"}>
        <HStack justify>
          <Service />
          <Text fontSize={"lg"}>حشوة جذر</Text>
        </HStack>
        <AvatarGroup>
          <Avatar
            boxSize={"35px"}
            borderRadius={"14px"}
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
          />
          <Avatar
            boxSize={"35px"}
            borderRadius={"14px"}
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
          />
          <Avatar
            boxSize={"35px"}
            borderRadius={"14px"}
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
          />
        </AvatarGroup>
      </HStack>
      <HStack justify={"space-between"}>
        <Stack>
          <Text color="lightText">سعر الخدمة</Text>
          <Text fontSize={"lg"}>100$</Text>
        </Stack>
        <HStack align="center">
          <IconButton
            bg="veryLightGray"
            borderRadius={"16px"}
            color="red"
            fill={"mediumGray"}
            icon={<Trash fill="" />}
          />
          <Status type={"uncompleted"} />
        </HStack>
      </HStack>
    </Stack>
  );
}

export default SingleService;
