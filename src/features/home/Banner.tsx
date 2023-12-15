"use client";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BannerSlider } from "./BannerSlider";

// bg = 'center / cover no-repeat url(/banner-img1.jpg)';

export const Banner = () => {
  return (
    <Box
      background="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('banner.jpg')"
      backgroundPosition="center center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      width="100%"
      height={{ base: "240px", lg: "480px" }}
      minH={"600px"}
    >
      <Flex
        direction="column"
        justify="center"
        align="center"
        height="100%"
        textAlign="center"
      >
        <Heading
          color={"#fff"}
          size={{ base: "xl", lg: "3xl" }}
          lineHeight="4rem"
          fontWeight={"normal"}
        >
          Elevate Your Space with <br /> Timeless Furniture
        </Heading>
        <Text color={"#fff"} fontSize={{ base: "md", lg: "lg" }} py="1rem">
          Discover exceptional furniture pieces that transform your home into a
          heaven of comfort and style.
        </Text>
        <Link href="/products">
          <Button
            borderRadius="0px"
            minW="12rem"
            py={6}
            bgColor="transparent"
            border={"1px solid"}
            color="white"
            _hover={{ bgColor: "black", border: "1px solid black" }}
          >
            Explore More
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};
