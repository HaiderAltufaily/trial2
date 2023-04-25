import { Avatar, Divider, Icon, Image, Stack } from "@chakra-ui/react";
import React, { useId } from "react";
import {
  Appointment,
  Home,
  Finance,
  Stethoscope,
  Wearhouse,
  Notifications,
  Settings,
  Logo,
} from "../../assets";
import { v4 as uuidv4 } from "uuid";

function Sidebar() {
  const id = useId();
  const navs = [Home, Wearhouse, Stethoscope, Finance, Appointment];
  const u = [Logo];
  return (
    <Stack
      position="sticky"
      right="0"
      justify={"space-between"}
      py="19px"
      px="15px"
      w="80px"
      bg="white"
      h="100vh"
      top="0"
    >
      {/* TOP */}
      <Stack spacing="53px" align={"center"}>
        <Logo />
        <Stack spacing="28px">
          {navs.map((Nav) => {
            return (
              <Nav
                key={uuidv4()}
                fill={Nav === Stethoscope ? "#3B4351" : "transparent"}
                stroke={Nav === Stethoscope ? "#4A5568" : "transparent"}
              />
            );
          })}
          <Divider borderWidth={"1.5px"} />
        </Stack>
      </Stack>
      {/* BOTTOM */}
      <Stack align="center" spacing="20px">
        <Settings />
        <Notifications />
        <Divider borderWidth={"1.5px"} />
        <Stack align="center" spacing="-4">
          <Avatar
            boxSize="50px"
            src={`https://randomuser.me/api/portraits/med/men/44.jpg`}
          />
          <Avatar
            border={"3px solid white"}
            boxSize="53px"
            src={`https://randomuser.me/api/portraits/med/men/89.jpg`}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Sidebar;
