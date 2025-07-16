import React from "react";
import BudgetList from "./_components/BudgetList";

const page = () => {
  return (
    <div className=" p-5">
      <h2 className="font-extrabold text-2xl"> Budgets</h2>
      <BudgetList />
    </div>
  );
};

export default page;
