import { Binary, ReceiptIcon, Wallet } from "lucide-react";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import SekeletonCard from "./SekeletonCardDashboard";

const CardInfo = ({ budgetList }) => {
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalSpend, setTotalSpend] = useState(0);

  useEffect(() => {
    budgetList && calculateCardInfo();
  }, [budgetList]);
  const calculateCardInfo = () => {
    let budget = 0;
    let spend = 0;
    budgetList.forEach((element) => {
      budget += Number(element.amount);
      spend += element.totalSpend;
    });
    setTotalBudget(budget);
    setTotalSpend(spend);
  };

  return (
    <>
      {budgetList.length > 0 ? (
        <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Card value={totalBudget} Icon={Wallet} name={"Total Budget"} />
          <Card value={totalSpend} Icon={ReceiptIcon} name={"Total Spend"} />
          <Card
            value={budgetList.length}
            Icon={Binary}
            name={"Number of Budgets"}
          />
        </div>
      ) : (
        <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((idx) => (
            <SekeletonCard key={idx} />
          ))}
        </div>
      )}
    </>
  );
};

export default CardInfo;
