"use client";

import React, { useEffect } from "react";
import { CirclePlus, LogOut } from "lucide-react";
import CityCard from "@/components/CityCard";
import Link from "next/link";
import Deconnexion from "@/components/Deconnexion";

export default function Page() {
  const [cities, setCities] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cities", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCities(data);
      });
  }, []);

  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <Deconnexion />
      <div className="flex flex-col items-center justify-center h-4/5 w-4/5 border-2 border-black rounded-xl bg-[#C2E4FF]">
        <div className="h-full w-4/5">
          <div className="flex flex-row justify-between items-center px-2 py-6">
            <h1 className="font-bold text-xl">Liste des villes</h1>
            <Link href="/city/add">
              <div className="flex flex-row gap-2">
                <p className="font-bold">Ajouter une ville</p>
                <CirclePlus />
              </div>
            </Link>
          </div>
          <div className="flex flex-col flex-wrap gap-2 h-4/5">
            {cities.map((city) => (
                <CityCard
                  id={city.ID}
                  city={city.CityName}
                  lat={city.Latitude}
                  long={city.Longitude}
                  range={city.Reach}
                  key={city.ID}
                />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
