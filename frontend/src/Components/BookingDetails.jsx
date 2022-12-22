import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ArrowBackIcon, SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { ButtonGroup, Spacer, Button } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
const BookingDetails = () => {
  return (
    <div className="bookingDetails">
      <Grid
        templateAreas={`"header header"
                    "nav main"
                    "footer main"`}
        gridTemplateRows={"70px 1fr 200px"}
        gridTemplateColumns={"650px 1fr"}
        h="500px"
        gap="6"
        color="blackAlpha.700"
        fontWeight="bold"
        fontSize="25px"
        boxShadow={
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
        }
        borderRadius="base-line"
        // box-shadow = "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      >
        <GridItem pl="2" bg="white" area={"header"}>
          <Flex minWidth="max-content" alignItems="center" gap="2">
            <Box
              textAlign={"left"}
              style={{ fontFamily: "Roboto", color: "black" }}
            >
              {" "}
              <Link to="/salon">
                <ArrowBackIcon
                  style={{ backgroundColor: "white", color: "black" }}
                  mr="20px"
                />
              </Link>
              Salon Prime
              <Text
                color="grey"
                fontSize="16px"
                fontFamily="Roboto"
                fontWeight="hairline"
                ml="45px"
              >
                Sun, Dec 25th at 7.30 PM
              </Text>
            </Box>

            <Spacer />
            <ButtonGroup gap="2" mr="10px">
              <Button
                colorScheme="white"
                color="blue"
                boxShadow={
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                }
              >
                Help
              </Button>
              <Button
                colorScheme="white"
                color="red"
                boxShadow={
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                }
              >
                SOS
              </Button>
            </ButtonGroup>
          </Flex>
        </GridItem>
        {/* *************************************************************** */}
        <GridItem bg="white" area={"nav"}>
          <Text
            color="green"
            fontSize="16px"
            fontFamily="Roboto"
            fontWeight={"semibold"}
            align="left"
            ml="45px"
            mt="3"
          >
            Booking accepted
          </Text>
          <br />

          <Text
            color="black"
            fontSize="16px"
            fontFamily="Roboto"
            fontWeight="bold"
            ml="25px"
            align="left"
          >
            Finding a professional
          </Text>
          <Flex>
            <Text
              color="grey"
              fontSize="14px"
              fontFamily="Roboto"
              fontWeight="hairline"
              ml="25px"
              align="left"
            >
              A beautician will be assigned 60 minutes before booking time.
            </Text>
            <Spacer />
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              mr="10px"
              icon={<SearchIcon />}
            />
          </Flex>

          <hr />
          <Flex>
            <Text
              color="grey"
              fontSize="14px"
              fontFamily="Roboto"
              fontWeight="hairline"
              ml="25px"
              mt="8px"
              align="left"
            >
              Next:{" "}
            </Text>
            <Text
              color="black"
              fontSize="14px"
              fontFamily="Roboto"
              fontWeight="hairline"
              mt="8px"
              ml="5px"
            >
              Assigning professional
            </Text>
          </Flex>
        </GridItem>
        {/* ******************************************************************* */}
        <GridItem pl="2" bg="white" area={"main"}>
          <Text
            textAlign={"left"}
            style={{ fontFamily: "Roboto", color: "black" }}
            mt="10px"
            ml="8px"
            fontSize="23px"
          >
            Booking Details
          </Text>
          <Text
            color="black"
            fontSize="13px"
            fontFamily="Roboto"
            fontWeight="hairline"
            align="left"
            ml="45px"
            mt="3"
            mb="3"
          >
            Amount to pay: $5,257
          </Text>
          <hr />
          <Text
            color="black"
            fontSize="13px"
            fontFamily="Roboto"
            fontWeight="hairline"
            align="left"
            ml="45px"
            mt="3"
            mb="3"
          >
            5/67, Jail Rd, Nangal village, Delhi contonment, New Delhi, Delhi
            110010, India
          </Text>
          <hr />
          <Text
            color="black"
            fontSize="13px"
            fontFamily="Roboto"
            fontWeight="hairline"
            align="left"
            ml="45px"
            mt="3"
            mb="3"
          >
            Sun, Dec 25th at 7.30 PM
          </Text>

          <HStack ml="45px" mb="6">
            <Button
              color="blue"
              bg="white"
              border="ButtonFace"
              boxShadow={
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
              }
            >
              Reschedule
            </Button>
            <Button
              color="red"
              bg="white"
              boxShadow={
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
              }
            >
              Cancel Booking
            </Button>
          </HStack>
          <hr />

          <Text
            color="black"
            fontSize="16px"
            fontFamily="Roboto"
            fontWeight={"semibold"}
            align="left"
            ml="45px"
            mt="3"
          >
            Cancellation policy
          </Text>

          <Text
            color="grey"
            fontSize="14px"
            fontFamily="Roboto"
            fontWeight="hairline"
            ml="25px"
            align="left"
            mt="3"
          >
            {" "}
            No charge if you reschedule or cancel until 3 hours before the
            service
          </Text>

          <Text
            color="grey"
            fontSize="14px"
            fontFamily="Roboto"
            fontWeight="hairline"
            ml="25px"
            align="left"
            mt="3"
          >
            After that a cancellation/reschedule fee of rs.200 will apply if
            professional is assigned
          </Text>
        </GridItem>
        {/* ******************************************************************* */}
        <GridItem pl="2" bg="#edf7f2" area={"footer"}>
          <Box>
            <Button colorScheme="whatsapp" mt="8px" leftIcon={<FaWhatsapp />}>
              Whatsapp
            </Button>
          </Box>
          <br />
          <Text
            color="black"
            fontSize="16px"
            fontFamily="Roboto"
            fontWeight="hairline"
          >
            Are you on Whatsapp?
          </Text>
          <Text
            color="grey"
            fontSize="14px"
            fontFamily="Roboto"
            fontWeight="hairline"
            mt="3px"
          >
            Subscribe and never miss a service update
          </Text>

          <Button bgColor="white" mt="3px">
            Yes, connect now
          </Button>
        </GridItem>
      </Grid>
    </div>
  );
};

export default BookingDetails;
