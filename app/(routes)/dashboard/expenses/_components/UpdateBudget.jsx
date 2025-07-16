"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import EmojiPicker from "emoji-picker-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateBudget } from "@/app/actions/userBudgets";
import { toast } from "sonner";
import { PenBox } from "lucide-react";

const UpdateBudget = ({ refreshData, data }) => {
  const [selectedEmoji, setSelectedEmoji] = useState(data?.icon);
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [budgetTitle, setBudgetTitle] = useState(data?.name);
  const [budgetAmount, setBudgetAmount] = useState(data?.amount);
  const id = data?.id;

  const HandleBudgetSubmit = async () => {
    const data = {
      budgetTitle,
      budgetAmount,
      selectedEmoji,
      id,
    };
    const response = await updateBudget(data);
    if (response) {
      refreshData();
      toast("Budget Updated successfully!");
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="cursor-pointer hover:bg-indigo-400 bg-indigo-600">
            <PenBox /> Edit
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Budget</DialogTitle>
            <DialogDescription>
              <div className="mt-5">
                <Button
                  className="text-2xl cursor-pointer"
                  variant="outline"
                  size="lg"
                  onClick={(e) => setOpenEmojiPicker(!openEmojiPicker)}
                >
                  {selectedEmoji}
                </Button>
                <div className="absolute">
                  <EmojiPicker
                    open={openEmojiPicker}
                    onEmojiClick={(e) => {
                      setSelectedEmoji(e.emoji);
                      setOpenEmojiPicker(false);
                    }}
                  />
                </div>

                <div className="mt-2">
                  <h2 className="text-black font-medium my-1">Budget Title</h2>
                  <Input
                    defaultValue={data.name}
                    placeholder="e.g Travel"
                    onChange={(e) => setBudgetTitle(e.target.value)}
                  />
                </div>
                <div className="mt-2">
                  <h2 className="text-black font-medium my-1">Budget Amount</h2>
                  <Input
                    defaultValue={data.amount}
                    type="number"
                    onChange={(e) => setBudgetAmount(e.target.value)}
                    placeholder="e.g 1000$"
                  />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                disabled={!(budgetTitle && budgetAmount)}
                onClick={HandleBudgetSubmit}
                className="mt-5 w-full cursor-pointer"
              >
                Update Budget
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateBudget;
