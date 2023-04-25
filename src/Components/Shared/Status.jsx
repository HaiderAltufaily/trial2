import { Box, Circle, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

function Status({ type }) {
  let circleColor;
  let text;

  if (type === "uncompleted") {
    circleColor = "red";
    text = "غير مكتملة";
  } else if (type === "completed") {
    circleColor = "green";
    text = "مكتملة";
  }
  return (
    <HStack
      w="91px"
      height={"40px"}
      spacing="1"
      align="center"
      justify={"center"}
      borderRadius={"12px"}
      bg="veryLightGray"
    >
      <Circle
        position={"relative"}
        bottom="-3px"
        boxSize={"12px"}
        bg={circleColor}
      />

      <Text fontSize={"sm"} fontFamily={"dinMedium"} color="mediumGray">
        {text}{" "}
      </Text>
    </HStack>
  );
}

export default Status;
