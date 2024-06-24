"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Ban } from "lucide-react";

const StopPOI = (id: any) => {
  const router = useRouter();

  const handleStop = () => {
    router.push("/poi?id=" + id.id);
  };
  return (
    <div className="w-4/5 flex flex-row-reverse px-4 justify-between">
      <div className="flex gap-2 py-2 cursor-pointer" onClick={handleStop}>
        <p>Annuler</p>
        <Ban />
      </div>
    </div>
  );
};

export default StopPOI;
