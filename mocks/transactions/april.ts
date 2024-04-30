import { Transaction } from "@/types/expenses";
import { insuranceHusband, insuranceWife, joinedSaving, rent, salaryHusband, salaryWife } from "../expenses";
import { randomId } from "../ids";
import { april } from "../periods";

export const salaryHusbandApril: Transaction = {
  transactionId: randomId(),
  expenseId: salaryHusband.expenseId,
  amount: 5000,
  period: april,
};

export const salaryWifeApril: Transaction = {
  transactionId: randomId(),
  expenseId: salaryWife.expenseId,
  amount: 5000,
  period: april,
};

export const joinedSavingApril: Transaction = {
  transactionId: randomId(),
  expenseId: joinedSaving.expenseId,
  amount: 1000,
  period: april,
};

export const rentApril: Transaction = {
  transactionId: randomId(),
  expenseId: rent.expenseId,
  amount: 2000,
  period: april,
};

export const insuranceHusbandApril: Transaction = {
  transactionId: randomId(),
  expenseId: insuranceHusband.expenseId,
  amount: 500,
  period: april,
};

export const insuranceWifeApril: Transaction = {
  transactionId: randomId(),
  expenseId: insuranceWife.expenseId,
  amount: 500,
  period: april,
};

const aprilTransactions = [
  salaryHusbandApril,
  salaryWifeApril,
  joinedSavingApril,
  rentApril,
  insuranceHusbandApril,
  insuranceWifeApril,
];

export default aprilTransactions;
