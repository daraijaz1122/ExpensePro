import React from "react";

const SekeletonCard = () => {
  return (
    <div className="p-7 shadow-md border animate-pulse rounded-lg flex justify-between items-center ">
      <div>
        <h2 className="text-sm"></h2>
        <h2 className="font-bold text-2xl"></h2>
      </div>
      <div className=" bg-slate-100 p-3 h-12 w-12 rounded-full text-white"></div>
    </div>
  );
};

export default SekeletonCard;
