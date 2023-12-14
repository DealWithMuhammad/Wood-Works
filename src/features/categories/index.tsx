"use client";
import { Card, CardBody, Flex, Grid, Heading } from "@chakra-ui/react";
import { ICategory } from "@src/model";
import Image from "next/image";
import Link from "next/link";

interface AllCategoriesProps {
  categories: ICategory[];
}
export const AllCategories = ({ categories }: AllCategoriesProps) => {
  return (
    <Flex
      py="2rem"
      w={{ base: "100%", lg: "90%" }}
      direction={{ base: "column", lg: "row" }}
      justify="space-around"
      align="center"
      gap={10}
      mx="auto"
      flexWrap="wrap" // Allow flex items to wrap to the next line
    >
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </Flex>
  );
};

interface CategoryCardProps {
  category: ICategory;
}

const CategoryCard = ({ category }: CategoryCardProps) => (
  <Link href={`/categories/${category.id}`}>
    <Card
      direction="column"
      align="center"
      overflow="hidden"
      variant="outline"
      p="10px"
      _hover={{ cursor: "pointer", bgColor: "gray.100" }}
    >
      <Image
        src={category.image}
        alt={category.name}
        width={450}
        height={100}
      />

      <CardBody>
        <Heading size={{ base: "sm", lg: "md" }}>{category.name}</Heading>
      </CardBody>
    </Card>
  </Link>
);
