import User from "@/models/User";
import { ObjectId } from "mongodb";

type UserData = {
  name: string;
  email: string;
  age: number;
  cell: string;
  // Add any other properties expected in the User model
};

// Get all users
export const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error fetching users:", error.message);
    } else {
      console.log("Unknown error occurred while fetching users");
    }
    return []; // Return an empty array if there's an error
  }
};

// Get a single user
export const getASingleUser = async (userID: ObjectId) => {
  // Accepts ObjectId
  try {
    const user = await User.findById(userID);
    return user;
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error fetching user:", error.message);
    } else {
      console.log("Unknown error occurred while fetching user");
    }
  }
};

// Get a single user
export const createAUser = async (data: UserData) => {
  // Accepts ObjectId
  try {
    const user = await User.create(data);
    return user;
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error fetching user:", error.message);
    } else {
      console.log("Unknown error occurred while fetching user");
    }
  }
};
