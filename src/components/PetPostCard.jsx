import Image from "next/image";

export default function PetPostCard({ post }) {
  return (
    <div className="border p-4 rounded">
      <Image
        src={post.image_url}
        width={400}
        height={300}
        alt={post.caption}
        className="rounded mb-2"
      />
      <h2>{post.caption || "Untitled Post"}</h2>
      <p>Animal: {post.animal_type}</p>
    </div>
  );
}
