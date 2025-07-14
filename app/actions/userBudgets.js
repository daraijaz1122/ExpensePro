'use server';

import { db } from '@/utils';
import { Budgets, Expenses } from '@/utils/schema';
import { eq, getTableColumns } from 'drizzle-orm';
import { sql } from 'drizzle-orm';
export async function getUserBudgets(userEmail) {
    if (!userEmail) return [];
 
  const result = await db
    .select()
    .from(Budgets)
    .where(eq(Budgets.createdBy, userEmail)); 
  return result;
}

export async function createBudget(data) {
  const {  budgetTitle, budgetAmount,selectedEmoji, createdBy } = data;
 
  const newBudget = await db.insert(Budgets).values({
   
    name: budgetTitle,
    amount: budgetAmount,
    icon: selectedEmoji,
    createdBy: createdBy
  }).returning({ insertedId: Budgets.id });
  
  return newBudget;
}

export async function getBudgetList(email) {
  const budgets = await db.select({
    ...getTableColumns(Budgets),
    totalSpend: sql `sum(${Expenses.amount})`.mapWith(Number),
    totalItem: sql `count(${Expenses.id})`.mapWith(Number)

  }).from(Budgets)
    .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
    .where(eq(Budgets.createdBy,email))
    .groupBy(Budgets.id);
  return budgets;
}
