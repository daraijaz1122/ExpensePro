"use client";
import {
  BanknoteIcon,
  LayoutGrid,
  ReceiptIcon,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
const SideNav = () => {
  const { push } = useRouter();

  const menuList = [
    {
      id: 1,
      name: "Dashoard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Budgets",
      icon: BanknoteIcon,
      path: "/dashboard/budgets",
    },
    {
      id: 3,
      name: "Expenses",
      icon: ReceiptIcon,
      path: "/dashboard/expenses",
    },
    {
      id: 4,
      name: "Upgrade",
      icon: ShieldCheck,
      path: "/dashboard/upgrade",
    },
  ];
  return (
    <div className="h-screen p-5 mx-auto border shadow-sm">
      <Image width={160} height={100} alt="logo" src={"/logo.png"} />

      <div className="mt-5">
        {menuList.map((menu, index) => (
          <h2
            className="flex mb-2 gap-2 items-center text-gray-600 text-md p-4 cursor-pointer rounded-md hover:text-indigo-600 hover:bg-blue-100"
            onClick={() => push(menu.path)}
            key={index}
          >
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
      <div className="fixed bottom-10 p-5 items-center flex gap-2">
        <UserButton />
        Profile
      </div>
    </div>
  );
};

export default SideNav;
