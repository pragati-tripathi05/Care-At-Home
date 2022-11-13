
import { HamburgerIcon } from '@chakra-ui/icons'
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
  } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { logoutAction } from '../Redux/action'
import Login from './Auth/Login'
import { SignupDrawer } from './Auth/SignupDrawer'
import Hamburg from './hamburgcom';
import Logo from "../Assets/care@home_logo.png";
  export function HamburgerMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
    
    const data = useSelector((state) => {
      return state.reducer;
    });
    const dispatch  = useDispatch()
    const handleLogout = ()=>{
      dispatch(logoutAction())
    }
    return (
      <>
           <Box display={"flex"} justifyContent="space-between" padding={"10px"} backgroundColor="#000">
        <NavLink to="/">
          <Image width="130px" src={Logo} />
        </NavLink>
        <Button
          onClick={onOpen}
          zIndex={100}
          bgColor="transparent"
        >
          <HamburgerIcon size={"sm"} color="white" />
        </Button>
      </Box>
        <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
            <DrawerBody>
            <Flex direction='column' gap={10}
            // className={styles.linksDiv}
            >
            <Link>Blog</Link>
            <Link>Register As A Professional</Link>
            {/* <Text style={{ cursor: "pointer" }} onClick={onOpen}> */}
              <Hamburg close= {onClose}/>
            </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }