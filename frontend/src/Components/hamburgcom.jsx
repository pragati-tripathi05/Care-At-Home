import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Radio,
  useDisclosure,
  RadioGroup,
  Stack,
  Button,
  Box,
  Image,
  Flex,
  Text,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logoutAction } from "../Redux/action";
import Login from "./Auth/Login";
import { SignupDrawer } from "./Auth/SignupDrawer";

function Hamburg({ close }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");
  const data = useSelector((state) => {
    return state.reducer;
  });
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAction());
  };
  return (
    <>
      {!data.isAuth ? (
        <Text style={{ cursor: "pointer" }} onClick={onOpen}>
          {" "}
          Login/SignUp{" "}
        </Text>
      ) : (
        <Box display="flex" justifyContent="left" alignItems="center" gap="5px">
          {" "}
          <Avatar
            bg="blackAlpha.800"
            name={data.name}
            color="white"
            src="https://bit.ly/broken-link"
            size="sm"
          />
          <b>{data.name}</b>{" "}
          <Button
            bg={"black"}
            ml="30px"
            onClick={handleLogout}
            className="black-button"
          >
            Logout
          </Button>
        </Box>
      )}
      {/* </Text> */}
      {/* Drawer Start */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Log in to your account
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <Login onClose={onClose} />
                <br />
                <Box
                  display="flex"
                  flexDir="column"
                  justifyContent="center"
                  alignItems="center"
                  gap="20px"
                >
                  Don't have an account ? <SignupDrawer />
                </Box>
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Hamburg;
