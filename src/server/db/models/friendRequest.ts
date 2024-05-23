import mongoose from "mongoose";
import { type IFriendRequest } from "~/lib/types";
import User from "./user";

const Schema = mongoose.Schema;

const friendRequestSchema = new Schema<IFriendRequest>({
  createdAt: { type: Date, default: Date.now() },
  sender: { type: Schema.Types.ObjectId, ref: "User" },
  receiver: { type: Schema.Types.ObjectId, ref: "User" },
});

const FriendRequest: mongoose.Model<IFriendRequest> =
  mongoose.models.FriendRequest ??
  mongoose.model<IFriendRequest>("FriendRequest", friendRequestSchema);

export default FriendRequest;
