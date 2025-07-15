"use server"
import { db } from "@/utils";
import { Budgets, Expenses } from "@/utils/schema";
import { eq,desc } from "drizzle-orm";
import moment from "moment";

export async function addExpense(data) {
    
    const { expenseName, expenseAmount, budgetId, email } = data;
   
    const result = await db.insert(Expenses).values({
        name: expenseName,
        amount: expenseAmount,
        budgetId: budgetId,
        createdAt:moment().format("DD/MM/YYYY")

    }).returning({insertedId:Budgets.id}) 
    return result
}
 
export async function getExpenses(id) {
    const result = await db.select().from(Expenses)
        .where(eq(Expenses.budgetId, id))
        .orderBy(desc(Expenses.id))
    return result;
}

export async function deleteExpense(expense) {
    const result = await db.delete(Expenses)
        .where(eq(Expenses.id, expense.id))
        .returning();
    return result;
}