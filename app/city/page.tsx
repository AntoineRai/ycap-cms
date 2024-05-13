import React from "react";
import { CirclePlus, Link, LogOut } from "lucide-react";
import CityCard from "@/components/CityCard";

export default function Page() {

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
            <h1 className="font-bold text-xl">Liste des villes</h1>
            <div className="flex flex-row gap-2">
              <p className="font-bold">Ajouter une ville</p>
              <CirclePlus />
            </div>
          </div>
          <div className="flex flex-col flex-wrap gap-2 h-4/5">
            <CityCard city="Lille" lat="47.6193757" long="6.1529374" />
            <CityCard city="Lille" lat="47.6193757" long="6.1529374" />
            <CityCard city="Lille" lat="47.6193757" long="6.1529374" />
            <CityCard city="Lille" lat="47.6193757" long="6.1529374" />
            <CityCard city="Lille" lat="47.6193757" long="6.1529374" />
          </div>
        </div>
      </div>
    </main>
  );
}
