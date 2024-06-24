"use client";

import React, { useEffect, useState } from "react";
import { LogOut, CirclePlus } from "lucide-react";
import { useSearchParams } from "next/navigation";
import CityCardFull from "@/components/CityCardFull";
import POICard from "@/components/POICard";
import Link from "next/link";
import Deconnexion from "@/components/Logout";
import OverlayDeletePOI from "@/components/OverlayDeletePOI";
import { POI } from "@/entity/POI";
import { City } from "@/entity/City";
import { Suspense } from "react";
import { CSR } from "@/config/CSR";
import { isExpired } from "@/utils/jwt";

const Page = () => {

  const searchParams = useSearchParams();

  const redirect = `/poi/add?id=${searchParams.get("id")}`;

  const [city, setCity] = useState<City>({} as City);
  const [poi, setPoi] = useState([]);
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [currentPOIId, setCurrentPOIId] = useState(0);

  useEffect(() => {
    isExpired(
      localStorage.getItem("accessToken"),
      localStorage.getItem("refreshToken")
    );
    fetch(`${CSR}/cities/${searchParams.get("id")}`, {
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

  useEffect(() => {
    isExpired(
      localStorage.getItem("accessToken"),
      localStorage.getItem("refreshToken")
    );
    fetch(`${CSR}/pois/bycity/${searchParams.get("id")}`, {
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
  }, [searchParams]);

  const handleDelete = async () => {
    isExpired(
      localStorage.getItem("accessToken"),
      localStorage.getItem("refreshToken")
    );
    fetch(`${CSR}/pois/${currentPOIId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((data) => {
      console.log(data);
      setIsDisplayed(false);
      setPoi(poi.filter((poi: POI) => poi.ID !== currentPOIId));
    });
  };

  const poppin = (id: number) => {
    setIsDisplayed(true);
    setCurrentPOIId(id);
  };

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
            <Suspense>
              <div className="w-1/2 pl-2 flex flex-col gap-2">
                {poi?.map((poi: POI) => (
                  <POICard
                    key={poi.ID}
                    name={poi.Name}
                    id={poi.ID}
                    lat={poi.Latitude}
                    long={poi.Longitude}
                    description={poi.Description}
                    handleDelete={poppin}
                  />
                ))}
              </div>
            </Suspense>
          </div>
        </div>
      </div>
      {isDisplayed && (
        <OverlayDeletePOI
          onClose={() => setIsDisplayed(false)}
          onDelete={handleDelete}
        />
      )}
    </main>
  );
};

export default Page;
