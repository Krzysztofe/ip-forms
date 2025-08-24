"use server";
import { items } from "../data/items";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addItem = async () => {
  items.push("Alan");
  console.log("llll", items);
  revalidatePath("/login");
    redirect("/login");
};
