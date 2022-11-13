import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBookings } from "../Redux/AppReducer/action";
import "./BookingList.css";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Text,
} from "@chakra-ui/react";

const BookingList = () => {
  const data = useSelector((store) => store.AppReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookings());
  }, []);

  console.log("After useEffect", data);
  return (
    <>
      <div className="mybooking_div">
        <div className="B_tab">
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
          <Tabs variant="unstyled">
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
         
          <div id="mapping">
            {data?.map((ele) => (
              <div id="card" key={ele._id}>
                <img src={ele.image} width={"200px"} />
                <div id="bold">{ele.title}</div>
                <div>{ele.price}</div>
                <div>{ele.quantity}</div>
              </div>
            ))}
          </div>
          <Text
            fontFamily={
              "axiforma-regular,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;"
            }
            fontSize={"18px"}
          >
            {!data?
           " You don't have any projects right now" :null }
          
            
          </Text>

         
        
          <br />
          <Button
            id="book"
            fontFamily={
              "axiforma-regular,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;"
            }
            color={"white"}
            bg={"black"}
            pr={"30px"}
            pl={"30px"}
            pt={"12px"}
            pb={"12px"}
          >
            BOOK A SERVICE
          </Button>
        </div>
      </div>
    </>
  );
};

export default BookingList;
