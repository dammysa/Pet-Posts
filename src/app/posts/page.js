import { connect } from "@/utils/connect";
import PetPostList from "@/components/PetPostList";

export default async function PostsPage() {
  const db = connect();

  const res = await db.query(
    `SELECT id, image_url, caption, animal_type FROM pet_posts ORDER BY created_at DESC`
  );
  const posts = res.rows;

  return (
    <main className="p-5">
      <h1 className="text-3x1 font-bold text-white text-center">
        All Pet Posts
      </h1>
      <PetPostList posts={posts} />
    </main>
  );
}
