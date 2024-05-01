export type CategoryColor = "green" | "blue" | "red" | "gold";

export type Category = {
  categoryId: number;
  categoryName: string;
  transactionType: TransactionType;
  color: CategoryColor;
  expenses: Expense[];
};

export type Expense = {
  expenseId: number;
  label: string;
};

export type Transaction = {
  transactionId: number;
  expenseId: number;
  amount: number;
  period: Period;
};

export type TransactionType = "income" | "expense";
