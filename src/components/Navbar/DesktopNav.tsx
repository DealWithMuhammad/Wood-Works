import { navItems } from "@/helpers";
import { Box, Flex, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { AppLogo } from "../AppLogo";
import { Cart } from "../Cart/Cart";
import { Wishlist } from "../Wishlist/Wishlist";
import { Search } from "../Search/Search";
import { LiaInstagram, LiaWhatsapp } from "react-icons/lia";

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
          <Box key={navItem.label}>
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
        <Link href={"http://www.instgaram.com"}>
          <LiaInstagram color={"#bc2a8d"} size={38} />
        </Link>
      </Stack>
    </Flex>
  );
}
