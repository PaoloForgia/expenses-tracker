import { Expense } from "@/types/expenses";
import { randomId } from "./ids";

export const salaryHusband: Expense = {
  expenseId: randomId(),
  label: "Sarary Husband",
};

export const salaryWife: Expense = {
  expenseId: randomId(),
  label: "Sarary Wife",
};

export const joinedSaving: Expense = {
  expenseId: randomId(),
  label: "Joined Saving",
};

export const rent: Expense = {
  expenseId: randomId(),
  label: "Rent",
};

export const insuranceHusband: Expense = {
  expenseId: randomId(),
  label: "Insurance Husband",
};

export const insuranceWife: Expense = {
  expenseId: randomId(),
  label: "Insurance Wife",
};
