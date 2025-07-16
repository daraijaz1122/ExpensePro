"use client";

import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import CardInfo from "./_components/CardInfo";
import { getBudgetList } from "@/app/actions/userBudgets";
import BarChartCard from "./_components/BarChart";
import { BudgetCard } from "./budgets/_components/BudgetCard";
import { getAllExpenses } from "@/app/actions/userExpenses";
import ExpenseListTable from "./expenses/_components/ExpenseListTable";
const page = () => {
  const { user } = useUser();
  const [data, setData] = useState([]);
  const [expensesList, setExpensesList] = useState([]);

  useEffect(() => {
    user && fetchUserBudgets();
  }, []);

  const fetchUserBudgets = async () => {
    const response = await getBudgetList(
      user?.primaryEmailAddress?.emailAddress
    );
    setData(response);
    const expensesData = await getAllExpenses(
      user?.primaryEmailAddress?.emailAddress
    );
    setExpensesList(expensesData);
  };
  return (
    <div className="p-8">
      <h2 className="font-bold text-3xl">
        Hi ,
        {user?.primaryEmailAddress?.emailAddress === "guest123@gmail.com"
          ? "Guest"
          : user?.fullName}
      </h2>
      <p className="text-gray-500 ">
        Here's what is happening with your budgets,Manage you expenses like a
        pro
      </p>
      <CardInfo budgetList={data} />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-6">
        <div className="md:col-span-2">
          <div>
            <BarChartCard budgetList={data} />
          </div>
          <div className="mt-5">
            <h2 className="font-bold text-lg">Latest Expenses</h2>
            <ExpenseListTable expensesList={expensesList} />
          </div>
        </div>

        <div className="grid gap-5">
          <h2 className="font-bold text-lg">Latest Budgets</h2>
          {data.map((data, index) => (
            <BudgetCard budget={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
