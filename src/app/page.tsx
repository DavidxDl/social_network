import { type IUser } from "~/lib/types";
import getFriendRequests from "~/server/db/query/getFriendRequests";

export default async function HomePage() {
  const requests = await getFriendRequests("66470442bc4b22e2f61774bf");
  console.log(requests);
  return (
    <>
      <h1>Hello World </h1>
      <ul>{requests?.map((r) => <li key={r._id}>{r.sender.username}</li>)}</ul>
    </>
  );
}
