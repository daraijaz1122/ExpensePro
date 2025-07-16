"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Header = () => {
  const Push = useRouter().push;
  const { isSignedIn } = useUser();
  return (
    <div className="p-5 flex items-center justify-between border shadow-md">
      <Image
        className="cursor-pointer"
        onClick={() => Push("/")}
        src={"/logo.png"}
        alt="logo"
        width={150}
        height={90}
      />
      {isSignedIn ? (
        <Button
          className="bg-indigo-600 px-8 py-6 text-md hover:bg-indigo-700 cursor-pointer text-white"
          onClick={() => Push("/dashboard")}
        >
          Dashboard
        </Button>
      ) : (
        <Button
          onClick={() => Push("/sign-in")}
          className="bg-indigo-600 px-8 py-6 text-md text-white hover:bg-indigo-700 cursor-pointer"
        >
          Get Started
        </Button>
      )}
    </div>
  );
};

export default Header;
