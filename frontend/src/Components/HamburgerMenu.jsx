import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Box,
  Image,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Hamburg from "./hamburgcom";
import Logo from "../Assets/care@home_logo.png";
export function HamburgerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        display={"flex"}
        justifyContent="space-between"
        padding={"10px"}
        backgroundColor="#000"
      >
        <NavLink to="/">
          <Image width="130px" src={Logo} />
        </NavLink>
        <Button onClick={onOpen} zIndex={100} bgColor="transparent">
          <HamburgerIcon size={"sm"} color="white" />
        </Button>
      </Box>
      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <Flex
              direction="column"
              gap={10}
              // className={styles.linksDiv}
            >
              <Link>Blog</Link>
              <Link>Register As A Professional</Link>
              {/* <Text style={{ cursor: "pointer" }} onClick={onOpen}> */}
              <Hamburg close={onClose} />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
