'use client';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { BannerSlider } from './BannerSlider';

// bg = 'center / cover no-repeat url(/banner-img1.jpg)';

export const Banner = () => {
  return (
    <Box minH="600px"
      bgColor={"#fef7e9"}>
      <Flex
        justify="center"
        align="center"
        gap="2"
        flexDir={{ base: 'column', lg: 'row' }}
        w={{ base: '100%', lg: '90%' }}
        mx="auto"
        p="2rem"
      >
        <Box w={{ base: '100%', lg: '50%' }}>
          <Heading
            size={{ base: 'xl', lg: '3xl' }}
            lineHeight="4rem"
          >
            Elevate Your Space with <br /> Timeless Furniture
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} py="1rem" maxW="600px">
            Discover exceptional furniture pieces that transform your home into a heaven of comfort and style.
          </Text>
          <Link href="/products">
            <Button
              borderRadius="50px"
              minW="10rem"
              bgColor="brand.primary"
              color="white"
              _hover={{ bgColor: 'brand.primaryDark' }}
            >
              Explore More
            </Button>
          </Link>
        </Box>
        <Box w={{ base: '100%', lg: '50%' }}>
          <Box
            my="2rem"
            w={{ base: '300px', lg: '600px' }}
            h={{ base: '300px', lg: '500px' }}
            bg="center / cover no-repeat url(retro.jpg)"
          />
          {/* <BannerSlider /> */}
        </Box>
      </Flex>
    </Box>
  );
};
