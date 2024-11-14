import { createUserFormData } from "@/actions/createUserFormData.ts";
import React from "react";

export default function CreateUser() {
  return (
    <>
      <div className="m-40">
        <form action={createUserFormData} className="flex flex-col gap-2 w-96">
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <input type="number" placeholder="Age" name="age" />
          <input type="number" placeholder="Cell" name="cell" />
          <button type="submit" className="bg-pink-600 text-white">
            Create
          </button>
        </form>
      </div>
    </>
  );
}
