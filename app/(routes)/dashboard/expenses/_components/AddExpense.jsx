import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { addExpense } from "@/app/actions/userExpenses";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import { Loader } from "lucide-react";

const AddExpense = ({ budgetId, refreshData }) => {
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const email = user?.primaryEmailAddress?.emailAddress;

  const handleAddExpense = async () => {
    setLoading(true);
    const data = {
      expenseName,
      expenseAmount,
      budgetId,
      email,
    };
    const result = await addExpense(data);

    if (result) {
      setExpenseAmount("");
      setExpenseAmount("");
      setLoading(false);
      refreshData();
      toast("Expense Added Sucessfully");
    }
  };

  return (
    <div className=" border p-5 rounded-lg  ">
      <h2 className="text-lg font-bold">Add Expense</h2>

      <div className="mt-2">
        <h2 className="text-black font-medium my-1">Expense Name</h2>
        <Input
          placeholder="e.g Bedroom Decor"
          onChange={(e) => setExpenseName(e.target.value)}
        />
      </div>

      <div className="mt-2">
        <h2 className="text-black font-medium my-1"> Expense Amount</h2>
        <Input
          type="number"
          placeholder="e.g $100"
          onChange={(e) => setExpenseAmount(e.target.value)}
        />
      </div>
      <Button
        onClick={handleAddExpense}
        variant="outline"
        disabled={!(expenseName && expenseAmount)}
        className="w-full cursor-pointer mt-3  bg-indigo-600 text-white text-md "
      >
        {loading ? <Loader /> : "Add New Expense"}
      </Button>
    </div>
  );
};

export default AddExpense;
