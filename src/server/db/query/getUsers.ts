import User from "../models/user";

export default async function getUsers(username?: string) {
  const users = (await User.find({
    username: { $regex: username ?? "", $options: "i" },
  }))
  return users;
}
