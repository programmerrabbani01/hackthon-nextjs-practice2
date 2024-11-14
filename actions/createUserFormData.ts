"use server";

import { createAUser } from "@/controllers/userController.ts";

export const createUserFormData = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const age = Number(formData.get("age"));
  const cell = formData.get("cell") as string;

  await createAUser({ name, age, email, cell });
};
