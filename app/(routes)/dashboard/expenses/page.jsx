"use client";
import { getAllExpenses } from "@/app/actions/userExpenses";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import ExpenseListTable from "./_components/ExpenseListTable";

const page = () => {
  const { user } = useUser();
  const [data, setData] = useState([]);

  useEffect(() => {
    user && fetchExpenses();
  }, []);
  const fetchExpenses = async () => {
    const response = await getAllExpenses(
      user?.primaryEmailAddress?.emailAddress
    );
    setData(response);
  };
  return (
    <div className="p-10">
      <h2 className="font-bold text-2xl">Expenses</h2>

      <ExpenseListTable expensesList={data} />
    </div>
  );
};

export default page;
