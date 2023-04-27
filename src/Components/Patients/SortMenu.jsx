import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  HStack,
  Box,
} from "@chakra-ui/react";
import { UpArrow } from "../../assets";
function SortMenu() {
  return (
    <Menu>
      <Button
        as={MenuButton}
        size="lg"
        leftIcon={
          <HStack spacing="0">
            <UpArrow />
            <Box transform={"rotate(180deg)"}>
              <UpArrow />
            </Box>
          </HStack>
        }
        fontSize={"lg"}
        px="10px"
        borderRadius={"8px"}
        variant={"secondary"}
      >
        فرز حسب
      </Button>
      <MenuList boxShadow={"md"}>
        <MenuItem>تاريخ الإضافة الأحدث</MenuItem>
        <MenuItem>تاريخ الإضافة الأقدم</MenuItem>
        <MenuDivider />
        <MenuItem>الأبجدية</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default SortMenu;
