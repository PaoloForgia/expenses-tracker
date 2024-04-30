import { Category } from "@/types/expenses";
import { insuranceHusband, insuranceWife, joinedSaving, rent, salaryHusband, salaryWife } from "./expenses";
import { randomId } from "./ids";

export const incomes: Category = {
  categoryId: randomId(),
  categoryName: "Income",
  transactionType: "income",
  expenses: [salaryHusband, salaryWife],
};

export const savings: Category = {
  categoryId: randomId(),
  categoryName: "Saving",
  transactionType: "expense",
  expenses: [joinedSaving],
};

export const Expenses: Category = {
  categoryId: randomId(),
  categoryName: "Expenses",
  transactionType: "expense",
  expenses: [rent, insuranceHusband, insuranceWife],
};
