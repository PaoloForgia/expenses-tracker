import { Category as CategoryType } from "@/types/expenses";
import { createClassName } from "@/utils/classes";
import { Flex } from "@mantine/core";
import classes from "./Categoty.module.css";

type Props = CategoryType;

const Category = ({ categoryId, categoryName, transactionType, color, expenses }: Props) => {
  return (
    <Flex
      className={createClassName(
        classes.categoryContainer,
        color === "green" ? classes.green : undefined,
        color === "blue" ? classes.blue : undefined,
        color === "red" ? classes.red : undefined,
        color === "gold" ? classes.gold : undefined,
      )}
    >
      <div className={classes.category}>{categoryName}</div>
    </Flex>
  );
};

export default Category;
