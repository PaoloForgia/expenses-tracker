import type { Meta, StoryObj } from "@storybook/react";
import Component from "./Category";

const meta: Meta<typeof Component> = { title: "Expenses/Category", component: Component };

export default meta;

type Story = StoryObj<typeof Component>;

export const Incomes: Story = {
  args: {
    categoryId: 1,
    categoryName: "Incomes",
    transactionType: "income",
    color: "green",
    expenses: [
      { expenseId: 1, label: "Salary Husband" },
      { expenseId: 2, label: "Salary Wife" },
    ],
  },
};

export const Savings: Story = {
  args: {
    categoryId: 1,
    categoryName: "Savings",
    transactionType: "expense",
    color: "blue",
    expenses: [{ expenseId: 1, label: "Joined Saving" }],
  },
};

export const Expenses: Story = {
  args: {
    categoryId: 1,
    categoryName: "Expenses",
    transactionType: "expense",
    color: "red",
    expenses: [
      { expenseId: 1, label: "Rent" },
      { expenseId: 2, label: "Insurance Husband" },
      { expenseId: 3, label: "Insurance Wife" },
    ],
  },
};

export const Balance: Story = {
  args: {
    categoryId: 1,
    categoryName: "Balance",
    transactionType: "expense", // TODO: different type
    color: "gold",
    expenses: [],
  },
};
