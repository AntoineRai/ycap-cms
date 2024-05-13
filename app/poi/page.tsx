"use client";

import React from "react";
import { LogOut, CirclePlus } from "lucide-react";
import { useSearchParams } from "next/navigation";
import CityCardFull from "@/components/CityCardFull";
import POICard from "@/components/POICard";

const Page = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const id = searchParams.get("id");

  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <div className="w-4/5 flex flex-row-reverse px-4">
        <div className="flex gap-2 py-2">
          <p>Déconnexion</p>
          <LogOut />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-4/5 w-4/5 border-2 border-black rounded-xl bg-[#C2E4FF]">
        <div className="h-full w-4/5">
          <div className="flex flex-row justify-between items-center px-2 py-6">
            <h1 className="font-bold text-xl">Informations ville de {name}</h1>
            <div className="flex flex-row gap-2">
              <p className="font-bold">Ajouter un POI</p>
              <CirclePlus />
            </div>
          </div>
          <div className="flex flex-row h-4/5 w-full">
            <div className="w-1/2">
              <CityCardFull city="Lille" lat="47.6193757" long="6.1529374" />
            </div>
            <div className="w-1/2 pl-2 flex flex-col gap-2">
              <POICard poi="Wazemmes" />
              <POICard poi="Vieux-Lille" />
              <POICard poi="La Madeleine" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
