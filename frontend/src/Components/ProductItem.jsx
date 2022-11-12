import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./ProductItem.module.css";

const ProductItem = ({packageName,
  prodId,
description,
rating,
views,
price,
time,
feature,
image,
benefits,benefitssec}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const token = useSelector((state) => {
    return state.reducer.token;
  });
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const handleAddtoCart =()=>{
    const payload = {
      title: description,
      price: price
    }
    axios.post("http://localhost:4000/addtocart",payload,config)
    .then(res => {
      console.log(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }
  return (
    <Box className={styles.productItemDiv} onClick={onOpen}>
      {/* Modal Start */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{description}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <Flex justify="space-between" p="1rem 1rem 0 1rem">
        <Stack>
          <Flex>
            <svg
              width="12px"
              viewBox="0 0 24 24"
              fill="#07794C"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.3 3H4.8A1.8 1.8 0 003 4.8v14.4A1.8 1.8 0 004.8 21h14.4a1.8 1.8 0 001.8-1.8V4.8A1.8 1.8 0 0019.2 3h-4.5v9L12 10.65 9.3 12V3z"
                fill="#07794C"
              ></path>
            </svg>
            <Text fontSize="12px" fontWeight="600" color="rgb(6, 153, 163)">
              PACKAGE
            </Text>
          </Flex>
          <Flex fontSize="16px" fontWeight="700" color="rgb(15, 15, 15)">
            {description}
          </Flex>
          <Flex>
            <svg
              width="12px"
              viewBox="0 0 24 24"
              fill="#545454"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.923 2.616a1 1 0 00-1.846 0l-2.41 5.795-6.257.502a1 1 0 00-.571 1.756l4.767 4.084-1.457 6.105a1 1 0 001.494 1.086L12 18.672l5.357 3.272a1 1 0 001.494-1.086l-1.457-6.105 4.767-4.084a1 1 0 00-.57-1.756l-6.257-.502-2.41-5.795z"
                fill="#545454"
              ></path>
            </svg>
            <Text fontSize="12px" color="rgb(15, 15, 15)">
              {rating} {views}
            </Text>
          </Flex>
          <Flex>
            <Text fontSize="12px" fontWeight="600" color="rgb(15, 15, 15)">
              {price}
            </Text>
            <svg
              width="16px"
              viewBox="0 0 24 24"
              fill="#545454"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" fill="#545454"></path>
            </svg>
            <Text color="rgb(84, 84, 84)" fontSize="12px">
              {time}
            </Text>
          </Flex>
        </Stack>
        <VStack spacing="2px">
          {image?(<Image
            width="96px"
            borderRadius="10px"
            src={image}
            alt="serviceImage"
          />):""}
          <Button color="rgb(110, 66, 229)" variant="outline" size="sm" onClick={handleAddtoCart}>
            Add
          </Button>
          <Text color="rgb(117, 117, 117)" fontSize="12px">
            4 options
          </Text>
        </VStack>
      </Flex>
      <Box
        style={{
          backgroundColor: "rgb(176, 176, 176)",
          height: "1px",
          width: "70%",
          marginBottom: "5px",
        }}
      ></Box>
      <Stack spacing="2px">
        <Flex><svg
          width="16px"
          viewBox="0 0 24 24"
          fill="#545454"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" fill="#545454"></path>
        </svg>
        <Text color="rgb(84, 84, 84)" fontSize="12px">
          {feature}
        </Text></Flex>
        {(benefits !== "Add")?(<Flex><svg
          width="16px"
          viewBox="0 0 24 24"
          fill="#545454"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" fill="#545454"></path>
        </svg><Text color="rgb(84, 84, 84)" fontSize="12px">
          {benefits}
        </Text></Flex>):""}
       {benefitssec?( <Flex><svg
          width="16px"
          viewBox="0 0 24 24"
          fill="#545454"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" fill="#545454"></path>
        </svg><Text color="rgb(84, 84, 84)" fontSize="12px">
          {benefitssec}
        </Text></Flex>):""}
      </Stack>

          </ModalBody>
        </ModalContent>
      </Modal>
      {/* Modal End  */}
      <Flex justify="space-between" p="1rem 1rem 0 1rem">
        <Stack>
          <Flex>
            <svg
              width="12px"
              viewBox="0 0 24 24"
              fill="#07794C"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.3 3H4.8A1.8 1.8 0 003 4.8v14.4A1.8 1.8 0 004.8 21h14.4a1.8 1.8 0 001.8-1.8V4.8A1.8 1.8 0 0019.2 3h-4.5v9L12 10.65 9.3 12V3z"
                fill="#07794C"
              ></path>
            </svg>
            <Text fontSize="12px" fontWeight="600" color="rgb(6, 153, 163)">
              PACKAGE
            </Text>
          </Flex>
          <Flex fontSize="16px" fontWeight="700" color="rgb(15, 15, 15)">
            {description}
          </Flex>
          <Flex>
            <svg
              width="12px"
              viewBox="0 0 24 24"
              fill="#545454"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.923 2.616a1 1 0 00-1.846 0l-2.41 5.795-6.257.502a1 1 0 00-.571 1.756l4.767 4.084-1.457 6.105a1 1 0 001.494 1.086L12 18.672l5.357 3.272a1 1 0 001.494-1.086l-1.457-6.105 4.767-4.084a1 1 0 00-.57-1.756l-6.257-.502-2.41-5.795z"
                fill="#545454"
              ></path>
            </svg>
            <Text fontSize="12px" color="rgb(15, 15, 15)">
              {rating} {views}
            </Text>
          </Flex>
          <Flex>
            <Text fontSize="12px" fontWeight="600" color="rgb(15, 15, 15)">
              {price}
            </Text>
            <svg
              width="16px"
              viewBox="0 0 24 24"
              fill="#545454"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" fill="#545454"></path>
            </svg>
            <Text color="rgb(84, 84, 84)" fontSize="12px">
              {time}
            </Text>
          </Flex>
        </Stack>
        <VStack spacing="2px">
          {image?(<Image
            width="96px"
            borderRadius="10px"
            src={image}
            alt="serviceImage"
          />):""}
          <Button color="rgb(110, 66, 229)" variant="outline" size="sm">
            Add
          </Button>
          <Text color="rgb(117, 117, 117)" fontSize="12px">
            4 options
          </Text>
        </VStack>
      </Flex>
      <Box
        style={{
          backgroundColor: "rgb(176, 176, 176)",
          height: "1px",
          width: "70%",
          marginBottom: "5px",
        }}
      ></Box>
      <Flex>
        <svg
          width="16px"
          viewBox="0 0 24 24"
          fill="#545454"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" fill="#545454"></path>
        </svg>
        <Text color="rgb(84, 84, 84)" fontSize="12px">
          {feature}
        </Text>
      </Flex>
      <Flex m="10px">
        <Text color="rgb(110, 66, 229)" fontSize="14px" fontWeight="600">
          View Details
        </Text>
      </Flex>
    </Box>
  );
};
export default ProductItem;
