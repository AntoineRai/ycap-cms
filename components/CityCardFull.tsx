import React from "react";
import { Home, Pencil, Trash2 } from "lucide-react";

const CityCardFull = (props : any) => {
  return (
    <div className="flex flex-row justify-around bg-white border-2 border-black rounded-lg h-1/4 w-full px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-[#C2E4FF] rounded-lg p-2">
          <Home />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center">
        <h1 className="font-bold">{props.city}</h1>
        <p className="text-sm">Latitude: {props.lat}</p>
        <p className="text-sm">Longitude: {props.long}</p>
        <p className="text-sm">Rayon: {props.range} km</p>
      </div>
    </div>
  );
};

export default CityCardFull;
