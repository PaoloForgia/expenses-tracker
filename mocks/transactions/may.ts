import { Transaction } from "@/types/expenses";
import { insuranceHusband, insuranceWife, joinedSaving, rent, salaryHusband, salaryWife } from "../expenses";
import { randomId } from "../ids";
import { may } from "../periods";

export const salaryHusbandMay: Transaction = {
  transactionId: randomId(),
  expenseId: salaryHusband.expenseId,
  amount: 5000,
  period: may,
};

export const salaryWifeMay: Transaction = {
  transactionId: randomId(),
  expenseId: salaryWife.expenseId,
  amount: 5000,
  period: may,
};

export const joinedSavingMay: Transaction = {
  transactionId: randomId(),
  expenseId: joinedSaving.expenseId,
  amount: 1000,
  period: may,
};

export const rentMay: Transaction = {
  transactionId: randomId(),
  expenseId: rent.expenseId,
  amount: 2000,
  period: may,
};

export const insuranceHusbandMay: Transaction = {
  transactionId: randomId(),
  expenseId: insuranceHusband.expenseId,
  amount: 500,
  period: may,
};

export const insuranceWifeMay: Transaction = {
  transactionId: randomId(),
  expenseId: insuranceWife.expenseId,
  amount: 500,
  period: may,
};

const aprilTransactions = [
  salaryHusbandMay,
  salaryWifeMay,
  joinedSavingMay,
  rentMay,
  insuranceHusbandMay,
  insuranceWifeMay,
];

export default aprilTransactions;
