import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Progress,
  Button,
  useColorModeValue,
  HStack,
  Container,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ImageUpload from "../Patients/ImageUpload";

const steps = [
  { id: 1, label: "معلومات النظام" },
  { id: 2, label: "إنشاء قسم" },
  { id: 3, label: "إدخال مستخدمين" },
  { id: 4, label: "إنشاء طوابير" },
  { id: 5, label: "إستيراد الأدوية" },
  { id: 6, label: "الدليل المحاسبي" },
];

const CustomProgressBar = ({ currentStep, setCurrentStep }) => {
  const activeColor = useColorModeValue("blue.500", "blue.300");
  const inactiveColor = useColorModeValue("gray.300", "gray.500");

  return (
    <Box>
      <HStack spacing={"-0.5"}>
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {index > 0 && (
              <Box bg="gray.300" width="100%" mr="2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: currentStep >= step.id ? "100%" : "0%",
                    transition: { duration: 0.5 },
                  }}
                  exit={{ width: 0, transition: { duration: 0.5 } }}
                >
                  <Progress
                    height="3px"
                    value={currentStep >= step.id ? 100 : 0}
                    colorScheme="blue"
                    borderRadius="0"
                  />
                </motion.div>
              </Box>
            )}
            <Stack
              align={"center"}
              position="relative"
              justify={"center"}
              width="60px"
              textAlign="center"
            >
              <HStack
                w="15px"
                h="15px"
                borderRadius="50%"
                borderColor={
                  currentStep >= step.id ? activeColor : inactiveColor
                }
                bg={currentStep > step.id ? activeColor : "transparent"}
                borderWidth="3px"
                align={"center"}
                justify={"center"}
              ></HStack>
              <Text
                color={currentStep >= step.id ? activeColor : inactiveColor}
                position="absolute"
                top="-40px"
                w="md"
              >
                {step.label}
              </Text>
            </Stack>
          </React.Fragment>
        ))}
      </HStack>

      {/* <Flex justifyContent="space-between" mt="8">
        <Button
          variant={"primary"}
          onClick={handlePrevStep}
          disabled={currentStep === 1}
          mr="4"
        >
          Previous
        </Button>
        <Button
          variant={"primary"}
          onClick={handleNextStep}
          disabled={currentStep === steps.length}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </Button>
      </Flex> */}
    </Box>
  );
};

export default CustomProgressBar;
