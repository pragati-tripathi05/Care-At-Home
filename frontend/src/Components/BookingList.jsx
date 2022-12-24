import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBookings } from "../Redux/AppReducer/action";
import "./BookingList.css";

import {
  Tabs,
  TabList,
  Tab,
  Button,
  Text,
  Box,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SimpleGrid } from "@chakra-ui/react";

// import Logo from "../Assets/care@home_logo.png";
const BookingList = () => {
  const data = useSelector((store) => store.AppReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookings());
  }, []);

  console.log("After useEffect", data);

  const headingArr = [
    {
      heading: "Saloon for Women",
      msg: "A verified professional will be assigned to you one hour prior to the scheduled time. You will be notified through SMS & Email.",
    },
    // heading: "Saloon for Men",
    // heading: "Women's Therapies",
    // heading: "Men's Therapies",
    // heading: "Saloon Classic",
    // heading: "Hair studio for Women",
    // heading: "Hair studio for Men",
    // heading: "Saloon Prime",
  ];

  return (
    <>
      <Box className="mybooking_div">
        <Box className="B_tab">
          <Text
            fontWeight={"bold"}
            fontFamily={
              "axiforma-regular,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;"
            }
            fontSize={"20px"}
          >
            My Bookings
          </Text>
          <br />
          <Tabs variant="unstyled"  h='130px'>
            <TabList
              className="tablist"
              m={"auto"}
              outline={"1px solid black"}
              w={"223px"}
              mb={"150px"}
            >
              <Tab
                _selected={{ color: "white", bg: "black", fontWeight: "bold" }}
                style={{
                  fontSize: "18px",
                }}
                fontFamily={
                  "axiforma-regular,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;"
                }
              >
                ONGOING
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "black", fontWeight: "bold" }}
                style={{
                  fontSize: "18px",
                }}
                fontFamily={
                  "axiforma-regular,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;"
                }
              >
                HISTORY
              </Tab>
            </TabList>
          </Tabs>
          {/* 
          <div id="mapping">
            {data?.map((ele) => (
              <div id="card" key={ele._id}>
                <img src={ele.image} width={"200px"} />
                <div id="bold">{ele.title}</div>
                <div>{ele.price}</div>
                <div>{ele.quantity}</div>
              </div>
            ))}
          </div> */}

         
          <SimpleGrid minChildWidth="120px" spacing="40px">
                <Box
                  bg="white"
                  height="250px"
                  boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                  borderRadius="base-line"
                >
                  <HStack mt="2">
                    <Text pl="2" fontFamily="Roboto" fontWeight="bold">
                      Salon Prime
                    </Text>
                    <Spacer />
                    <Text
                      color="white"
                      bg="#4caf50"
                      p="1"
                      fontSize="13px"
                      fontFamily="Roboto"
                    >
                      REQUEST ONGOING
                    </Text>
                  </HStack>
                  <Text
                    color="grey"
                    fontSize="16px"
                    fontFamily="Roboto"
                    fontWeight="hairline"
                    align="left"
                    p="2"
                  >
                    Sun, Dec 25th at 7.30 PM
                  </Text>
                  <hr />
                  <Text
                    color="grey"
                    fontSize="16px"
                    fontFamily="Roboto"
                    fontWeight="hairline"
                    align="left"
                    p="3"
                    mt="4"
                    mb="4"
                  >
                    A verified professional will be assigned to you one hour
                    prior to the scheduled time. You will be notified through
                    SMS & Email.
                  </Text>
                
                  <Link to="/bookingdetails">
                    <Button w="100%" p="6" bg="black" color="white">
                      View Booking
                    </Button>
                  </Link>
                </Box>
                <Box
                  bg="white"
                  height="250px"
                  boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                  borderRadius="base-line"
                >
                  <HStack mt="2">
                    <Text pl="2" fontFamily="Roboto" fontWeight="bold">
                      Salon Classic
                    </Text>
                    <Spacer />
                    <Text
                      color="white"
                      bg="#4caf50"
                      p="1"
                      fontSize="13px"
                      fontFamily="Roboto"
                    >
                      REQUEST ONGOING
                    </Text>
                  </HStack>
                  <Text
                    color="grey"
                    fontSize="16px"
                    fontFamily="Roboto"
                    fontWeight="hairline"
                    align="left"
                    p="2"
                  >
                    Sun, Dec 25th at 7.30 PM
                  </Text>
                  <hr />
                  <Text
                    color="grey"
                    fontSize="16px"
                    fontFamily="Roboto"
                    fontWeight="hairline"
                    align="left"
                    p="3"
                    mt="4"
                    mb="4"
                  >
                    A verified professional will be assigned to you one hour
                    prior to the scheduled time. You will be notified through
                    SMS & Email.
                  </Text>
                 

                  <Link to="/bookingdetails">
                    <Button w="100%" p="6" bg="black" color="white">
                      View Booking
                    </Button>
                  </Link>
                </Box>

                
                <Box
                  bg="white"
                  height="250px"
                  boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                  borderRadius="base-line"
                >
                  <HStack mt="2">
                    <Text pl="2" fontFamily="Roboto" fontWeight="bold">
                      Hair studio for Men
                    </Text>
                    <Spacer />
                    <Text
                      color="white"
                      bg="#4caf50"
                      p="1"
                      fontSize="13px"
                      fontFamily="Roboto"
                    >
                      REQUEST ONGOING
                    </Text>
                  </HStack>
                  <Text
                    color="grey"
                    fontSize="16px"
                    fontFamily="Roboto"
                    fontWeight="hairline"
                    align="left"
                    p="2"
                  >
                    Sun, Dec 25th at 7.30 PM
                  </Text>
                  <hr />
                  <Text
                    color="grey"
                    fontSize="16px"
                    fontFamily="Roboto"
                    fontWeight="hairline"
                    align="left"
                    p="3"
                    mt="4"
                    mb="4"
                  >
                    A verified professional will be assigned to you one hour
                    prior to the scheduled time. You will be notified through
                    SMS & Email.
                  </Text>
                  {/* <br/> */}

                  <Link to="/bookingdetails">
                    <Button w="100%" p="6" bg="black" color="white">
                      View Booking
                    </Button>
                  </Link>
                </Box>
              </SimpleGrid>
           
         

          <br />
          <Link to="/">
            <Button
              id="book"
              fontFamily="axiforma-regular,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;"
              color={"white"}
              bg={"black"}
              pr={"30px"}
              pl={"30px"}
              pt={"12px"}
              pb={"12px"}
            >
              BOOK A SERVICE
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default BookingList;
