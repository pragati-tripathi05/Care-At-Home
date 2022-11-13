import {
  Avatar,
  Box,
  Button,
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
import { Link } from "react-router-dom";
import Login from "../Auth/Login";
import { SignupDrawer } from "../Auth/SignupDrawer";
import { saveData } from "../../utils/localStorage";
import { accessData } from "../../utils/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../Redux/action";
import { HamburgerMenu } from "../HamburgerMenu";
import Logo from "../../Assets/care@home_logo.png";

const HomeSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navbarRef = React.useRef();
  const [isVisible, setisVisible] = useState();
  const isAuth = accessData("isAuth");
  
  const data = useSelector((state) => {
    return state.reducer;
  });
  // console.log(data);
  const dispatch = useDispatch()
  const handleLogout = ()=>{
    dispatch(logoutAction())
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  console.log(windowSize)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setisVisible(entry.isIntersecting);
    });
    observer.observe(navbarRef.current);
  }, []);

  // **************************Getting Location**********************
  const [cityname, setCityname] = useState("Delhi NCR");
  const gettingLocation = ()=> {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const success = (position)=> {
      let crd = position.coords;

      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
      getDataLocation(crd.latitude, crd.longitude);
    }

    const error = (err) => {

      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }
  const getDataLocation = (lat, lon)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d11e2713cdace67cd72e441e55b790d4`;
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        console.log(res);
        setCityname(res.name);
        saveData("location",res.name);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  return (
    <Box ref={navbarRef}>
      <Box className={styles.homeSection}>
        {/* Top Navbar Starts */}
       {windowSize.innerWidth > 640 ?  (<Flex className={styles.topNavbar}>
          <Image
            className={styles.logo}
            src={Logo}
            alt="Logo"
          />
          <Flex className={styles.linksDiv}>
            <Link>Blog</Link>
            <Link to="/booking">Bookings</Link>
            <Link>Register As A Professional</Link>
            {/* <Text style={{ cursor: "pointer" }} onClick={onOpen}> */}
              {!data.isAuth ? (
                <Text style={{ cursor: "pointer" }} onClick={onOpen}> Login/SignUp </Text>
              ) : (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap="5px"
                >
                  {" "}
                  <Avatar
                    bg="blackAlpha.800"
                    name={data.name}
                    color="white"
                    src="https://bit.ly/broken-link"
                    size="sm"
                  />
                  <b>{data.name}</b>{" "}
                  <Button bg={"black"} ml="30px" onClick={handleLogout}  className="black-button">
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
                      <Login onClose= {onClose} />
                      <br />
                      <Box
                        display="flex"
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
            {/* Drawer End */}
          </Flex>
        </Flex>): <HamburgerMenu/>}
        {/* Top Navbar End */}
        {/* Search Section Starts */}
        <Box mt="10rem">
          <Heading
            as="h1"
            style={{
              color: "white",
              marginBottom: "2.5rem",
              fontFamily: "Roboto",
            }}
            fontSize={{sm:"44px",md:"44px",lg:"48px"}}
          >
            Home services, on demand.
          </Heading>
          <Flex  direction={{sm:"row",md:"row",lg:"row"}} gap="25px" w={{sm:"80%",md:"70%",lg:"50%"}} m="auto">
            <Box>
              <Popover>
              <PopoverTrigger >
                <Flex onClick={()=>gettingLocation()} className={styles.locationfield}>
                  <Image
                    width="20px"
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_template/images/supply/partner-app-supply/1661338258375-6c99b1.png"
                    alt="country_flag"
                  />
                  <Text>{cityname}</Text>
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
                      // height="100%"
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
                      size={{sm:"sm",md:"md",lg:"lg"}}
                    />
                  </InputGroup>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            </Box>
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
            <Link>
              <u>Women's Therapies</u>
            </Link>
            ,{" "}
            <Link>
              <u> Salon for men</u>
            </Link>
            ,
            <Link>
              <u> Men's Therapies</u>{" "}
            </Link>{" "}
            etc
          </Text>
        </Box>
        {/* Search Section End */}
        {/* Service Section-1 Cards Starts */}
        <Flex wrap="wrap" justify="center" className={styles.serviceCardSection1}>
          <Link to="/salon"><Box className={styles.serviceCard}>
            <Box>
              <Image
                width="32px"
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png"
                alt="services_image"
              />
            </Box>
            <Text fontSize="13px">Salon for women</Text>
          </Box>
          </Link>
          <Link to="/womenhair"><Box className={styles.serviceCard}>
            <Box>
              <Image
                width="32px"
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/supply/customer-app-supply/1635331606894-7b633f.png"
                alt="services_image"
              />
            </Box>
            <Text fontSize="13px">Hair, Skin & nails</Text>
          </Box></Link>
          <Link to="/mensalon">
          <Box className={styles.serviceCard}>
            <Box>
              <Image
                width="32px"
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png"
                alt="services_image"
              />
            </Box>
            <Text fontSize="13px">Salon for men</Text>
          </Box></Link>
          <Link to="/mentherapies">
          <Box className={styles.serviceCard}>
            <Box>
              <Image
                width="32px"
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png"
                alt="services_image"
              />
            </Box>
            <Text fontSize="13px">Men's therapies</Text>
          </Box></Link>
        </Flex>
        {/* Service Section-1 Cards End */}
      </Box>
      {/* Home Services Start */}
      <Box mt="8rem">
        <Heading as="h1" fontSize="32px" fontFamily="Roboto">
          Home Services
        </Heading>
        {/* Service Section-2 Cards Starts */}
        <Flex wrap="wrap" justify="center" className={styles.serviceCardSection2}>
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
      {isVisible == true || windowSize.innerWidth <640 ? (
        ""
      ) : (
        <Flex className={styles.scrollNavbar}>
          <Box flex={{sm:"3",md:"3",lg:"2"}}>
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
              <Input type="text" placeholder="Search for services" size="lg" />
            </InputGroup>
          </Box>
          <Flex gap={{md:"20px",lg:"1rem"}}>
            <Link to="/womentherapies">
            <Box className={styles.navbarServiceCards}>
              <Box>
                <Image
                  width="28px"
                  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png"
                  alt="services_image"
                />
              </Box>
              <Text fontSize="10px">Women's therapies</Text>
            </Box></Link>
            <Link to="/mensalon">
            <Box className={styles.navbarServiceCards}>
              <Box>
                <Image
                  width="28px"
                  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png"
                  alt="services_image"
                />
              </Box>
              <Text fontSize="10px">Salon for men</Text>
            </Box></Link>
            <Link to="/mentherapies">
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
            </Link>
          </Flex>
        </Flex>
      )}
      {/* Navbar which opens on scroll end */}
    </Box>
  );
};

export default HomeSection;
