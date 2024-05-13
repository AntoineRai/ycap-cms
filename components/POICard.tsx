import React from "react";
import { Map, Pencil, Trash2 } from "lucide-react";

const POICard = (props: any) => {
  return (
    <div className="flex flex-row justify-around bg-white border-2 border-black rounded-lg h-1/4 w-full px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-[#C2E4FF] rounded-lg p-2">
          <Map />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center">
        <h1 className="font-bold">{props.poi}</h1>
      </div>
      <div className="flex flex-col items-center justify-around">
        <Pencil />
        <Trash2 />
      </div>
    </div>
  );
};

export default POICard;
