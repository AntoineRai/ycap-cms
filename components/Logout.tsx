"use client"

import { LogOut } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

const Deconnexion = () => {
  const router = useRouter();

  const handleDeconnect = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    router.push("/");
  };

  return (
    <div className="w-4/5 flex flex-row-reverse px-4 justify-between">
      <div className="flex gap-2 py-2 cursor-pointer" onClick={handleDeconnect}>
        <p>Déconnexion</p>
        <LogOut />
      </div>
    </div>
  );
};

export default Deconnexion;
