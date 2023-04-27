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
  useDisclosure,
} from "@chakra-ui/react";
import {
  Appointment,
  Edit,
  EditInfo,
  Print,
  ThreeDots,
  Trash,
} from "../../assets";
import Alert from "../Shared/Alert";
import { useDispatch } from "react-redux";
import { deletePatient } from "../../store/slices/patientsSlice";
import PatientFormModal from "./PatientFormModal";
function CardMenu({ patient }) {
  const dispatch = useDispatch();
  function onDeletePatient() {
    dispatch(deletePatient(patient.id));
    onClose();
  }
  return (
    <Menu>
      <MenuButton _hover={{ transform: "scale(1.2)" }} zIndex={100}>
        <ThreeDots />
      </MenuButton>
      <MenuList>
        <Alert
          body={"هل أنت متأكد من حذف المراجع؟"}
          header="حذف المراجع"
          onConfirm={onDeletePatient}
          btnVariant={"menuItemDelete"}
        />

        <PatientFormModal btnVariant={"menuItemEdit"} patient={patient} />
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
