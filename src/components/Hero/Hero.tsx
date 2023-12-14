"use client";
import { Box, Button, Card, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface IHeroProps {
  heading: string;
  description: string;
  imageUrl: string;
  btnLabel?: string;
  btnLink?: string; // Make btnLink optional as well
}

export const Hero = ({
  heading,
  description,
  imageUrl,
  btnLabel,
  btnLink,
}: IHeroProps) => {
  return (
    <Card
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-between"
      overflow="hidden"
      variant="outline"
      w={{ base: "100%", lg: "90%" }}
      mx="auto"
      shadow="sm"
      p="2rem"
      pt="40"
      mb="2rem"
    >
      <Box mx="2rem" w={{ base: "100%", md: "50%" }}>
        <Heading size="2xl">{heading}</Heading>
        <Text py="1rem">{description}</Text>

        {btnLabel &&
          btnLink && ( // Check if btnLabel and btnLink are provided
            <Box py="1rem">
              <Link href={btnLink}>
                <Button variant="">{btnLabel}</Button>
              </Link>
            </Box>
          )}
      </Box>
      <Box mx="2rem" w={{ base: "100%", md: "50%" }} mt="1rem">
        <Image
          src={imageUrl}
          alt={heading}
          objectFit="cover"
          maxW={{ base: "100%" }}
          rounded="md"
        />
      </Box>
    </Card>
  );
};
