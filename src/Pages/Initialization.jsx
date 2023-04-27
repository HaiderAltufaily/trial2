import {
  Button,
  Container,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ImageUpload from "../Components/Initialization/ImageUpload";
import Logo from "../assets/logo2.svg";
import CustomProgressBar from "../Components/Initialization/CustomProgressBar";
import SystemInfo from "../Components/Initialization/SystemInfo";

function Initialization() {
  const [currentStep, setCurrentStep] = useState(1);
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  return (
    <Stack bg="#F7F7FA" py="24px" px="30px">
      <Stack bg="white" align="center">
        <Container mt="10" dir="rtl" maxW={"4xl"} py="8">
          <CustomProgressBar
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
          <Stack mb="10" justify={"center"} align="center" mt="10">
            <Image w="100%" h="110" src={Logo} />
            <Text fontSize={"40px"} fontWeight={"bold"}>
              مرحباً بك في برنامج الطبيب
            </Text>
            <Text color="#7E8DA7" fontSize={"28px"}>
              نحن هنا لمساعدتك , يرجى ادخال معلومات المستشفى / مركز
            </Text>
          </Stack>
          <SystemInfo />
        </Container>
      </Stack>
      <HStack justify={currentStep > 1 ? "space-between" : "flex-end"}>
        {currentStep > 1 && (
          <Button onClick={handlePrevStep} variant={"primary"}>
            رجوع
          </Button>
        )}
        <HStack>
          <Button variant={"secondary"}>تخطي</Button>
          <Button onClick={handleNextStep} variant={"primary"}>
            تقدم
          </Button>
        </HStack>
      </HStack>
    </Stack>
  );
}

export default Initialization;
