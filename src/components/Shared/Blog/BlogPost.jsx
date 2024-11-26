import React, { useState } from "react";

const BlogPost = ({ post }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h3>
      {post.mediaType === "image" && post.media && (
        <img
          src={post.media}
          alt={post.title}
          className="rounded-lg mb-4 w-full object-cover max-h-60"
        />
      )}
      <div
        className={`text-gray-700 transition-all duration-300 overflow-hidden ${
          expanded ? "max-h-full" : "max-h-20"
        }`}
      >
        {post.content}
      </div>
      <button
        className="mt-4 text-blue-600 hover:text-blue-800 font-semibold"
        onClick={toggleExpanded}
      >
        {expanded ? "See Less" : "See More"}
      </button>
      <p className="mt-4 text-sm text-gray-500">Category: {post.category}</p>
    </div>
  );
};

export default BlogPost;
