import { Box, Flex, Link, Image, Text, Heading } from "@chakra-ui/react";
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
      <FeaturedProducts
        title="Most Selling Products"
        products={featuredItems[0].mostSellingProducts}
      />
      <FeaturedProducts
        title="Trending Products"
        products={featuredItems[0].trendingProducts}
      />
    </main>
  );
}
