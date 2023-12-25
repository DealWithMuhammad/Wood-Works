"use client";

import { navItems } from "@/helpers";
import { Box, Flex, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { AppLogo } from "../AppLogo";
import { Search } from "../Search/Search";
import { LiaFacebook, LiaWhatsapp } from "react-icons/lia";

export function DesktopNav() {
  return (
    <Flex
      justify="space-between"
      alignItems="center"
      display={{ base: "none", lg: "flex" }}
      px="2rem"
      py="1rem"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Stack direction="row" gap={6} flex={1} alignItems="center">
        <Box mr="1rem">
          <AppLogo />
        </Box>

        {navItems.map((navItem) => (
          <Box
            color={"black"}
            key={navItem.label}
            position="relative"
            display="inline"
            transition={"all 0.45s"}
            _after={{
              content: '""',
              position: "absolute",
              left: "50%",
              bottom: "-2px",
              width: "0",
              height: "0.7px",
              background: "#febe60", // Change this color as needed
              transition: "all 0.45s",
            }}
            _hover={{
              _after: {
                width: "100%",
                left: "0",
              },
              color: "#febe60",
            }}
          >
            <Link href={navItem.href}>{navItem.label}</Link>
          </Box>
        ))}
        <Search />
        <Link
          href={`http://wa.me/+601139865270?text=Hello! I'm interested in your furniture offerings from Shahzad Wood Works. Can you please provide more information on your products?
Thank you! `}
        >
          <LiaWhatsapp color="green" size={34} />
        </Link>
        <Link href={"http://www.facebook.com"}>
          <LiaFacebook color={"#316FF6"} size={38} />
        </Link>
      </Stack>
        
    </Flex>
  );
}
