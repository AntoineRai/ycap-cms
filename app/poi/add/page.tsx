"use client";

import React, { useState, useEffect, Suspense } from "react";
import { LogOut } from "lucide-react";
import { POIFormCreate } from "@/components/POIFormCreate";
import { useSearchParams } from "next/navigation";
import Deconnexion from "@/components/Logout";
import { City } from "@/entity/City";

const Page = () => {
  const searchParams = useSearchParams();

  const [city, setCity] = useState<City>({} as City);

  useEffect(() => {
    fetch(`http://localhost:3000/cities/${searchParams.get("id")}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCity(data);
        console.log(data);
      });
  }, [searchParams]);

  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <Deconnexion />
      <div className="flex flex-col items-center justify-start h-4/5 w-4/5 border-2 border-black rounded-xl bg-[#C2E4FF]">
        <div className="py-8 w-4/5">
          <h1 className="font-bold text-xl">
            Ajouter un POI - {city.CityName}
          </h1>
        </div>
        <Suspense>
          <div className="flex flex-row w-4/5">
            <POIFormCreate id={searchParams.get("id")} />
          </div>
        </Suspense>
      </div>
    </main>
  );
};

export default Page;
