import { Box, Flex, Stack } from "@chakra-ui/react";
import { AppLogo } from "../AppLogo";
// import { Cart } from '../Cart/Cart';
// import { Wishlist } from '../Wishlist/Wishlist';
import { Search } from "../Search/Search";
import { NavMenu } from "./NavMenu";
import Link from "next/link";
import { LiaInstagram, LiaWhatsapp } from "react-icons/lia";

export function MobileNav() {
  return (
    <>
      <Flex
        justify="space-between"
        alignItems="center"
        display={{ base: "flex", lg: "none" }}
        px="2rem"
        py="1rem"
        borderBottom="1px"
        borderColor="gray.200"
      >
        <NavMenu />
        <AppLogo />

        <Stack direction="row" spacing={1}>
          <Link
            href={`http://wa.me/+601139865270?text=Hello!  I'm interested in your furniture offerings from Shahzad Wood Works. Can you please provide more information on your products?
Thank you! `}
          >
            <LiaWhatsapp color="green" size={36} />
          </Link>
          <Link href={"http://www.instgaram.com"}>
            <LiaInstagram color={"#bc2a8d"} size={38} />
          </Link>
        </Stack>
      </Flex>
      <Box
        px="2rem"
        py="0.5rem"
        mb="1rem"
        display={{ base: "block", lg: "none" }}
      >
        <Search />
      </Box>
    </>
  );
}
