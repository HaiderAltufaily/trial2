import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
  HStack,
  Text,
  Stack,
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Select,
  Box,
  Divider,
  useToast,
  CloseButton,
  MenuItem,
} from "@chakra-ui/react";

import { Calender2, Plus, Close, Edit2, Edit } from "../../assets";
import ImageUpload from "./ImageUpload";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPatient, editPatient } from "../../store/slices/patientsSlice";
function PatientFormModal({ patient, btnVariant }) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [date, setDate] = useState(new Date());
  const [selectedImage, setSelectedImage] = useState("");
  const [newPatient, setNewPatient] = useState({
    name: "",
    phoneNumber: "",
    address: "النجف",
    gender: "ذكر",
    imageUrl: "",
  });
  useEffect(() => {
    if (patient) {
      setNewPatient({
        name: patient.name,
        gender: patient.gender,
        imageUrl: patient.imageUrl,
        address: patient.address,
        phoneNumber: patient.phoneNumber,
      });
      setDate(new Date(patient.birthdate));
      setSelectedImage(patient.imageUrl);
    }
  }, [patient]);
  const dispatch = useDispatch();
  const propsConfigs = {
    dateNavBtnProps: {
      colorScheme: "blue",
      variant: "outline",
    },

    dayOfMonthBtnProps: {
      defaultBtnProps: {
        borderColor: "red.300",
        _hover: {
          background: "primary",
          color: "white",
        },
      },
      isInRangeBtnProps: {
        color: "yellow",
      },
      selectedBtnProps: {
        background: "primary",
        color: "white",
      },
      todayBtnProps: {
        background: "primary",
        color: "white",
      },
    },
    inputProps: {
      size: "lg",
      variant: "primary",
      textAlign: "right",
    },
  };

  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewPatient((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleAddPatient(e) {
    //TODO: Implement react-hook-form or formik with YUP validations
    e.preventDefault();
    const birthdate = date.toISOString().split("T")[0].replaceAll("-", "/");
    if (!patient) {
      dispatch(addPatient({ ...newPatient, birthdate }));
    } else if (patient) {
      dispatch(
        editPatient({
          ...newPatient,
          id: patient.id,
          birthdate,
        })
      );
    }
    toast({
      position: "top",
      duration: 2000,

      render: () => (
        <Box
          borderRadius={"lg"}
          opacity={0.8}
          textAlign={"center"}
          bg="green"
          color="white"
          p={3}
        >
          تم {!patient ? "إضافة" : "تعديل"} المراجع
        </Box>
      ),
    });
    setNewPatient({
      name: "",
      phoneNumber: "",
      address: "النجف",
      gender: "ذكر",
      imageUrl: "",
    });
    onClose();
  }
  function renderModalButton() {
    if (btnVariant === "menuItemEdit") {
      return (
        <MenuItem onClick={onOpen} icon={<Edit stroke="#3B4351" />}>
          تعديل
        </MenuItem>
      );
    } else if (btnVariant === "edit") {
      return (
        <Button
          onClick={onOpen}
          variant={"secondary"}
          leftIcon={
            <HStack
              align="center"
              justify={"center"}
              boxSize={"22px"}
              borderRadius={"50%"}
              bg="#7B61FF52"
            >
              <Edit2 />
            </HStack>
          }
        >
          تعديل
        </Button>
      );
    } else {
      return (
        <Button
          fontWeight={"400"}
          textAlign={"center"}
          variant={"primary"}
          onClick={onOpen}
        >
          <HStack align="baseline">
            <Plus />

            <Text>مراجع </Text>
          </HStack>
        </Button>
      );
    }
  }
  return (
    <>
      {renderModalButton()}

      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader as={HStack} justifyContent={"space-between"}>
            <CloseButton onClick={onClose} />

            <Text color="lightText" fontWeight={"400"}>
              {patient ? "تعديل معلومات المراجع" : "إضافة مراجع جديد"}{" "}
            </Text>
          </ModalHeader>
          <Divider />
          <form onSubmit={handleAddPatient}>
            <ModalBody>
              <Stack spacing="4">
                <HStack justify={"flex-end"}>
                  <ImageUpload
                    selectedFile={selectedImage}
                    setSelectedFile={setSelectedImage}
                  />
                </HStack>
                <Stack>
                  <HStack flexDir={"row-reverse"}>
                    <FormControl mx="4">
                      <FormLabel textAlign={"right"}>اسم المراجع</FormLabel>
                      <Input
                        name="name"
                        value={newPatient.name}
                        textAlign={"right"}
                        size="lg"
                        onChange={handleInputChange}
                        variant={"primary"}
                        placeholder="النص"
                      />
                    </FormControl>
                    <FormControl position="relative" zIndex={"2"}>
                      <FormLabel textAlign={"right"}>تاريخ الميلاد</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          children={<Calender2 fill="#B4BDC1" />}
                        />
                        <SingleDatepicker
                          propsConfigs={propsConfigs}
                          size="lg"
                          configs={{
                            dateFormat: "dd MMMM, yyyy",
                            editable: true,
                          }}
                          name="date"
                          date={date}
                          onDateChange={setDate}
                        />
                      </InputGroup>
                    </FormControl>
                  </HStack>
                  <HStack spacing="2" flexDir={"row-reverse"}>
                    <FormControl mx="4">
                      <FormLabel textAlign={"right"}>الجنس</FormLabel>
                      <Select
                        _focus={{
                          border: "1px solid",
                          borderColor: "primary",
                        }}
                        textAlign={"right"}
                        size="lg"
                        value={newPatient.gender}
                        variant={"primary"}
                        name="gender"
                        boxShadow="sm"
                        onChange={handleInputChange}
                        border="1px solid #EFF4F8"
                        borderRadius="12px"
                        _placeholder={{ color: "lightText" }}
                        cursor={"pointer"}
                      >
                        <option value="ذكر">ذكر</option>
                        <option value="أنثى">أنثى</option>{" "}
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormLabel textAlign={"right"}>رقم الهاتف</FormLabel>
                      <HStack flexDir={"row-reverse"}>
                        <Input
                          value={newPatient.phoneNumber}
                          name="phoneNumber"
                          size="lg"
                          variant={"primary"}
                          onChange={handleInputChange}
                          placeholder="7801234567"
                          mx="1"
                        />
                        <Input
                          disabled
                          _disabled={{
                            color: "#BEC4D9",
                            opacity: 1,
                            bg: "white",
                          }}
                          flexBasis={"40%"}
                          textAlign={"right"}
                          size="lg"
                          variant={"primary"}
                          placeholder="+964"
                        />
                      </HStack>
                    </FormControl>
                  </HStack>
                </Stack>
              </Stack>
            </ModalBody>

            <ModalFooter justifyContent={"flex-start"}>
              <Button
                fontSize={"lg"}
                fontWeight={"400"}
                borderRadius={"8px"}
                variant={"primary"}
                type="submit"
              >
                حفظ
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PatientFormModal;
