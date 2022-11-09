import { Box, Flex, Heading, Image, Input, InputGroup, InputLeftElement, Link, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import styles from "./HomeSection.module.css";
import {TiArrowSortedDown} from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
const HomeSection = () => {
   
  return (
    <Box className={styles.homeSection}>
      {/* Top Navbar Starts */}
      <Flex className={styles.topNavbar}>
        <Image
          className={styles.logo}
          src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
          alt="Logo"
        />
        <Flex className={styles.linksDiv}>
          <Link>Blog</Link>
          <Link>Register As A Professional</Link>
          <Text>Login/SignUp</Text>
        </Flex>
      </Flex>
      {/* Top Navbar End */}
      {/* Search Section Starts */}
      <Box mt="10rem">
        <Heading
          as="h1"
          style={{ color: "white", fontSize: "48px", marginBottom: "2.5rem" }}
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
          <Link>Women's Therapies</Link>, <Link>Salon for men</Link>,{" "}
          <Link>Men's Therapies </Link>etc
        </Text>
      </Box>
      {/* Search Section End */}
      {/* Service Cards Starts */}
      <Flex textAlign="center">
        <Box style={{border:"1px solid red"}}>
          <Box>
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png"
              alt="services_image"
            />
          </Box>
          <Text>Salon for women</Text>
        </Box>
        <Box style={{border:"1px solid red"}}>
          <Box>
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/supply/customer-app-supply/1635331606894-7b633f.png"
              alt="services_image"
            />
          </Box>
          <Text>Hair, Skin & nails</Text>
        </Box>
        <Box style={{border:"1px solid red"}}>
          <Box>
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png"
              alt="services_image"
            />
          </Box>
          <Text>Women's therapies</Text>
        </Box>
        <Box style={{border:"1px solid red"}}>
          <Box>
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png"
              alt="services_image"
            />
          </Box>
          <Text>Salon for men</Text>
        </Box>
        <Box style={{border:"1px solid red"}}>
          <Box>
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png"
              alt="services_image"
            />
          </Box>
          <Text>Men's therapies</Text>
        </Box>
      </Flex>
      {/* Service Cards End */}
    </Box>
  );
}

export default HomeSection