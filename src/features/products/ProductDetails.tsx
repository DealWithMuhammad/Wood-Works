"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AddToWishlistButton } from "@src/components/AddToWishlistButton";
import { AddToCartButton } from "@src/components/Cart/AddToCartButton";
import { CustomBreadcrumb } from "@src/components/CustomBreadcrumb";
import { Quantity } from "@src/components/Quantity/Quantity";
import { Rating } from "@src/components/Rating";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { defaultBreadCrumbItems, getSubstring } from "@src/helpers";
import { IBreadcrumbItem, IProduct } from "@src/model";

interface ProductDetailsProps {
  product: IProduct;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (direction: "next" | "prev") => {
    const lastIndex = product.gallery.length - 1;
    let newIndex;

    if (direction === "next") {
      newIndex = currentImageIndex === lastIndex ? 0 : currentImageIndex + 1;
    } else {
      newIndex = currentImageIndex === 0 ? lastIndex : currentImageIndex - 1;
    }

    setCurrentImageIndex(newIndex);
  };

  const handleGalleryImageClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const galleryImages = product.gallery?.map((image, i) => (
    <Image
      key={i}
      src={image}
      alt={product.name}
      boxSize="70px"
      rounded="md"
      shadow="sm"
      borderWidth="1px"
      borderColor="gray.100"
      opacity={i === currentImageIndex ? 1 : 0.6}
      onClick={() => handleGalleryImageClick(i)}
      cursor="pointer"
    />
  ));

  return (
    <>
      <CustomBreadcrumb
        items={[
          ...defaultBreadCrumbItems,
          {
            name: product.category.name,
            link: `/categories/${product.category.id}`,
          },
          {
            name: getSubstring(product.name, 20),
            link: `/products/${product.slug}`,
          },
        ]}
      />
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        w={{ base: "90%", lg: "90%" }}
        mx="auto"
        p="2rem"
        gap="20"
      >
        <GridItem pos="relative">
          {/* Always display the main image */}
          <Flex m="0px" p="0px" alignItems="center">
            <Box
              position="relative"
              left="40px"
              onClick={() => handleImageChange("prev")}
              cursor="pointer"
              p="4"
              bg="blackAlpha.500"
            >
              <ArrowBackIcon boxSize="30px" color="white" />
            </Box>
            <Image
              m="0px"
              p="0px"
              zIndex="-1"
              src={product?.gallery[currentImageIndex] || product?.mainImage}
              alt={product.name}
              boxSize={{ base: "100%", sm: "90%", md: "100%", lg: "100%" }}
            />
            <Box
              position="relative"
              right="40px"
              onClick={() => handleImageChange("next")}
              cursor="pointer"
              p="4"
              bg="blackAlpha.500"
            >
              <ArrowForwardIcon boxSize="30px" color="white" />
            </Box>
          </Flex>
        </GridItem>
        <GridItem p="1rem">
          <Heading>{product.name}</Heading>
          <Text my="1rem">{product.description}</Text>

          <Text fontWeight="bold" fontSize="2rem">
            Rs{product.price}
          </Text>
          <Divider my="1rem" />
          <Box>
            <Link
              href={`http://wa.me/+601139865270?text=Hi, I am interested in ${encodeURIComponent(
                product.name
              )} and I want to order it, can you share more details about it??, Thanks`}
            >
              <Button
                variant="outline"
                bgColor="brand.primary"
                color="white"
                borderRadius="50px"
                size="sm"
                w="160px"
                mr="1rem"
                my="0.5rem"
                _hover={{ bgColor: "none" }}
              >
                Buy Now
              </Button>
            </Link>
            <AddToCartButton product={product} count={quantity} />
          </Box>

          <Stack py="2rem">
            <Box borderWidth={1} borderColor="gray.100" p="1rem">
              <Text fontWeight="bold">Contact Us</Text>
              <Link
                href="http://wa.me/+601139865270"
                textDecor="underline"
                color="gray.500"
              >
                Contact to see if we can negotiate
              </Link>
            </Box>
            <Box borderWidth={1} borderColor="gray.100" p="1rem">
              <Text fontWeight="bold">Free Deliver</Text>
              <Link textDecor="underline" color="gray.500">
                Contact to see if we can deliver to your place
              </Link>
            </Box>

            <Box borderWidth={1} borderColor="gray.100" p="1rem">
              <Text fontWeight="bold">Return Delivery</Text>
              <Text color="gray.500">
                Free 30 Days Delivery Returns
                <Link textDecor="underline"> Details</Link>
              </Text>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </>
  );
};
