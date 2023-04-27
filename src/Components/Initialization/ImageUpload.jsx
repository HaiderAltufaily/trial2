import React, { useCallback, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useDropzone } from "react-dropzone";
import imge from "../../assets/image.svg";
import upload from "../../assets/upload.svg";
import { ImageIcon } from "../../assets";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDrop = useCallback((acceptedFiles) => {
    setSelectedFile(
      Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0]),
      })
    );
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: handleDrop,
  });

  const bg = useColorModeValue("gray.100", "gray.800");
  const border = useColorModeValue("gray.200", "gray.600");
  const iconColor = useColorModeValue("gray.400", "gray.600");

  return (
    <Container
      p="10"
      pt="4"
      maxW={"10.25rem"}
      maxH={"9.813rem"}
      border={`2px dashed ${border}`}
      borderRadius="2xl"
      bg={"#F5F7FF"}
      cursor={"pointer"}
      position="relative"
    >
      {selectedFile ? (
        <Flex alignItems="center" justifyContent="center" w="100%" h="100%">
          <Image src={selectedFile.preview} maxW="100%" maxH="100%" />
        </Flex>
      ) : (
        <Flex
          alignItems="center"
          justifyContent="center"
          w="100%"
          h="100%"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <Text>Drop the image here</Text>
          ) : (
            <Stack align={"center"}>
              {/* <Icon children={imge} boxSize={"24"} color="red" /> */}
              <Stack
                align="center"
                justify={"center"}
                bg="lightPurple"
                boxSize={"70px"}
                borderRadius={"full"}
              >
                <ImageIcon />
              </Stack>

              <Stack
                align="center"
                fontFamily={"dinMedium"}
                fontSize={"sm"}
                spacing="0"
              >
                <Text>رفع صورة</Text>
                <Text color="lightText">PNG , JPG</Text>
              </Stack>
            </Stack>
          )}
        </Flex>
      )}
      {selectedFile && (
        <Flex justifyContent="flex-end" mt="2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSelectedFile(null)}
          >
            Remove
          </Button>
        </Flex>
      )}
      <Image position="absolute" right="-3" bottom="-2" src={upload} />
    </Container>
  );
};

export default ImageUpload;
