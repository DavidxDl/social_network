import type mongoose from "mongoose";
import { type Document } from "mongoose";
export interface IUser extends Document {
  _id: string;
  username: string;
  fullname: string;
  userId: string;
  email: string;
  photoURL: string;
  friends: Array<string>;
}

export interface IFriendRequest extends Document {
  _id: string;
  sender: mongoose.Types.ObjectId | IUser;
  receiver: mongoose.Types.ObjectId | IUser;
  createdAt: Date;
}

export interface IFriendRequestPopulated
  extends Omit<IFriendRequest, "sender" | "receiver"> {
  sender: IUser;
  receiver: IUser;
}
