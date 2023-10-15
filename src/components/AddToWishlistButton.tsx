import { Button } from '@chakra-ui/react';
import { IProduct } from '@src/model';
import React, { useContext } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

interface IAddToWishlistButtonProps {
  product: IProduct;
}

export const AddToWishlistButton = ({ product }: IAddToWishlistButtonProps) => {


  return (
    <>
     
        <Button
          pos="absolute"
          variant="ghost"
          bgColor="transparent"
          color="red.400"
          _hover={{ bgColor: 'transparent' }}
          rounded="full"
          title="Remove from Wishlist"
          
        >
          <BsHeartFill />
        </Button>
   
        <Button
          pos="absolute"
          variant="ghost"
          bgColor="transparent"
          color="red.400"
          _hover={{ bgColor: 'transparent' }}
          rounded="full"
          title="Add to Wishlist"
      
        >
          <BsHeart />
        </Button>

    </>
  );
};
