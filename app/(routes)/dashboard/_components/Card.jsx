import React from "react";

const Card = ({ value, Icon, name }) => {
  return (
    <div className="p-7 shadow-md border rounded-lg flex justify-between items-center ">
      <div>
        <h2 className="text-sm">{name}</h2>
        {name === "Number of Budgets" ? (
          <h2 className="font-bold text-2xl">{value}</h2>
        ) : (
          <h2 className="font-bold text-2xl">${value}</h2>
        )}
      </div>
      <Icon className=" bg-indigo-600 p-3 h-12 w-12 rounded-full text-white" />
    </div>
  );
};

export default Card;
