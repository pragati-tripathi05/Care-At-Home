import { Box, Button, Flex, HStack, Spacer, Stack, StackDivider, Text, VStack } from '@chakra-ui/react'
import React from 'react';
import "./Payments.css";
import {  ArrowBackIcon,ChevronRightIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';

const Payments = () => {
  return (
    <div style={{backgroundColor:"#e5e5e5"}}>
      <div className='contain'>
        <Box className=  'title'>
          <Stack direction={['column', 'row']} spacing='25px'  align='stretch' style={{backgroundColor:"white"}}  p={1}>
            <Box p={1} style={{backgroundColor:"white"}}>
              <Link to="/cart">
                <ArrowBackIcon  style={{backgroundColor:"white"}} />
              </Link>
            </Box>
            <Box  align='stretch'>
              <p>Select payment method</p>
              <Text className='amount'>Amount to pay : ₹ 1,816</Text>
            </Box>
          </Stack>
        </Box>
        <StackDivider borderColor='gray.200' />
      <br/>
      <br/>
      <br/>
  
        <VStack spacing={2} align='stretch'  style={{marginTop:"1%"}}>
          <Box h='100px' className='card'>
          <Box>
              <Text fontSize='xl' style={{backgroundColor:"white", fontWeight:"bold"}}>
                Debit or Credit Card </Text>  
                <Flex>
                  <HStack spacing={5}   style={{backgroundColor:"white"}}>
                    <img src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category,q_auto:low,f_auto,dpr_1.5125000476837158/images/monet/customer-app-monet/1622015769641-3fc187.png' alt='card' width="15%"  style={{backgroundColor:"white"}} />  
                    <Box style={{backgroundColor:"white"}}>Add a card</Box>
                  </HStack>
                  <Spacer  style={{backgroundColor:"white"}}/>
                  <Box style={{backgroundColor:"white"}}> <ChevronRightIcon  style={{backgroundColor:"white"}}/> </Box>
                </Flex>
            </Box>
          </Box>
        
          <Box h='100px' className='card'>
          <Box>
              <Text fontSize='xl' style={{backgroundColor:"white", fontWeight:"bold"}}>
                Wallet </Text>  
                <Flex>
                  <HStack spacing={5}   style={{backgroundColor:"white"}}>
                    <img src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category,q_auto:low,f_auto,dpr_1.5125000476837158/images/monet/customer-app-monet/1622035139912-c6c7d1.png' alt='card' width="15%"  style={{backgroundColor:"white"}} />  
                    <Box style={{backgroundColor:"white"}}>PayTm</Box>
                  </HStack>
                  <Spacer  style={{backgroundColor:"white"}}/>
                  <Box style={{backgroundColor:"white"}}> <ChevronRightIcon  style={{backgroundColor:"white"}}/> </Box>
                </Flex>
            </Box>
          </Box>

          <Box h='100px' className='card'>
          <Box>
              <Text fontSize='xl' style={{backgroundColor:"white", fontWeight:"bold"}}>
                UPI </Text>  
                <Flex>
                  <HStack spacing={5}   style={{backgroundColor:"white"}}>
                    <img src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category,q_auto:low,f_auto,dpr_1.5125000476837158/images/monet/customer-app-monet/1622035138755-c9ea9d.png' alt='card' width="15%"  style={{backgroundColor:"white"}} />  
                    <Box style={{backgroundColor:"white"}}>Pay via another UPI ID</Box>
                  </HStack>
                  <Spacer  style={{backgroundColor:"white"}}/>
                  <Box style={{backgroundColor:"white"}}> <ChevronRightIcon  style={{backgroundColor:"white"}}/> </Box>
                </Flex>
            </Box>
          </Box>

          <Box h='100px' className='card'>
          <Box>
              <Text fontSize='xl' style={{backgroundColor:"white", fontWeight:"bold"}}>
                Net Banking </Text>  
                <Flex>
                  <HStack spacing={5}   style={{backgroundColor:"white"}}>
                    <img src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category,q_auto:low,f_auto,dpr_1.5125000476837158/images/monet/customer-app-monet/1622015760056-139840.png' alt='card' width="15%"  style={{backgroundColor:"white"}} />  
                    <Box style={{backgroundColor:"white"}}>See all banks</Box>
                  </HStack>
                  <Spacer  style={{backgroundColor:"white"}}/>
                  <Box style={{backgroundColor:"white"}}> <ChevronRightIcon  style={{backgroundColor:"white"}}/> </Box>
                </Flex>
            </Box>
          </Box>
          

          <Box h='200px' className='card'>
          <Box>
              <Text fontSize='xl' style={{backgroundColor:"white", fontWeight:"bold"}}>
                Pay After Service </Text>  
                <p style={{backgroundColor:"white", color:"#ebbf6d"}}>Unavailable due to subscription purchase</p>
                <Flex>
                  <HStack spacing={5}   style={{backgroundColor:"white"}}>
                    <img src='https://res.cloudinary.com/urbanclap/image/upload/o_40/t_high_res_category,q_auto:low,f_auto,dpr_1.5125000476837158/images/monet/customer-app-monet/1622015759674-7e67cf.png' alt='card' width="15%"  style={{backgroundColor:"white"}} />  
                    <Box style={{backgroundColor:"white", color:"gray"}}>Pay online after service</Box>
                  </HStack>
                  <Spacer  style={{backgroundColor:"white"}}/>
                  <Box style={{backgroundColor:"white"}}> <ChevronRightIcon  style={{backgroundColor:"white"}}/> </Box>
                </Flex>
                <Flex>
                  <HStack spacing={5}   style={{backgroundColor:"white"}}>
                    <img src='https://res.cloudinary.com/urbanclap/image/upload/o_40/t_high_res_category,q_auto:low,f_auto,dpr_1.5125000476837158/images/monet/customer-app-monet/1622015765651-21a4a3.png' alt='card' width="15%"  style={{backgroundColor:"white"}} />  
                    <Box style={{backgroundColor:"white", color:"gray"}}>Pay  with cash after service</Box>
                  </HStack>
                  <Spacer  style={{backgroundColor:"white"}}/>
                  <Box style={{backgroundColor:"white"}}> <ChevronRightIcon  style={{backgroundColor:"white"}}/> </Box>
                </Flex>
            </Box>
          </Box>
        </VStack>
  
        <br/>
        <Link to="/">
          <Button className="home">Back to Home</Button>
        </Link>
      </div>
    </div>
  )
}

export default Payments
