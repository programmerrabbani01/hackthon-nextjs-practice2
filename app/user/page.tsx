import mongoDBConnection from "@/config/mongoDb.ts";
import { getAllUsers } from "@/controllers/userController.ts";
import React from "react";

export default async function UserPage() {
  await mongoDBConnection();

  const users = await getAllUsers();

  console.log(users);

  return <div>User Page</div>;
}
