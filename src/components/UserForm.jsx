import { auth } from "@clerk/nextjs/server";
import { connect } from "@/utils/connect";
import { redirect } from "next/navigation";

export default async function UserForm() {
  const { userId } = await auth();

  async function handleUserInfoSubmit(formData) {
    "use server";

    const { username, bio } = Object.fromEntries(formData);
    const { userId } = await auth();
    const db = connect();

    await db.query(
      `INSERT INTO users (username, bio, clerk_user_id) VALUES ($1, $2, $3)`,
      [username, bio, userId]
    );

    redirect("/profile");
  }
  return (
    <form action={handleUserInfoSubmit} className="space-y-4 max-w-md">
      <input
        name="username"
        placeholder="Enter your username"
        className="border p-2 w-full"
        required
      />
      <input
        name="bio"
        placeholder="Enter a short bio..."
        className="border p-2 w-full"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}
