import { type IFriendRequestPopulated } from "~/lib/types";
import connectToDatabase from "../connect";
import FriendRequest from "../models/friendRequest";
import User from "../models/user";

export default async function getFriendRequests(id: string) {
  await connectToDatabase();

  try {
    const users = await User.find();
    const requests = await FriendRequest.find({ receiver: id })
      .populate("sender")
      .exec();
    
    console.table();
    return requests as unknown as IFriendRequestPopulated[];
  } catch (err) {
    console.error("couldn't get requests");
    console.error(err);
    return null;
  }
}
