"use client";
// Import necessary packages and components
import React, { useState, ChangeEvent } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { client } from "@utils/sanity.client";
import { LiaWhatsapp } from "react-icons/lia";
import Link from "next/link";
// Define the Contact component
const Contact: React.FC = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  // Toast for success message
  const toast = useToast();

  // Function to handle form submission
  const handleSubmit = async () => {
    try {
      console.log("Submitting form with data:", formData); // Log the form data

      // Use Sanity client to create a new document in the 'contact' collection
      await client.create({
        _type: "contact",
        ...formData,
      });

      // Optionally, you can reset the form data after successful submission
      setFormData({
        username: "",
        email: "",
        phone: "",
        message: "",
      });

      // Display success message
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);

      // Display error message if submission fails
      toast({
        title: "Error",
        description: "Failed to submit the form. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  // Function to handle input changes
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Render the component
  return (
    <Flex
      w={{ base: "100%", lg: "90%" }}
      mx="auto"
      flexDir={{ base: "column", lg: "row" }}
      gap="2rem"
    >
      {/* ... your existing JSX code */}
      <Box w={{ base: "100%", lg: "45%" }}>
        <Card borderWidth="1px" borderColor="gray.200" shadow="none" p="2rem">
          <Heading pl="12x" size="xl">
            Contact Us
          </Heading>
          <Divider mt="2rem" />

          <CardBody>
            <Stack spacing="2rem">
              <Box>
                <Heading size="lg">Chat With Us:</Heading>
                <Link
                  href={`http://wa.me/+601139865270?text=Hi, I wanted to ask some questions about Shahzad Wood Works`}
                >
                  <Text color="green" fontSize="xl">
                    Chat with us directly via WhatsApp by clicking here
                  </Text>
                  <LiaWhatsapp color="green" size={32} />
                </Link>
              </Box>
            </Stack>
            <Divider mt="2rem" />

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

      {/* Updated form section with added event handlers */}
      <Stack spacing={10} w={{ base: "100%", lg: "55%" }}>
        <Card borderWidth="1px" borderColor="gray.200" shadow="none">
          <CardHeader>
            <Heading size="xl">We would love to hear from you.</Heading>
          </CardHeader>

          <CardBody>
            <Stack spacing="2rem">
              {/* ... other form fields */}
              <Box>
                <Input
                  type="text"
                  placeholder="Name"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </Box>
              <Box>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <PhoneIcon color="gray.300" />
                  </InputLeftElement>
                  <Input
                    type="tel"
                    placeholder="Phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </InputGroup>
              </Box>
              <Box>
                <Input
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Box>
              <Box>
                <Textarea
                  placeholder="Message"
                  rows={8}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </Box>
              <Button
                size="md"
                height="48px"
                width="100%"
                colorScheme="blue"
                border="2px"
                borderColor="white"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </Flex>
  );
};

// Export the Contact component
export default Contact;
