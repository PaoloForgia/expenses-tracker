import categories from "@/mocks/categories";
import { Flex } from "@mantine/core";
import Category from "../Category/Category";

const Categories = () => {
  return (
    <Flex direction="column" gap="xl">
      {categories.map((category) => (
        <Category key={category.categoryId} {...category} />
      ))}
    </Flex>
  );
};

export default Categories;
