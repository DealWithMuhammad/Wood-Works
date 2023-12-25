"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../theme";
import { Navbar } from "@src/components/Navbar/NavBar";
import { Footer } from "@src/components/Footer";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>SW Work</title>
        <meta title="description" content="Buy any furniture" />
      </head>
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <NextTopLoader color="red" />

            <Navbar />
            {children}
            <Footer />
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
