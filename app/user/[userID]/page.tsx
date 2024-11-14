import { getASingleUser } from "@/controllers/userController";
import React from "react";
import { ObjectId } from "mongodb";
import mongoDBConnection from "@/config/mongoDb.ts";

type Props = {
  params: {
    userID: string;
  };
};

export default async function SingleUser({ params }: Props) {
  await mongoDBConnection();

  let user;

  try {
    // Convert params.userID to ObjectId
    const userIdObject = new ObjectId(params.userID);
    user = await getASingleUser(userIdObject); // Pass ObjectId directly
  } catch (error) {
    console.error("Error fetching user:", error);
    return <div>Error fetching user</div>;
  }

  return <div>{user ? user.name : "User not found"}</div>;
}
