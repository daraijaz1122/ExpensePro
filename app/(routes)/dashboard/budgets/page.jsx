"use client";
import React from "react";
import BudgetList from "./_components/BudgetList";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const page = () => {
  const back = useRouter().back;

  return (
    <div className=" p-5">
      <h2 className="font-extrabold items-center flex text-2xl">
        <ArrowLeft
          onClick={() => back("/dashboard")}
          className="font-bold mr-2 text-lg cursor-pointer"
        />
        Budgets
      </h2>
      <BudgetList />
    </div>
  );
};

export default page;
