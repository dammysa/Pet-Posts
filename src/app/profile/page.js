import { auth } from "@clerk/nextjs/server";
import { connect } from "@/utils/connect";
import UserForm from "@/components/UserForm";
import EditBioForm from "@/components/EditBioForm";

export default async function ProfilePage() {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) return redirectToSignIn();

  const db = connect();
  const res = await db.query(`SELECT * FROM users WHERE clerk_user_id = $1`, [
    userId,
  ]);
  const user = res.rows[0];

  if (!user) {
    return (
      <div className="p-9 max-w-xl mx-auto mt-12">
        <h1 className="text-2x1 font-bold text-center text-white">
          Complete Your Profile
        </h1>
        <UserForm />
      </div>
    );
  }
  return (
    <div className="p-9 max-w-xl mx-auto mt-10 bg-gray-900 rounded text-white">
      <h1 className="text-3x1 font-bold mb-2">Welcome, {user.username}</h1>
      <p className="text-gray-300 mb-2">{user.bio}</p>
      <div className="border-t border-gray-700 pt-6">
        <h2 className=" text-2x1 font-bold mb-2">Edit your Bio</h2>
        <EditBioForm userId={user.id} currentBio={user.bio} />
      </div>
    </div>
  );
}
