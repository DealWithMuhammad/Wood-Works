'use client';
import { Button } from '@chakra-ui/react';
import { AppContext } from '@src/context/AppContext';
import { IProduct } from '@src/model';
import React, { useContext } from 'react';

interface IAddToCartButtonProps {
  product: IProduct;
  count?: number;
}
export const AddToCartButton = ({ product, count }: IAddToCartButtonProps) => {
  const { addItem, removeItem, isAdded } = useContext(AppContext);

  return (
    <>

    </>
  );
};
