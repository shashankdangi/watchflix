"use client";
import React from "react";
import ToggleMode from "./ToggleMode";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();

  const handleRedirect = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <div className="flex justify-between border-b-2 pb-4 mb-5">
      <h1
        className="text-3xl font-bold hover:cursor-pointer"
        onClick={handleRedirect}
      >
        Watch
      </h1>
      <ToggleMode />
    </div>
  );
};

export default NavBar;
