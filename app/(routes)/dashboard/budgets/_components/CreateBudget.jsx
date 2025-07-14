"use client";
import Reac, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog";
import EmojiPicker from 'emoji-picker-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useUser } from '@clerk/nextjs';
import { createBudget } from '@/app/actions/userBudgets';
import { toast } from 'sonner';

const CreateBudget = () => {
    const [selectedEmoji, setSelectedEmoji] = useState("😁");
    const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
    const [budgetTitle, setBudgetTitle] = useState("");
    const [budgetAmount, setBudgetAmount] = useState("");
    const { user } = useUser();
    const createdBy = user?.primaryEmailAddress?.emailAddress;

    const HandleBudgetSubmit = async () => {
        const data = {
            budgetTitle,
            budgetAmount,
            selectedEmoji,
            createdBy
        }
        const response = await createBudget(data);
        if (response) {
            console.log(response,"inside soner")
            toast("Budget created successfully!");
        }
    }
  return (
      <div>
          
          <Dialog>
              <DialogTrigger asChild>
                <div className=' bg-slate-100 p-10 rounded-md items-center 
                    flex flex-col border-2 border-dashed cursor-pointer hover:shadow-sm'>
                        <h2 className='text-3xl'>+</h2>
                        <h2>Create New Budget</h2>
                            </div>
                            </DialogTrigger>
                            <DialogContent>
                            <DialogHeader>
                            <DialogTitle>Create New Budget</DialogTitle>
                            <DialogDescription>
                                <div className='mt-5'>
                                        
                                        <Button
                                            className='text-2xl cursor-pointer'
                                            variant="outline"
                                            size='lg'
                                            onClick={(e) => setOpenEmojiPicker(!openEmojiPicker)}

                                        >
                                            {selectedEmoji}
                                        </Button>
                                        <div className='absolute'>
                                            <EmojiPicker
                                            open={openEmojiPicker}
                                            onEmojiClick={(e) => {
                                                setSelectedEmoji(e.emoji)
                                                setOpenEmojiPicker(false)
                                            }}
                                            />
                                        </div>

                                        <div className='mt-2'>
                                            <h2 className='text-black font-medium my-1'>Budget Title</h2>
                                            <Input
                                                placeholder='e.g Travel'
                                            onChange={(e)=>setBudgetTitle(e.target.value)}
                                            />
                                        </div>
                                        <div className='mt-2'>
                                            <h2 className='text-black font-medium my-1'>Budget Amount</h2>
                                            <Input
                                                type='number'
                                                onChange={(e)=>setBudgetAmount(e.target.value)}
                                                placeholder='e.g 1000$' />
                                        </div>
                                       
                            </div>
                  </DialogDescription>
                  </DialogHeader>
                  
                  <DialogFooter className='sm:justify-start'>
                      <DialogClose asChild>
                         <Button
                            disabled={!(budgetTitle && budgetAmount)}
                            onClick={HandleBudgetSubmit}
                            className='mt-5 w-full cursor-pointer'>
                            Create Budget
                          </Button>
                    </DialogClose>
                   </DialogFooter>
                </DialogContent>
            </Dialog>
    </div>
  )
}

export default CreateBudget