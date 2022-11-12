import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Cart() {
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);
  const token = useSelector((state) => {
    return state.reducer.token;
  });
  // console.log(token)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const getCartProd = () => {
    axios
      .get("http://localhost:4000/cart", config)
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
      .patch(`http://localhost:4000/cart/inc/${id}`, "noPayload", config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => getCartProd())
      .then(() => gettotal(cartData));
  };
  const decQuantity = (id) => {
    axios
      .patch(`http://localhost:4000/cart/dec/${id}`, "noPayload", config)
      .then((res) => {
        console.log(res.data);
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
    }
    // return;
  };
  useEffect(() => {
    getCartProd();
  }, []);

  return (
    <Box w="80%" m="auto" mt="30px">
      <Heading textAlign={"left"}  style={{fontFamily:'Roboto'}}>Summary</Heading>
      <br />
      <hr />

      <Box id={styles.cartbox}>
        <Box w="58%">
          {/* <Box padding={"15px 30px"}>
            You are saving a total of 935 on this total
          </Box> */}
          <br />
          {/* <hr /> */}
          <br />
          {cartData?.map((elem) => (
            <Box className={styles.cartprod}>
              <Box>{elem.title}</Box>
              <Box id={styles.qtybox}>
                <button bgColor="#F1D2D2" onClick={() => decQuantity(elem._id)}>
                  -
                </button>
                <Box>{elem.quantity}</Box>
                <button bgColor="#F1D2D2" onClick={() => incQuantity(elem._id)}>
                  +
                </button>
              </Box>
              <Box>₹{elem.price * elem.quantity}</Box>
            </Box>
          ))}
          <hr />
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
        <Box w="38%" id={styles.paySum}>
          <Heading fontSize={26}  style={{fontFamily:'Roboto'}}>Payment Summary</Heading>
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
         <Link to="/payments"> <Button ml="65%" bg="rgb(110, 66, 229)" color={"white"}>{` Go to Payments`}</Button></Link>
        </Box>
        
      </Box>
    </Box>
  );
}

export default Cart;
