import React, { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import "./Booking.css";
const Booking = () => {
  const [theme, setTheme] = useState();

  const toggleTheme = () => {
    setTheme((curr) => (theme === curr ? "dark" : "light"));
  };

  return (
    <div>
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

      <Flex
        border={"1px solid black"}
        m={"auto"}
        marginBottom={"150px"}
        w={"200px"}
      >
        <Button
          className="Ongoing"
          id="dark"
          onClick={() => toggleTheme}
          fontFamily={
            "axiforma-regular,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;"
          }
        >
          ONGOING
        </Button>
        <Button
          className="History"
          id="light"
          onClick={() => toggleTheme}
          fontFamily={
            "axiforma-regular,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;"
          }
        >
          HISTORY
        </Button>
      </Flex>
      <Text>You don't have any projects right now</Text>
      <br />
      <Button
        id="book"
        fontFamily={
          "axiforma-regular,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;"
        }
        pr={"30px"}
        pl={"30px"}
        pt={"12px"}
        pb={"12px"}
      >
        BOOK A SERVICE
      </Button>
    </div>
  );
};

export default Booking;
