import React from "react";
import BlogPost from "./BlogPost";

const BlogList = ({ posts, onCreateNew }) => {
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
