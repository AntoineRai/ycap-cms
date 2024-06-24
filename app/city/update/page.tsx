"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CityFormUpdate from "@/components/CityFormUpdate";
import Deconnexion from "@/components/Logout";

const Page = () => {
  const searchParams = useSearchParams();

  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <Deconnexion />
      <div className="flex flex-col items-center justify-start h-4/5 w-4/5 border-2 border-black rounded-xl bg-[#C2E4FF]">
        <div className="py-8 w-4/5">
          <h1 className="font-bold text-xl">Modifier une ville - {searchParams.get("name")}</h1>
        </div>
        <Suspense>
          <div className="flex flex-row w-4/5">
            <CityFormUpdate id={searchParams.get("id")} />
          </div>
        </Suspense>
      </div>
    </main>
  );
};

export default Page;
