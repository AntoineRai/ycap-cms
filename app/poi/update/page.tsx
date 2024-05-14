"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { LogOut } from "lucide-react";
import POIFormUpdate from "@/components/POIFormUpdate";
import Deconnexion from "@/components/Logout";

const Page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [poi, setPoi] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/pois/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPoi(data);
      });
  }, []);

  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <Deconnexion/>
      <div className="flex flex-col items-center justify-start h-4/5 w-4/5 border-2 border-black rounded-xl bg-[#C2E4FF]">
        <div className="py-8 w-4/5">
          <h1 className="font-bold text-xl">Modifier un POI</h1>
        </div>
        <div className="flex flex-row w-4/5">
          <POIFormUpdate id={id} />
        </div>
      </div>
    </main>
  );
};

export default Page;
