import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Arrow, DoubleArrow, Stethoscope } from "../../assets";

function Header() {
  return (
    <HStack
      w="100%"
      //   position="sticky"
      top="0"
      h="70px"
      align="center"
      bg="white"
      px="16px"
      fontSize={"lg"}
      spacing="27px"
    >
      <DoubleArrow />
      <HStack spacing="9px">
        <Stethoscope stroke="#7B61FF" fill="#7B61FF" />
        <Text color="lightText">الطبيب</Text>
        <Arrow />
        <Text>المراجعين</Text>
      </HStack>
    </HStack>
  );
}

export default Header;
