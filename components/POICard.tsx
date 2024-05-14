import React from "react";
import { Map, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

const POICard = (props: any) => {
  const redirectToUpdate = `/poi/update?id=${props.id}`;

  const handleDelete = () => {
    fetch(`http://localhost:3000/pois/${props.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then(() => {
      window.location.reload();
    });
  }

  return (
    <div className="flex flex-row justify-around bg-white border-2 border-black rounded-lg h-1/4 w-full px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-[#C2E4FF] rounded-lg p-2">
          <Map />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center">
        <h1 className="font-bold">{props.name}</h1>
      </div>
      <div className="flex flex-col items-center justify-around">
        <Link href={redirectToUpdate}>
          <Pencil />
        </Link>
        <Trash2 onClick={handleDelete}/>
      </div>
    </div>
  );
};

export default POICard;
