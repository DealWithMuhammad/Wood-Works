import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { calculateItemsTotal } from '@src/helpers';
import Link from 'next/link';
import { useContext, useRef } from 'react';
import { BsCart4 } from 'react-icons/bs';
import { CartItem } from './CartItem';

export const Cart = () => {
 
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>();



  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        variant="ghost"
        color="brand.primary"
        _hover={{
          bgColor: 'transparent',
        }}
        pos="relative"
      >
         <Text mx="1">Contact</Text>
       
          <Flex
            pos="absolute"
            top="0px"
            right="5px"
            bgColor="brand.primaryLight"
            boxSize="15px"
            rounded="full"
            color="white"
            fontSize="0.6rem"
            align="center"
            justify="center"
          >
           
          </Flex>
    
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color="brand.primary">
            Cart  Items 
          </DrawerHeader>
          <DrawerBody>
           
              <>Your Cart is Empty</>
           
              
           
          </DrawerBody>
          
            <DrawerFooter justifyContent="space-between">
              <Box>
                <Button
                  variant="outline"
                  mr={3}
                  
                >
                  Clear Cart
                </Button>
                <Link href="/checkout">
                  <Button
                    bgColor="brand.primary"
                    color="white"
                    _hover={{
                      bgColor: 'brand.primaryLight',
                    }}
                    _active={{
                      bgColor: 'brand.primaryLight',
                    }}
                   
                  >
                    Checkout
                  </Button>
                </Link>
              </Box>
              <Box fontWeight="bold">Total: Rs </Box>
            </DrawerFooter>
        
        </DrawerContent>
      </Drawer>
    </>
  );
};
