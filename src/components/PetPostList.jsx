import PetPostCard from "./PetPostCard";

export default function PetPostList({ posts }) {
  if (posts === undefined || posts.length === 0) {
    return <p>You haven't shared any pet posts yet.</p>;
  } else {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <PetPostCard key={post.id} post={post} />
        ))}
      </div>
    );
  }
}
