import React from "react";

export const BudgetCard = ({ budget, index }) => {
  return (
    <div
      key={index}
      className="p-5 border hover:shadow-md cursor-pointer hover:bg-gray-50 rounded-lg  "
    >
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <h2 className="text-2xl p-3 b-slate-200 rounded-full">
            {" "}
            {budget.icon}
          </h2>
          <div>
            <h2 className="font-bold">{budget?.name}</h2>
            <h2 className="text-sm text-gray-500"> {budget?.totalItem} Item</h2>
          </div>
        </div>
        <h2 className="font-bold text-indigo-600">${budget?.amount}</h2>
      </div>
      <div className="mt-5">
        <div className="flex items-center mb-3 justify-between">
          <h2 className="text-xs text-slate-500">
            ${budget?.totalSpend ? budget.totalSpend : 0} Spend
          </h2>
          <h2 className="text-xs text-slate-500">
            ${budget?.amount - budget?.totalSpend} Balance
          </h2>
        </div>
        <div className="bg-slate-300 w-full h-2">
          <div className="w-[40%] h-2 bg-indigo-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
