import { Container, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ImageUpload from "../Components/Main/ImageUpload";
import Logo from "../assets/logo2.svg";
import CustomProgressBar from "../Components/Main/CustomProgressBar";

function Main() {
  return (
    <Stack align="center">
      <Container mt="10" dir="rtl" maxW={"4xl"} py="8">
        <CustomProgressBar />
        <Stack mb="10" justify={"center"} align="center" mt="10">
          <Image w="100%" h="110" src={Logo} />
          <Text fontSize={"40px"} fontWeight={"bold"}>
            مرحباً بك في برنامج الطبيب
          </Text>
          <Text fontFamily={"Din"} color="#7E8DA7" fontSize={"28px"}>
            نحن هنا لمساعدتك , يرجى ادخال معلومات المستشفى / مركز
          </Text>
        </Stack>
        <ImageUpload />
      </Container>
    </Stack>
  );
}

export default Main;
