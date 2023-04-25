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
import imge from "./assets/image.svg";
import upload from "./assets/upload.svg";
import { Camera, Close, Profile } from "./assets";

const ImageUpload = ({ setSelectedFile, selectedFile }) => {
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
    <Box
      boxSize={"125px"}
      borderRadius="42px"
      border={`2px dashed ${border}`}
      bg={"#F5F7FF"}
      cursor={"pointer"}
      position="relative"
    >
      {selectedFile ? (
        <>
          <Flex
            // alignItems="center"
            // justifyContent="center"

            overflow={"hidden"}
          >
            <Image
              boxSize={"125px"}
              borderRadius="42px"
              objectFit={"cover"}
              src={selectedFile.preview}
              maxW="100%"
              maxH="100%"
            />
          </Flex>
          <Stack
            justify={"center"}
            align="center"
            boxSize={"30px"}
            borderRadius={"50%"}
            bg="primary"
            position={"absolute"}
            transform="translate(-50%, -50%)"
            // top="50%"
            left="50%"
            border="3px solid white"
          >
            <Camera />
          </Stack>
        </>
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
            <Stack justify={"center"} align={"center"}>
              {/* <Icon children={imge} boxSize={"24"} color="red" /> */}
              <Profile />
            </Stack>
          )}
        </Flex>
      )}
      {selectedFile && (
        <Flex
          position={"absolute"}
          top="0"
          left="0"
          _hover={{ transform: "scale(1.3)" }}
          onClick={() => setSelectedFile(null)}
        >
          {/* <Button
            variant="outline"
            size="sm"
          >
            Remove
          </Button> */}
          <Close width="11" height="11" />
        </Flex>
      )}
      {!selectedFile && (
        <Image position="absolute" right="-3" bottom="-2" src={upload} />
      )}
    </Box>
  );
};

export default ImageUpload;
