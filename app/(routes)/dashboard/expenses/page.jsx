"use client";
import { getAllExpenses } from "@/app/actions/userExpenses";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import ExpenseListTable from "./_components/ExpenseListTable";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
const page = () => {
  const { user } = useUser();
  const [data, setData] = useState([]);
  const back = useRouter().back;
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
      <h2 className="font-bold flex items-center text-2xl">
        <ArrowLeft
          onClick={() => back("/dashboard")}
          className="font-bold mr-2 text-lg cursor-pointer"
        />
        Expenses
      </h2>

      <ExpenseListTable expensesList={data} />
    </div>
  );
};

export default page;
