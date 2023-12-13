"use client";
import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

function Contact() {
  return (
    <Flex
      w={{ base: "100%", lg: "90%" }}
      mx="auto"
      flexDir={{ base: "column", lg: "row" }}
      gap="2rem"
    >
      <Box w={{ base: "100%", lg: "40%" }}>
        <Card borderWidth="1px" borderColor="gray.200" shadow="none" p="2rem">
          <Heading pl="14px" size="xl">
            Contact Us
          </Heading>
          <Divider mt="2rem" />

          <CardBody>
            <Stack spacing="2rem">
              <Box>
                <Heading size="lg">Call to Us:</Heading>
                <Text fontSize="xl">We’re available 24/7, 7 days a week.</Text>
                <Text fontSize="xl">+60 11-3986 5270</Text>
              </Box>
            </Stack>
            <Divider mt="2rem" />

            <Stack spacing="2rem">
              <Box>
                <Heading size="lg">Write to Us:</Heading>
                <Text fontSize="xl">
                  Fill out our form and we will contact you within 24 hours.
                </Text>
                <Text fontSize="xl">Email: Support1234@gmail.com</Text>
              </Box>
            </Stack>
            <Divider mt="2rem" />

            <Stack spacing="2rem">
              <Box>
                <Heading size="lg">Headquarter:</Heading>
                <Text fontSize="xl">Monday – Friday: 9:00-20:00</Text>
                <Text fontSize="xl">Saturady: 11:00 – 15:00</Text>
                <Text fontSize="xl">Township, Lahore</Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Box>
      <Stack spacing={10} w={{ base: "100%", lg: "60%" }}>
        <Card borderWidth="1px" borderColor="gray.200" shadow="none">
          <CardHeader>
            <Heading size="xl">We would love to hear from you.</Heading>
          </CardHeader>

          <CardBody>
            <Stack spacing="2rem">
              <Box>
                <Input type="text" placeholder="Name" />
              </Box>
              <Box>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <PhoneIcon color="gray.300" />
                  </InputLeftElement>
                  <Input type="tel" placeholder="Phone number" />
                </InputGroup>
              </Box>

              <Box>
                <Input type="email" placeholder="E-mail" />
              </Box>
              <Box>
                <Textarea placeholder="Message" rows={8} />
              </Box>
              <Button
                size="md"
                height="48px"
                width="100%"
                colorScheme="blue"
                border="2px"
                borderColor="white"
              >
                Submit
              </Button>
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </Flex>
  );
}

export default Contact;
