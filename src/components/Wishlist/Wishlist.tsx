import {
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { BsHeart } from 'react-icons/bs';
import { WishlistItem } from './WishlistItem';

export const Wishlist = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          color="brand.primary"
          variant="ghost"
          _hover={{
            bgColor: 'transparent',
          }}
          pos="relative"
        >
          <BsHeart size="0.9rem" /> <Text mx="1">Wishlist</Text>
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
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader color="brand.primary" fontWeight="bold">
          Wishlist
        </PopoverHeader>
        <PopoverBody p="1rem">
         
            <>Your Wishlist is Empty</>
        </PopoverBody>
        <PopoverFooter>
            <Button
              variant="outline"
              mr={3}
            >
              Clear Wishlist
            </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};
