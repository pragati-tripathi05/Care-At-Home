import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "./HomeSection.module.css";
import { TiArrowSortedDown } from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
const HomeSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navbarRef = React.useRef();
  const [isVisible, setisVisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setisVisible(entry.isIntersecting);
    });
    observer.observe(navbarRef.current);
  }, []);

  return (
    <Box ref={navbarRef}>
      <Box className={styles.homeSection}>
        {/* Top Navbar Starts */}
        {/* TODO:- Login/Signup functionality */}
        <Flex className={styles.topNavbar}>
          <Image
            className={styles.logo}
            src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
            alt="Logo"
          />
          <Flex className={styles.linksDiv}>
            <Link>Blog</Link>
            <Link>Register As A Professional</Link>
            <Text style={{ cursor: "pointer" }} onClick={onOpen}>
              Login/SignUp
            </Text>
            {/* Drawer Start */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth="1px">
                  Create a new account
                </DrawerHeader>
                <DrawerBody>
                  <Stack spacing="24px">
                    <Box>
                      <Input
                        id="username"
                        placeholder="Please enter user name"
                      />
                    </Box>
                  </Stack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
            {/* Drawer End */}
          </Flex>
        </Flex>
        {/* Top Navbar End */}
        {/* Search Section Starts */}
        <Box mt="10rem">
          <Heading
            as="h1"
            style={{ color: "white", fontSize: "48px", marginBottom: "2.5rem",fontFamily: "Roboto"}}
          >
            Home services, on demand.
          </Heading>
          <Flex gap="25px" w="50%" m="auto">
            <Popover>
              <PopoverTrigger>
                <Flex className={styles.locationfield}>
                  <Image
                    width="20px"
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_template/images/supply/partner-app-supply/1661338258375-6c99b1.png"
                    alt="country_flag"
                  />
                  <Text>Delhi NCR</Text>
                  <TiArrowSortedDown />
                </Flex>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>
                  <Flex justify="space-between">
                    <Flex gap="3px">
                      <CiLocationOn
                        style={{ position: "relative", top: "4px" }}
                      />
                      Current Location
                    </Flex>
                    <Flex cursor="pointer" fontWeight="700" color="#6e43e5">
                      Detect using GPS{" "}
                      <IoIosArrowForward
                        style={{ position: "relative", top: "4px" }}
                      />
                    </Flex>
                  </Flex>
                </PopoverHeader>
                <PopoverBody>
                  <InputGroup
                    style={{
                      backgroundColor: "white",
                      borderRadius: "4px",
                    }}
                  >
                    <InputLeftElement
                      height="100%"
                      pointerEvents="none"
                      children={
                        <AiOutlineSearch
                          style={{ color: "grey", fontSize: "1.5rem" }}
                        />
                      }
                    />
                    <Input
                      type="text"
                      placeholder="Search for services"
                      size="lg"
                    />
                  </InputGroup>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Box flex="1">
              <InputGroup
                style={{
                  backgroundColor: "white",
                  height: "100%",
                  fontSize: "15px",
                  borderRadius: "4px",
                }}
              >
                <InputLeftElement
                  height="100%"
                  fontSize="20px"
                  pointerEvents="none"
                  children={
                    <AiOutlineSearch
                      style={{ color: "grey", fontSize: "1.5rem" }}
                    />
                  }
                />
                <Input
                  height="100%"
                  type="text"
                  placeholder="Search for services"
                />
              </InputGroup>
            </Box>
          </Flex>
          <Text ml="-1.5rem" mt="0.5rem" color="white" fontSize="16px">
            <Link><u>Women's Therapies</u></Link>, <Link><u> Salon for men</u></Link>,
            <Link><u> Men's Therapies</u> </Link> etc
          </Text>
        </Box>
        {/* Search Section End */}
        {/* Service Section-1 Cards Starts */}
        <Flex justify="center" className={styles.serviceCardSection1}>
          <Box className={styles.serviceCard}>
            <Box>
              <Image
                width="32px"
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png"
                alt="services_image"
              />
            </Box>
            <Text fontSize="13px">Salon for women</Text>
          </Box>
          <Box className={styles.serviceCard}>
            <Box>
              <Image
                width="32px"
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/supply/customer-app-supply/1635331606894-7b633f.png"
                alt="services_image"
              />
            </Box>
            <Text fontSize="13px">Hair, Skin & nails</Text>
          </Box>
          <Box className={styles.serviceCard}>
            <Box>
              <Image
                width="32px"
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png"
                alt="services_image"
              />
            </Box>
            <Text fontSize="13px">Women's therapies</Text>
          </Box>
          <Box className={styles.serviceCard}>
            <Box>
              <Image
                width="32px"
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png"
                alt="services_image"
              />
            </Box>
            <Text fontSize="13px">Salon for men</Text>
          </Box>
          <Box className={styles.serviceCard}>
            <Box>
              <Image
                width="32px"
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png"
                alt="services_image"
              />
            </Box>
            <Text fontSize="13px">Men's therapies</Text>
          </Box>
        </Flex>
        {/* Service Section-1 Cards End */}
      </Box>
      {/* Home Services Start */}
      <Box mt="8rem">
        <Heading as="h1" fontSize="32px" fontFamily= 'Roboto'>
          Home Services
        </Heading>
        {/* Service Section-2 Cards Starts */}
        <Flex  className={styles.serviceCardSection2}>
          <Box className={styles.serviceCard}>
            <Box>
              <Image
                width="32px"
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png"
                alt="services_image"
              />
            </Box>
            <Text fontSize="13px">Appliance Repair</Text>
          </Box>
          <Box className={styles.serviceCard}>
            <Box>
              <Image
                width="32px"
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png"
                alt="services_image"
              />
            </Box>
            <Text fontSize="13px">Home Painting</Text>
          </Box>
          <Box className={styles.serviceCard}>
            <Box>
              <Image
                width="32px"
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png"
                alt="services_image"
              />
            </Box>
            <Text fontSize="13px">Cleaning & Pest</Text>
          </Box>
          <Box className={styles.serviceCard}>
            <Box>
              <Image
                width="32px"
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1641213886588-90a903.png"
                alt="services_image"
              />
            </Box>
            <Text fontSize="13px">Disinfection</Text>
          </Box>
          <Box className={styles.serviceCard}>
            <Box>
              <Image
                width="32px"
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png"
                alt="services_image"
              />
            </Box>
            <Text fontSize="13px">Home Repairs</Text>
          </Box>
        </Flex>
        {/* Service Section-2 Cards End */}
      </Box>
      {/* Home Services End */}
      {/* Navbar which opens on scroll start */}
      {isVisible?"":(<Flex className={styles.scrollNavbar}>
       <Box flex='2'>
         <InputGroup
          style={{
            backgroundColor: "white",
            borderRadius: "4px",
          }}
        >
          <InputLeftElement
            height="100%"
            pointerEvents="none"
            children={
              <AiOutlineSearch style={{ color: "grey", fontSize: "1.5rem" }} />
            }
          />
          <Input type="text" placeholder="Search for services" size="lg" />
        </InputGroup>
       </Box>
        <Flex gap="1rem">
          <Box className={styles.navbarServiceCards}>
            <Box>
              <Image
                width="28px"
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png"
                alt="services_image"
              />
            </Box>
            <Text fontSize="10px">Women's therapies</Text>
          </Box>
          <Box className={styles.navbarServiceCards}>
            <Box>
              <Image
                width="28px"
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png"
                alt="services_image"
              />
            </Box>
            <Text fontSize="10px">Salon for men</Text>
          </Box>
          <Box className={styles.navbarServiceCards}>
            <Box>
              <Image
                width="28px"
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png"
                alt="services_image"
              />
            </Box>
            <Text fontSize="10px">Men's therapies</Text>
          </Box>
        </Flex>
      </Flex>)}
      {/* Navbar which opens on scroll end */}
    </Box>
  );
};

export default HomeSection;
