import mongoose, { Document, Model, Schema } from "mongoose";

// Define an interface for Developer document
interface IUser extends Document {
  name: string;
  email: string;
  age: number;
  cell?: string | null;
  status?: boolean;
  trash?: boolean;
}

// Create Developer schema
const usersSchema: Schema<IUser> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    cell: {
      type: String,
      trim: true,
      default: null,
    },
    age: {
      type: Number,
      required: true,
      trim: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Export Developer model
const DeveloperModel: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", usersSchema);

export default DeveloperModel;
