"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { getBudget } from "@/app/actions/userBudgets";
import { BudgetCard } from "../../budgets/_components/BudgetCard";
import Sekeleton from "../../budgets/_components/Sekeleton";
import AddExpense from "../_components/AddExpense";
import { getExpenses } from "@/app/actions/userExpenses";
import ExpenseListTable from "../_components/ExpenseListTable";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import DeleteBudget from "../_components/DeleteBudget";
const Page = () => {
  const { user } = useUser();
  const [data, setData] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const params = useParams();
  const id = params.id;
  const email = user?.primaryEmailAddress?.emailAddress;

  useEffect(() => {
    user && fetchBudget();
  }, [user]);

  const fetchBudget = async () => {
    const result = await getBudget(id, email);
    const expenseData = await getExpenses(id);
    setExpenses(expenseData);
    setData(result[0]);
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold flex justify-between items-center">
        My Expenses
        <DeleteBudget budgetId={id} />
      </h2>
      <div className="mt-2 grid gap-5 grid-cols-1 md:grid-cols-2 ">
        {data ? <BudgetCard budget={data} /> : <Sekeleton />}

        <AddExpense budgetId={id} refreshData={() => fetchBudget()} />
      </div>
      <div className="mt-4">
        <h2 className="font-bold text-lg">Latest Expenses</h2>
        <ExpenseListTable
          expensesList={expenses}
          refreshData={() => fetchBudget()}
        />
      </div>
    </div>
  );
};

export default Page;
