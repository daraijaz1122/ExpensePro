"use client";
import React, { useEffect, useState } from "react";
import SideNav from "./_components/SideNav";
import DashboardHeader from "./_components/DashboardHeader";
import { useUser } from "@clerk/nextjs";
import { getUserBudgets } from "@/app/actions/userBudgets";
import { useRouter } from "next/navigation";

const Layout = ({ children }) => {
  const { user } = useUser();
  const { push } = useRouter();
  const email = user?.primaryEmailAddress?.emailAddress;
  useEffect(() => {
    user && fetchUserBudgets();
  }, [email]);

  const fetchUserBudgets = async () => {
    const result = await getUserBudgets();
    if (result.length === 0) {
      push("/dashboard/budgets");
    }
  };

  return (
    <div>
      <div className="fixed md:w-64 hidden md:block">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
};

export default Layout;
