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
} from "@chakra-ui/react";
import {
  Appointment,
  Edit,
  EditInfo,
  Print,
  ThreeDots,
  Trash,
} from "../../assets";
function CardMenu() {
  return (
    <Menu>
      <MenuButton _hover={{ transform: "scale(1.2)" }} zIndex={100}>
        <ThreeDots />
      </MenuButton>
      <MenuList>
        <MenuItem icon={<Trash fill="#3B4351" />}>حذف</MenuItem>
        <MenuItem icon={<Edit stroke="#3B4351" />}>تعديل</MenuItem>

        <MenuItem icon={<Print />}>طباعة</MenuItem>
        <MenuItem icon={<Appointment height="15px" width="15px" />}>
          المراجعات السابقة
        </MenuItem>
        <MenuItem icon={<EditInfo />}>تغيير معلومات المراجعين</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default CardMenu;
