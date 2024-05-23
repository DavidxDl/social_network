import connectToDatabase from "~/server/db/connect";
import User from "~/server/db/models/user";

export async function GET(req: Request) {
  await connectToDatabase();

  try {
    const users = await User.find();
    return Response.json(users);
  } catch (error) {
    console.error(error);
    return Response.json({ error: error });
  }
}
