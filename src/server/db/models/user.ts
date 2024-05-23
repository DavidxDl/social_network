import mongoose from "mongoose";
import { type IUser } from "~/lib/types";
const Schema = mongoose.Schema;

const userSchema = new Schema<IUser>({
  userId: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  fullname: { type: String, required: true },
  photoURL: { type: String },
  email: { type: String, required: true, unique: true },
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      createdAt: { type: Date, default: Date.now() },
    },
  ],
});

const User: mongoose.Model<IUser> =
  mongoose.models.User ?? mongoose.model<IUser>("User", userSchema);

export default User;
