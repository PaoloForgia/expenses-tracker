import { Category } from "@/types/expenses";
import { insuranceHusband, insuranceWife, joinedSaving, rent, salaryHusband, salaryWife } from "./expenses";
import { randomId } from "./ids";

export const incomes: Category = {
  categoryId: randomId(),
  categoryName: "Income",
  transactionType: "income",
  color: "green",
  expenses: [salaryHusband, salaryWife],
};

export const savings: Category = {
  categoryId: randomId(),
  categoryName: "Saving",
  transactionType: "expense",
  color: "blue",
  expenses: [joinedSaving],
};

export const expenses: Category = {
  categoryId: randomId(),
  categoryName: "Expenses",
  transactionType: "expense",
  color: "red",
  expenses: [rent, insuranceHusband, insuranceWife],
};

const categories = [incomes, savings, expenses];

export default categories;
