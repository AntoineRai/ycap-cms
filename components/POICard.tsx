import React from "react";
import { Map, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

const POICard = (props: any) => {
  const redirectToUpdate = `/poi/update?id=${props.id}`;

  return (
    <div className="flex flex-row justify-around bg-white border-2 border-black rounded-lg h-1/4 w-full px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-[#C2E4FF] rounded-lg p-2">
          <Map />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center max-w-1/2">
        <h1 className="font-bold truncate">{props.name}</h1>
        <p className="text-sm">Latitude: {props.lat}</p>
        <p className="text-sm">Longitude: {props.long}</p>
        <p className="text-sm   ">Description: {props.description}</p>
      </div>
      <div className="flex flex-col items-center justify-around">
        <Link href={redirectToUpdate}>
          <Pencil />
        </Link>
        <Trash2 onClick={() => props.handleDelete(props.id)} />
      </div>
    </div>
  );
};

export default POICard;
