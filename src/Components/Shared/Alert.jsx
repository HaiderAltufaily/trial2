import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
  AlertDialogCloseButton,
  Box,
  HStack,
  CloseButton,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";
import { Close, Trash, TrashFilled } from "../../assets";
export default function Alert({
  header,
  onConfirm,
  btnTitle,
  body,
  btnVariant,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  function renderAlertButton() {
    if (btnVariant === "menuItemDelete") {
      return (
        <MenuItem onClick={onOpen} icon={<Trash fill="#3B4351" />}>
          حذف
        </MenuItem>
      );
    } else {
      return (
        <Button
          variant={"secondary"}
          leftIcon={
            <HStack
              align="center"
              justify={"center"}
              boxSize={"22px"}
              borderRadius={"50%"}
              bg="#7B61FF52"
            >
              <TrashFilled fill="#7B61FF" />
            </HStack>
          }
          onClick={onOpen}
        >
          حذف
        </Button>
      );
    }
  }
  return (
    <>
      {renderAlertButton()}
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent textAlign={"right"}>
          <AlertDialogHeader fontFamily={"dinMedium"} fontWeight={"400"}>
            {header}
          </AlertDialogHeader>
          <CloseButton
            position="absolute"
            top="10px"
            left="12px"
            onClick={onClose}
          />

          <AlertDialogBody>{body}</AlertDialogBody>
          <AlertDialogFooter>
            <HStack spacing="4" w="100%">
              <Button
                _hover={{
                  opacity: 0.8,
                }}
                color="white"
                colorScheme="red"
                ml={3}
                onClick={onConfirm}
              >
                نعم
              </Button>
              <Button
                border="1px solid #ccc"
                variant={"outline"}
                ref={cancelRef}
                onClick={onClose}
              >
                كلا
              </Button>
            </HStack>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
