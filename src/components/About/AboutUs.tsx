import {
  Box,
  Card,
  Flex,
  Heading,
  Text,
  textDecoration,
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
          <Text color={"gray"} pt={5} px={{ base: 10, lg: 40 }} fontSize={20}>
            Shahzad Wood Works was established in 1980, we have been dedicated
            to providing exquisite furniture that transcends trends and stands
            the test of time.
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default AboutUs;
