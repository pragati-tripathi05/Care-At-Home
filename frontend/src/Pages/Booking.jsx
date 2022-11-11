import React, { useState } from "react";
import { Button, Flex } from "@chakra-ui/react";
import "./Booking.css";

const Booking = () => {
  const [theme, setTheme] = useState();

  const toggleTheme = () => {
    setTheme((curr) => (theme === curr ? "dark" : "light"));
  };

  return (
    <div className="body">
      <h3>My Bookings</h3>
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
      <div>You don't have any projects right now</div>
      <br />
      <Button
        id="book"
        fontFamily={
          "axiforma-regular,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;"
        }
      >
        BOOK A SERVICE
      </Button>
    </div>
  );
};

export default Booking;
