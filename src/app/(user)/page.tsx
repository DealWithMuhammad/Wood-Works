import {
  Box,
  Flex,
  Link,
  Image,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import { Banner } from "@src/features/home/Banner";
import { FeaturedProducts } from "@src/features/home/FeaturedProducts";
import { TopCategories } from "@src/features/home/TopCategories";
import { IFeaturedItems } from "@src/model";
import { client } from "@utils/sanity.client";
import { groq } from "next-sanity";

const getAllFeaturedItemsQueries = `
    *[_type == "featuredProductsAndCategories"]{
        "topCategories": topCategories[]->{
            "id": _id,
            name,
            "slug": slug.current,
            "image": image.asset->url,
        },
        "bestDeals": bestDeals[]->{
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            rating,
            "mainImage": mainImage.asset->url,
        },
        "trendingProducts": trendingProducts[]->{
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            rating,
            "mainImage": mainImage.asset->url,
        },
        "mostSellingProducts": mostSellingProducts[]->{
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            rating,
            "mainImage": mainImage.asset->url,
        }
    }
`;

const getFeaturedItemsAsync = () => {
  return client.fetch(groq`${getAllFeaturedItemsQueries}`);
};

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function Home() {
  const featuredItems: IFeaturedItems[] = await getFeaturedItemsAsync();

  return (
    <main>
      <Banner />
      <TopCategories categories={featuredItems[0].topCategories} />
      {/* Section 1 */}
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
              src="https://nooni-be87.kxcdn.com/nooni/wp-content/uploads/2023/07/banner-7.jpg" // Replace with the actual image URL
              alt="Your Image"
              w="100%"
              h="auto"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.1)" }}
            />
          </Link>
        </Box>
        <Box letterSpacing={3} textAlign={{ base: "center", md: "left" }}>
          <Text fontSize={{ base: "sm", lg: "lg" }} mt={{ base: "4", lg: "0" }}>
            ENJOY FREE SHIPPING
          </Text>
          <Heading
            mt={3}
            fontSize={{ base: "3xl", lg: "5xl" }}
            fontWeight={"350"}
          >
            The Best
          </Heading>
          <Heading fontSize={{ base: "3xl", lg: "5xl" }} fontWeight={"350"}>
            Cabinets & Chests
          </Heading>
          <Link href="/product">
            <Text
              letterSpacing={1}
              textDecoration="underline"
              fontWeight={"bold"}
              mt={{ base: 3, lg: 6 }}
            >
              Shop Now
            </Text>
          </Link>
        </Box>
      </Flex>
      {/* End */}
      <FeaturedProducts
        title="Best Deals For You"
        products={featuredItems[0].bestDeals}
      />
      {/* Section 2 */}
      <Flex
        py="2rem"
        w={{ base: "100%", lg: "100%" }}
        justify="space-center"
        align="center"
        mx="auto"
        flexDir={{ base: "column", md: "row" }}
      >
        <Box
          mx={{ base: "11", md: "0", lg: "0" }}
          ml={{ md: "10", lg: "16" }}
          letterSpacing={3}
          textAlign={{ base: "center", md: "left" }}
          order={{ base: 2, md: 1 }}
        >
          <Text fontSize={{ base: "sm", lg: "lg" }} mt={{ base: "4", lg: "0" }}>
            NEW PRODUCTS
          </Text>
          <Heading
            mt={3}
            fontSize={{ base: "3xl", lg: "5xl" }}
            fontWeight={"350"}
          >
            The Chair Collection
          </Heading>
          <Link href="/product">
            <Text
              letterSpacing={1}
              textDecoration="underline"
              fontWeight={"bold"}
              mt={{ base: 3, lg: 6 }}
            >
              Shop Now
            </Text>
          </Link>
        </Box>
        <Box
          mx={{ base: "11", md: "16", lg: "14" }}
          position="relative"
          overflow="hidden"
          maxW={{ base: "500px", md: "400px", lg: "600px" }}
          order={{ base: 1, md: 2 }}
        >
          <Link href="/products">
            <Image
              src="https://nooni-be87.kxcdn.com/nooni/wp-content/uploads/2023/07/banner-8.jpg" // Replace with the actual image URL
              alt="Your Image"
              w="100%"
              h="auto"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.1)" }}
            />
          </Link>
        </Box>
      </Flex>

      {/* End */}
      <FeaturedProducts
        title="Most Selling Products"
        products={featuredItems[0].mostSellingProducts}
      />
      {/* Section 3 */}
      <Box
        mt={{ base: 10, lg: 10 }}
        background={`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('banner2.jpg') repeat fixed 0 0`}
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
        <Text color={"white"}>FURNITURE - LIGHTING</Text>
        <Heading
          mt={3}
          fontSize={{ base: "3xl", lg: "5xl" }}
          fontWeight={"390"}
        >
          Modern And
        </Heading>
        <Heading
          mt={1}
          fontSize={{ base: "3xl", lg: "5xl" }}
          fontWeight={"390"}
        >
          Contemporary Furniture
        </Heading>
        <Link href="/products">
          <Button
            borderRadius="0px"
            minW="12rem"
            mt={10}
            py={6}
            bgColor="transparent"
            border={"1px solid"}
            color="white"
            _hover={{ bgColor: "black", border: "1px solid black" }}
          >
            Explore More
          </Button>
        </Link>
      </Box>

      {/* End */}
      <FeaturedProducts
        title="Trending Products"
        products={featuredItems[0].trendingProducts}
      />
    </main>
  );
}
