import React from "react";
import { Home, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

const CityCard = (props: any) => {
  const redirectToUpdate = `/city/update?id=${props.id}&name=${props.city}`;
  const redirectToPOI = `/poi?id=${props.id}`;

  return (
    <div className="flex flex-row justify-around bg-white border-2 border-black rounded-lg min-h-[100px] w-5/12 m-1">
      <div className="flex flex-col items-center justify-center">
        <Link href={redirectToPOI}>
          <div className="bg-[#C2E4FF] rounded-lg p-2">
            <Home />
          </div>
        </Link>
      </div>
      <div className="flex flex-col items-start justify-center">
        <h1 className="font-bold">{props.city}</h1>
        <p className="text-sm">Latitude: {props.lat}</p>
        <p className="text-sm">Longitude: {props.long}</p>
        <p className="text-sm">Rayon: {props.range} km</p>
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

export default CityCard;
