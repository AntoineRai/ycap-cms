import React from "react";
import { LogOut } from "lucide-react";
import { CityFormCreate } from "@/components/CityFormCreate";
import Deconnexion from "@/components/Logout";
import useAuth from "@/hook/useAuth";

const Page = () => {
  useAuth();
  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <Deconnexion />
      <div className="flex flex-col items-center justify-start h-4/5 w-4/5 border-2 border-black rounded-xl bg-[#C2E4FF]">
        <div className="py-8 w-4/5">
          <h1 className="font-bold text-xl">Ajouter une ville</h1>
        </div>
        <div className="flex flex-row w-4/5">
          <CityFormCreate />
        </div>
      </div>
    </main>
  );
};

export default Page;
