import {
  Box,
  Card,
  Flex,
  Heading,
  Text,
  textDecoration,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function AboutUs() {
  return (
    <>
      <Box>
        <Card
          align="center"
          justify="space-between"
          overflow="hidden"
          w={{ base: "100%", lg: "90%" }}
          mx="auto"
          shadow="sm"
          p="2rem"
          pt={{ base: "10", md: "40", lg: "40" }}
        >
          {/* Breadcrumb */}
          <Flex>
            <Link href={"/"}>
              <Text
                fontWeight={"thin"}
                _hover={{ textDecoration: "underline" }}
                color="grey"
                mr={4}
              >
                Home
              </Text>
            </Link>
            <Text color="black" mr={4}>
              /
            </Text>
            <Box className="black">About us</Box>
          </Flex>
        </Card>
        <Box textAlign="center">
          <Heading fontWeight={"medium"} fontSize={{ base: 30, lg: 45 }}>
            About Shahzad Wood Works
          </Heading>
          <Text
            color={"gray"}
            pt={5}
            px={{ base: 0, md: 10, lg: 40 }}
            fontSize={{ base: 17, lg: 20 }}
          >
            Shahzad Wood Works was established in 1980, we have been dedicated
            to providing exquisite furniture that transcends trends and stands
            the test of time.
          </Text>
        </Box>
        {/* Hero Image of About Us */}
        <Box
          mt={{ base: 10, lg: 20 }}
          backgroundImage="url('https://demo.theme-sky.com/nooni/wp-content/uploads/2023/04/about-parallax-1.jpg')"
          backgroundPosition="center center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          width="100%"
          height={{ base: "240px", lg: "480px" }} // Set the height as needed
          // You can add other styling properties as needed
        >
          {/* Your content goes here */}
        </Box>
      </Box>
    </>
  );
}

export default AboutUs;
