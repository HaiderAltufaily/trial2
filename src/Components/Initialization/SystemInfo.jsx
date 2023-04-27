import { FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import React from "react";
import ImageUpload from "./ImageUpload";

function Initialization() {
  return (
    <Stack spacing="4" align="center">
      <ImageUpload />
      <FormControl maxW="400px">
        <FormLabel>اسم المستشفى</FormLabel>
        <Input variant={"primary"} placeholder="مستشفى الحياة" />
      </FormControl>
    </Stack>
  );
}

export default Initialization;
