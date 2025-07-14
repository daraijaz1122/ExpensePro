"use server"
import { getUserBudgets } from "../actions/userBudgets";

export default async function fetchData(email) {
    console.log("inside fetch data")
    const result = await getUserBudgets(email)
    return result;
}