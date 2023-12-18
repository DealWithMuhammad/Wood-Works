import {
  Box,
  Card,
  Flex,
  Heading,
  Text,
  textDecoration,
  Image,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function AboutUs() {
  return (
    <>
      {/* Section 1 */}
      <Box
        overflow="hidden"
        w={{ base: "100%", lg: "90%" }}
        mx="auto"
        p="2rem"
        pt={{ base: "10", md: "40", lg: "40" }}
      >
        {/* Breadcrumb */}
        <Flex justify={"center"}>
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
      </Box>
      {/* End */}
      {/* Section-2 */}
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
          Shahzad Wood Works was established in 1980, we have been dedicated to
          providing exquisite furniture that transcends trends and stands the
          test of time.
        </Text>
      </Box>
      {/* End */}
      {/* Hero Image of About Us */}
      <Box
        mt={{ base: 10, lg: 20 }}
        backgroundImage="url('https://tobel.qodeinteractive.com/wp-content/uploads/2021/04/About-title-img.jpg')"
        backgroundPosition="center center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100%"
        height={{ base: "240px", lg: "480px" }}
      ></Box>
      {/* End */}
      {/* Section-3 */}
      <Box>
        <Flex
          py="2rem"
          w={{ base: "100%", lg: "100%" }}
          justify="space-center"
          align="center"
          mx="auto"
          flexDir={{ base: "column", md: "row" }}
        >
          <Box
            mx={{ base: "11", md: "16", lg: "14" }}
            position="relative"
            overflow="hidden"
            maxW={{ base: "500px", md: "400px", lg: "600px" }}
          >
            <Link href="/products">
              <Image
                src="about.jpg" // Replace with the actual image URL
                alt="Your Image"
                w="100%"
                h="auto"
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: "scale(1.1)" }}
              />
            </Link>
          </Box>
          <Box
            maxW={{ base: "100%", md: "50%" }}
            letterSpacing={3}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text
              fontSize={{ base: "sm", lg: "lg" }}
              mt={{ base: "4", lg: "0" }}
            >
              FEW WORDS
            </Text>
            <Heading
              mt={3}
              fontSize={{ base: "3xl", lg: "5xl" }}
              fontWeight={"350"}
            >
              OUR ACHIVEMENT
            </Heading>
            <Text letterSpacing={1} mt={{ base: 3, lg: 6 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              quidem nisi perferendis voluptas. Optio dolor soluta hic ad, nobis
              eius debitis dolorum delectus, error magnam inventore, quasi
              praesentium quis ipsam.
            </Text>
          </Box>
        </Flex>
      </Box>
      {/* End */}
      {/* Section-3 */}
      <Box textAlign={"center"}>
        <Heading
          mt={20}
          fontSize={{ base: "3xl", lg: "5xl" }}
          fontWeight={"900"}
          mb={20}
        >
          WHY US?
        </Heading>
        <Flex
          py="2rem"
          w={{ base: "100%", lg: "90%" }}
          direction={{ base: "column", lg: "row" }}
          justify="space-around"
          align="center"
          gap={10}
          mx="auto"
          flexWrap="wrap"
        >
          <Box mb={20} maxW={{ base: "100%", md: "30%" }}>
            <Heading
              mt={3}
              fontSize={{ base: "3xl", lg: "2xl" }}
              fontWeight={"790"}
            >
              Custom Desgin
            </Heading>
            <Text>
              Get furniture made just for you! We create special designs that
              fit your style and space perfectly. Our custom-made pieces turn
              your ideas into beautiful furniture.
            </Text>
          </Box>
          <Box mb={20} maxW={{ base: "100%", md: "30%" }}>
            <Heading
              mt={3}
              fontSize={{ base: "3xl", lg: "2xl" }}
              fontWeight={"790"}
            >
              Fast Delivery
            </Heading>
            <Text>
              Swift and reliable! Experience our fast delivery service, ensuring
              your furniture reaches you within just 20 days. Enjoy the
              convenience of timely shipping without compromising on quality or
              precision.
            </Text>
          </Box>
          <Box mb={20} maxW={{ base: "100%", md: "30%" }}>
            <Heading
              mt={3}
              fontSize={{ base: "3xl", lg: "2xl" }}
              fontWeight={"790"}
            >
              20 year warranty
            </Heading>
            <Text>
              Peace of mind for two decades! Our 20-year warranty ensures your
              furniture is backed by lasting quality and craftsmanship. Relax
              and enjoy your purchase, knowing we've got you covered for the
              long haul.
            </Text>
          </Box>
        </Flex>
      </Box>
      {/* End */}
      {/* contact */}
      <Box
        mt={{ base: 10, lg: 10 }}
        background={`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('https://demo.theme-sky.com/nooni/wp-content/uploads/2023/04/about-2.jpg') repeat fixed 0 0`}
        backgroundPosition="center center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100%"
        height={{ base: "240px", lg: "380px" }}
        color={"white"}
        letterSpacing={3}
        textAlign={"center"}
        display="flex"
        flexDirection="column"
        justifyContent="center" // This centers vertically
      >
        <Heading
          mt={3}
          fontSize={{ base: "3xl", lg: "5xl" }}
          fontWeight={"390"}
          textTransform={"uppercase"}
        >
          Our Products are custom made
        </Heading>
        <Text mt={5} color={"white"}>
          CONTACT US ON WHATSAPP
        </Text>

        <Link href="http://wa.me/+601139865270?text=Hi, I wanted to ask some questions about Shahzad Wood Works">
          <Button
            borderRadius="0px"
            minW="12rem"
            mt={10}
            py={6}
            bgColor="transparent"
            border={"1px solid"}
            color="#000"
            backgroundColor={"white"}
            _hover={{
              bgColor: "green",
              border: "1px solid black",
              color: "white",
            }}
          >
            CLICK HERE TO CHAT
          </Button>
        </Link>
      </Box>
      {/* End */}
    </>
  );
}

export default AboutUs;
