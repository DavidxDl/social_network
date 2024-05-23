import User from "~/server/db/models/user";
import connectToDatabase from "../connect";

export default async function getUser(id: string) {
  await connectToDatabase();

  try {
    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found");
    }

    console.log(user);
    return user;
  } catch (error) {
    console.error("User not found", error);
  }
}
