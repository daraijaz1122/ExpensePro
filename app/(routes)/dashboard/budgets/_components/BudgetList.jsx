"use client";
import React, { useEffect, useState } from "react";
import CreateBudget from "./CreateBudget";
import { BudgetCard } from "./BudgetCard";
import { getBudgetList } from "@/app/actions/userBudgets";
import { useUser } from "@clerk/nextjs";
import Sekeleton from "./Sekeleton";

const BudgetList = () => {
  const { user } = useUser();
  const [budgetList, setBudgetList] = useState([]);

  const email = user?.primaryEmailAddress?.emailAddress;
  useEffect(() => {
    user && fetchBudgets();
  }, [email]);

  const fetchBudgets = async () => {
    const result = await getBudgetList(email);
    setBudgetList(result);
  };
  return (
    <div className="mt-7  ">
      <div className="grid  gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <CreateBudget refreshData={() => fetchBudgets()} />

        {budgetList.length > 0
          ? budgetList.map((budget, index) => (
              <BudgetCard key={index} budget={budget} />
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <Sekeleton key={index} />
            ))}
      </div>
      <div></div>
    </div>
  );
};
export default BudgetList;
