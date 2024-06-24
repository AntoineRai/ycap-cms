"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import POIFormUpdate from "@/components/POIFormUpdate";
import Deconnexion from "@/components/Logout";
import StopCity from "@/components/StopCity";

const Page = () => {
  const searchParams = useSearchParams();

  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <Deconnexion />
      <div className="flex flex-col items-center justify-start h-4/5 w-4/5 border-2 border-black rounded-xl bg-[#C2E4FF]">
        <div className="py-8 w-4/5">
          <h1 className="font-bold text-xl">Modifier un POI</h1>
        </div>
        <div className="flex flex-row w-4/5">
          <POIFormUpdate id={searchParams?.get("id") ?? ""} />
        </div>
      </div>
      <StopCity />
    </main>
  );
};

export default Page;
