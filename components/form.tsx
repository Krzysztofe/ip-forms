"use client";
import { addItem } from "@/actions/add";
import { useActionState } from "react";

export default function Form() {
  const [atate, action] = useActionState(addItem, null);

  return (
    <form action={action}>
      <button>dodaj</button>
    </form>
  );
}
