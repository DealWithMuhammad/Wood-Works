import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";

export const AppLogo = () => {
  return (
    <Link href="/">
      <Image src={Logo} alt="logo" height={100} width={160} />
    </Link>
  );
};
