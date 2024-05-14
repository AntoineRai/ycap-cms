"use client";

import React, { useEffect, useState } from "react";
import { LogOut, CirclePlus } from "lucide-react";
import { useSearchParams } from "next/navigation";
import CityCardFull from "@/components/CityCardFull";
import POICard from "@/components/POICard";
import Link from "next/link";
import Deconnexion from "@/components/Deconnexion";

const Page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const redirect = `/poi/add?id=${id}`;

  const [city, setCity] = useState({});
  const [poi, setPoi] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/cities/${id}`, {
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
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/pois/bycity/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPoi(data);
        console.log(data);
      });
  }, []);

  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <Deconnexion />
      <div className="flex flex-col items-center justify-center h-4/5 w-4/5 border-2 border-black rounded-xl bg-[#C2E4FF]">
        <div className="h-full w-4/5">
          <div className="flex flex-row justify-between items-center px-2 py-6">
            <h1 className="font-bold text-xl">
              Informations ville de {city.CityName}
            </h1>
            <Link href={redirect}>
              <div className="flex flex-row gap-2">
                <p className="font-bold">Ajouter un POI</p>
                <CirclePlus />
              </div>
            </Link>
          </div>
          <div className="flex flex-row h-4/5 w-full">
            <div className="w-1/2">
              <CityCardFull
                city={city.CityName}
                lat={city.Latitude}
                long={city.Longitude}
                range={city.Reach}
              />
            </div>
            <div className="w-1/2 pl-2 flex flex-col gap-2">
              {poi.map((poi) => (
                <POICard key={poi.ID} name={poi.Name} id={poi.ID} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
