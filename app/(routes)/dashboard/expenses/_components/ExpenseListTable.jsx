import { Trash } from "lucide-react";
import React from "react";
import { deleteExpense } from "@/app/actions/userExpenses";
import { toast } from "sonner";
const ExpenseListTable = ({ expensesList, refreshData }) => {
  const handleDeleteExpense = async (expense) => {
    const response = await deleteExpense(expense);
    if (response) {
      toast("Expense Deleted Successfully");
      refreshData();
    }
  };
  return (
    <div className="mt-3">
      <div className="grid font-bold grid-cols-4  bg-slate-200 p-2 shadow-sm rounded-md ">
        <h2>Name</h2>
        <h2>Amount</h2>
        <h2>Date</h2>
        <h2>Action</h2>
      </div>
      {expensesList.map((expense, index) => (
        <div
          key={expense.id}
          className="grid grid-cols-4  bg-slate-100 shadow-sm mt-1 rounded-md p-2 "
        >
          <h2>{expense.name}</h2>
          <h2>{expense.amount}</h2>
          <h2>{expense.createdAt}</h2>
          <h2>
            <Trash
              onClick={() => handleDeleteExpense(expense)}
              className="text-red-600 hover:text-indigo-600 cursor-pointer"
            />
          </h2>
        </div>
      ))}
    </div>
  );
};

export default ExpenseListTable;
