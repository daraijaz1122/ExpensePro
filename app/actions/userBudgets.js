'use server';

import { db } from '@/utils';
import { Budgets, Expenses } from '@/utils/schema';
import { desc, eq, getTableColumns ,and} from 'drizzle-orm';
import { sql } from 'drizzle-orm';
export async function getUserBudgets(email) {
    if (!email) return [];
  const result = await db
    .select()
    .from(Budgets)
    .where(eq(Budgets.createdBy,email)); 
  
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
    .groupBy(Budgets.id)
    .orderBy(desc(Budgets.id));
  return budgets;
}

export async function getBudget(id,email) {
  const budget = await db.select({
    ...getTableColumns(Budgets),
    totalSpend: sql `sum(${Expenses.amount})`.mapWith(Number),
    totalItem: sql `count(${Expenses.id})`.mapWith(Number)

  }).from(Budgets)
    .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
    .where(and(eq(Budgets.createdBy, email), eq(Budgets.id, id)))
    .groupBy(Budgets.id)
    
  return budget;
}

export async function deleteBudgetWithExpenses(id) {
  const deleteExpensesResult = await db.delete(Expenses)
    .where(eq(Expenses.budgetId, id)).returning()
  
  if (deleteExpensesResult) {
    const deleteBudgetResult = await db.delete(Budgets)
      .where(eq(Budgets.id, id)).returning();
    return deleteBudgetResult;
  }
}
export async function updateBudget(data) {
  const { budgetTitle, budgetAmount, selectedEmoji,id } = data;
  const response = await db.update(Budgets).set({
    name: budgetTitle,
    amount: budgetAmount,
    icon:selectedEmoji
  }).where(eq(Budgets.id, id)).returning()
  return response
}
