import { useEffect, useState } from "react";
import { client } from "../lib/sanity";
import { PortableText } from "@portabletext/react";

function PostCard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "post"]{_id, title, body}`).then(setPosts);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Posts</h1>
      {posts.length === 0 && <p>No posts found.</p>}
      {posts.map((post) => (
        <div key={post._id} className="mb-6 border-b pb-4">
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <PortableText value={post.body} />
        </div>
      ))}
    </div>
  );
}

export default PostCard;
