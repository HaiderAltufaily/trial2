import {
  Collapse,
  Divider,
  HStack,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Calender2, Edit, Heart, Trash } from "../../../assets";
function SingleSession() {
  const [show, setShow] = useState(false);
  return (
    <Stack borderRadius={"md"} py="8px" px="10px" bg="#F5F7FF">
      <HStack
        cursor="pointer"
        align="center"
        onClick={() => setShow((prev) => !prev)}
      >
        <Stack
          boxSize={"40px"}
          borderRadius={"16px"}
          bg="primaryLight"
          align="center"
          justify={"center"}
        >
          <Heart />
        </Stack>
        <Stack spacing="0">
          <Text fontSize={"lg"} color="primary">
            الجلسة{" "}
          </Text>
          {show ? (
            <Text fontSize={"lg"}>حشوة مؤقتة</Text>
          ) : (
            <Text>December 1 , 2021 </Text>
          )}
        </Stack>
      </HStack>

      <Collapse in={show}>
        <Divider />
        <Stack>
          <HStack py="8px" px="10px" spacing="16">
            <Stack spacing="0">
              <Text color="lightText">التاريخ المقترح للجلسات</Text>
              <Text fontSize={"lg"}>January 29, 2023</Text>
            </Stack>
            <Stack spacing="0">
              <Text color="lightText">سعر الجلسة </Text>
              <Text fontSize={"lg"}>100$</Text>
            </Stack>
          </HStack>
          <HStack justify={"flex-end"} align="center">
            <IconButton
              bg="white"
              borderRadius={"16px"}
              stroke="mediumGray"
              icon={<Edit stroke="" />}
            />
            <IconButton
              bg="white"
              borderRadius={"16px"}
              color="red"
              fill={"mediumGray"}
              icon={<Trash fill="" />}
            />
          </HStack>
        </Stack>
      </Collapse>
    </Stack>
  );
}

export default SingleSession;
