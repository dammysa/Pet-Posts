import Image from "next/image";
import { connect } from "@/utils/connect";

export default async function HomePage() {
  const db = connect();

  const res = await db.query(
    `SELECT id, image_url FROM pet_posts ORDER BY created_at DESC`
  );
  const posts = res.rows;

  return (
    <>
      <h1 className="text-2x1 font-bold text-center">Pet Gallery</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {posts.map((post) => (
          <Image
            key={post.id}
            src={post.image_url}
            alt={`Pet post ${post.id}`}
            width={400}
            height={300}
            className="rounded-xl object-cover w-full h-64 shadow-md"
          />
        ))}
      </div>
    </>
  );
}
