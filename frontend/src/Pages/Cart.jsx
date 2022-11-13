import { Box, Button, Heading, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { saveData } from "../utils/localStorage";
import { AddIcon, ArrowBackIcon, MinusIcon } from "@chakra-ui/icons";

function Cart() {
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);
  const token = useSelector((state) => {
    return state.reducer.token;
  });
  // console.log(token)
  const toast = useToast();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const getCartProd = () => {
    axios
      .get("https://care-at-home.onrender.com/cart", config)
      .then((res) => {
        // console.log(res.data);
        setCartData(res.data);
        gettotal(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const incQuantity = (id) => {
    axios
      .patch(
        `https://care-at-home.onrender.com/cart/inc/${id}`,
        "noPayload",
        config
      )
      .then((res) => {
        console.log(res.data);
        toast({
          title: res.data,
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => getCartProd())
      .then(() => gettotal(cartData));
  };
  const decQuantity = (id) => {
    axios
      .patch(
        `https://care-at-home.onrender.com/cart/dec/${id}`,
        "noPayload",
        config
      )
      .then((res) => {
        console.log(res.data);
        toast({
          title: res.data,
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => getCartProd())
      .then(() => gettotal(cartData));
  };
  const gettotal = (data) => {
    var sum = 0;
    if (data.length !== 0) {
      for (var i = 0; i < data.length; i++) {
        sum += data[i].price * data[i].quantity;
      }
      setTotal(sum);
      saveData("total", sum);
    }
    // return;
  };
  useEffect(() => {
    getCartProd();
  }, []);

  return (
    <Box id={styles.cartwindow}>
      <Heading textAlign={"left"} style={{ fontFamily: "Roboto" }}>
        {" "}
        <Link to="/salon">
          <ArrowBackIcon style={{ backgroundColor: "white" }} mr="20px" />
        </Link>
        Summary
      </Heading>
      <br />
      <hr />

      <Box id={styles.cartbox}>
        <Box>
          {/* <hr /> */}
          <br />
          {cartData?.map((elem) => (
            <>
              <br />
              <Box className={styles.cartprod}>
                <Box>{elem.title}</Box>
                <Box id={styles.qtybox}>
                  <button
                    bgColor="#F1D2D2"
                    onClick={() => decQuantity(elem._id)}
                  >
                    <MinusIcon />
                  </button>
                  <Box>{elem.quantity}</Box>
                  <button
                    bgColor="#F1D2D2"
                    onClick={() => incQuantity(elem._id)}
                  >
                    <AddIcon />
                  </button>
                </Box>
                <Box>₹{elem.price * elem.quantity}</Box>
              </Box>
              <hr />
            </>
          ))}

          <br />
          <Box className={styles.cartprod}>
            <Box>Plus membership</Box>
            <Button
              className={styles.removeBut}
              position={"absolute"}
              right="20%"
            >
              Remove
            </Button>
            <Box>₹299</Box>
          </Box>
        </Box>
        <Box id={styles.paySum}>
          <Heading fontSize={26} style={{ fontFamily: "Roboto" }}>
            Payment Summary
          </Heading>
          <br />
          <Box>
            <p>Item total</p> <p>{total}</p>
          </Box>
          <Box>
            <p>Item discount</p> <Text color="green">-218</Text>
          </Box>
          <Box>
            <p>Membership Discount</p> <Text color="green">-150</Text>
          </Box>
          <Box>
            <p>Taxes and fee</p> <p>69</p>
          </Box>
          <Box>
            <p>Plus Membership</p> <p>299</p>
          </Box>
          <hr />
          <Box>
            <b>Total</b> <b>₹ {total - 218 - 150 + 69 + 299}</b>
          </Box>
          <Box display="flex" flexDir="row-reverse">
            <Link to="/payments">
              {" "}
              <Button
                bg="rgb(110, 66, 229)"
                color={"white"}
                _hover={{ backgroundColor: "rgb(120, 79, 232)" }}
              >{` Proceed to Payments`}</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;
