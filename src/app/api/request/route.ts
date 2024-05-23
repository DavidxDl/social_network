import connectToDatabase from "~/server/db/connect";
import FriendRequest from "~/server/db/models/friendRequest";
//,
export async function GET() {
  await connectToDatabase();

  const newRequest = await FriendRequest.create({
    sender: "66470a464e276988b9776a05",
    receiver: "66470442bc4b22e2f61774bf",
  });
  console.table(newRequest);
  await newRequest.save();
  return Response.json(newRequest);
}
