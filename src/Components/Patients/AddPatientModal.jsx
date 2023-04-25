import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  HStack,
  Text,
  Stack,
  Input,
  FormControl,
  FormLabel,
  InputRightElement,
  InputGroup,
  InputLeftElement,
  Select,
  CloseButton,
  Box,
  Divider,
  useToast,
} from "@chakra-ui/react";

import { Calender2, Plus, Calender, Close } from "../../assets";
import ImageUpload from "../../ImageUpload";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPatient } from "../../store/patientsSlice";
function AddPatientModal() {
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
  function handleAddPatient() {
    dispatch(addPatient(newPatient));
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
          تم اضافة المراجع
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
  return (
    <>
      <Button
        fontFamily={"poppins"}
        textAlign={"center"}
        variant={"primary"}
        onClick={onOpen}
      >
        <HStack>
          <Plus />

          <Text>مراجع </Text>
        </HStack>
      </Button>

      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader as={HStack} justifyContent={"space-between"}>
            <Box onClick={onClose} cursor={"pointer"}>
              <Close width="20" height="20" />
            </Box>

            <Text color="lightText" fontWeight={"400"}>
              إضافة مراجع جديد
            </Text>
          </ModalHeader>
          <Divider />
          <ModalBody>
            <Stack spacing="4">
              <HStack justify={"flex-end"}>
                <ImageUpload
                  selectedFile={selectedImage}
                  setSelectedFile={setSelectedImage}
                />
              </HStack>
              <form>
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

                          //   onDateChange={setDate}
                        />
                      </InputGroup>
                    </FormControl>
                  </HStack>
                  <HStack spacing="2" flexDir={"row-reverse"}>
                    <FormControl mx="4">
                      <FormLabel textAlign={"right"}>الجنس</FormLabel>
                      <Select
                        textAlign={"right"}
                        size="lg"
                        value={newPatient.gender}
                        variant={"primary"}
                        name="gender"
                        defaultValue={"ذكر"}
                        // placeholder="ذكر"
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
                          //   flexBasis={"80%"}
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
              </form>
            </Stack>
          </ModalBody>

          <ModalFooter justifyContent={"flex-start"}>
            <Button
              fontSize={"lg"}
              fontWeight={"400"}
              borderRadius={"8px"}
              variant={"primary"}
              onClick={handleAddPatient}
            >
              حفظ
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddPatientModal;
