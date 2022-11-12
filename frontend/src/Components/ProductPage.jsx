import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import styles from "./ProductPage.module.css";
import axios from "axios";

const ProductPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios("http://localhost:4000/salon")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box>
      {/* Product's Page Top Section Start */}
      <Flex
        // className={styles.productsPageTopDiv}
        height="70vh"
        width="80%"
        m="auto"
        wrap="wrap"
        justify="space-between"
        p="3rem 0"
      >
        <Flex direction="column" align="center" justify="center">
          <Stack spacing="0.5rem">
            <Flex>
              <Button
                size="sm"
                leftIcon={
                  <svg
                    width="16px"
                    viewBox="0 0 24 24"
                    fill=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 .97l9 2.25V12a7 7 0 01-2.8 5.6L12 22.25 5.8 17.6A7 7 0 013 12V3.22l9-2.25zm4.36 6.262L11 11.698 8.64 9.732l-1.28 1.536 3 2.5a1 1 0 001.28 0l6-5-1.28-1.536z"
                      fill="#0F0F0F"
                    ></path>
                  </svg>
                }
                variant="outline"
              >
                UC Safe
              </Button>
            </Flex>
            <Flex>
              <Heading as="h1">Salon Prime</Heading>
            </Flex>
            <Flex fontSize="12px">
              <svg
                width="16px"
                viewBox="0 0 24 24"
                fill="#545454"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.923 2.616a1 1 0 00-1.846 0l-2.41 5.795-6.257.502a1 1 0 00-.571 1.756l4.767 4.084-1.457 6.105a1 1 0 001.494 1.086L12 18.672l5.357 3.272a1 1 0 001.494-1.086l-1.457-6.105 4.767-4.084a1 1 0 00-.57-1.756l-6.257-.502-2.41-5.795z"
                  fill="#545454"
                ></path>
              </svg>
              <Text> 4.76(978k)</Text>
            </Flex>
            <Flex>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                fill="#545454"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#545454"
                  fill-rule="evenodd"
                  d="M11 2h1.5a1.001 1.001 0 011 1v10.5a1.002 1.002 0 01-1 1h-9a1.001 1.001 0 01-1-1V3a1.001 1.001 0 011-1H5v-.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V2zm-1 0H6v1.5h4V2zm.405 3.638l-3.322 3.17-1.488-1.42-.69.724 1.833 1.75a.5.5 0 00.69 0l3.667-3.5-.69-.724z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <Text fontSize="12px">
                569,291 bookings in Delhi NCR this year{" "}
              </Text>
            </Flex>
          </Stack>
        </Flex>
        <Flex
          // className={styles.videoDiv}
          flex="0.7"
          overflow="hidden"
          borderRadius="5px"
        >
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/CLdJNMQBLOI"
            title="Urban Company | Salon at Home"
            allow="accelerometer; autoplay;"
          ></iframe>
        </Flex>
      </Flex>
      <Box
        style={{
          backgroundColor: "rgb(237, 237, 237)",
          height: "4px",
          width: "80%",
          margin: "auto",
        }}
      ></Box>
      {/* Product's Page Top Section End */}
      {/* Products Start */}
      <Flex
        // className={styles.productsPageBottomDiv}
        height="50vh"
        justify="space-between"
        borderTop="1px solid gainsboro"
        width="80%"
        m="1rem auto"
      >
        <VStack
          // className={styles.productsDiv}
          overflowY="scroll"
          width="60%"
          borderRight="1px solid gainsboro"
        >
          {data.map((elem) => (
            <ProductItem
              key={elem._id}
              packageName={elem.package}
              description={elem.description}
              rating={elem.rating}
              views={elem.views}
              price={elem.price}
              time={elem.time}
              feature={elem.feature}
              image={elem.image}
              benefits={elem.benefits}
              benefitssec={elem.benefitssec}
            />
          ))}
        </VStack>
        <VStack
          // className={styles.offersDiv}
          width="40%"
          p="1rem 1rem 1rem 3rem"
        >
          <Flex
            // className={styles.offersItem}
            width="100%"
            gap="0.5rem"
            backgroundColor="rgb(245, 245, 245)"
            cursor="pointer"
            borderRadius="5px"
            p="10px 5rem 10px 0"
          >
            <Box p="2px 0 0 10px">
              <svg
                width="16px"
                viewBox="0 0 16 16"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="7" fill="#6E43E5"></circle>
                <path
                  d="M12 8c0 .402-.238.767-.606.929l-.225.099a4.175 4.175 0 00-2.141 2.14l-.099.226a1.015 1.015 0 01-1.858 0l-.099-.225a4.175 4.175 0 00-2.14-2.141l-.226-.099a1.015 1.015 0 010-1.858l.225-.099a4.174 4.174 0 002.141-2.14l.099-.226a1.015 1.015 0 011.858 0l.099.225a4.175 4.175 0 002.14 2.141l.226.099c.368.162.606.527.606.929z"
                  fill="#fff"
                ></path>
              </svg>
            </Box>
            <Stack spacing="1px">
              <Flex fontSize="12px" fontWeight="700">
                Save 15% on every order
              </Flex>
              <Flex fontSize="12px" color="rgb(117, 117, 117)">
                Get Plus now
              </Flex>
            </Stack>
          </Flex>
          <Flex
            // className={styles.offersItem}
            width="100%"
            gap="0.5rem"
            backgroundColor="rgb(245, 245, 245)"
            cursor="pointer"
            borderRadius="5px"
            p="10px 5rem 10px 0"
          >
            <Box p="2px 0 0 10px">
              <svg
                width="16px"
                viewBox="0 0 16 16"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  fill="#24A346"
                ></path>
              </svg>
            </Box>
            <Stack spacing="1px">
              <Flex fontSize="12px" fontWeight="700">
                Mobikwik | ZIP (Pay Later)
              </Flex>
              <Flex fontSize="12px" color="rgb(117, 117, 117)">
                Get 5% assured cashback
              </Flex>
            </Stack>
          </Flex>
          <Flex
            // className={styles.offersItem}
            width="100%"
            gap="0.5rem"
            backgroundColor="rgb(245, 245, 245)"
            cursor="pointer"
            borderRadius="5px"
            p="10px 5rem 10px 0"
          >
            <Box p="2px 0 0 10px">
              <svg
                width="16px"
                viewBox="0 0 16 16"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  fill="#24A346"
                ></path>
              </svg>
            </Box>
            <Stack spacing="1px">
              <Flex fontSize="12px" fontWeight="700">
                5% Simpl cashback up to ₹750
              </Flex>
              <Flex fontSize="12px" color="rgb(117, 117, 117)">
                Get up to Rs.750 cashback
              </Flex>
            </Stack>
          </Flex>
          <Flex
            //  className={styles.offersItem}
            width="100%"
            gap="0.5rem"
            backgroundColor="rgb(245, 245, 245)"
            cursor="pointer"
            borderRadius="5px"
            p="10px 5rem 10px 0"
          >
            <Box p="2px 0 0 10px">
              <svg
                width="16px"
                viewBox="0 0 16 16"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  fill="#24A346"
                ></path>
              </svg>
            </Box>
            <Stack spacing="1px">
              <Flex fontSize="12px" fontWeight="700">
                Upto 200 cashback{" "}
              </Flex>
              <Flex fontSize="12px" color="rgb(117, 117, 117)">
                on Amazon Pay{" "}
              </Flex>
            </Stack>
          </Flex>
        </VStack>
      </Flex>
      {/* Products End */}
    </Box>
  );
};

export default ProductPage;
