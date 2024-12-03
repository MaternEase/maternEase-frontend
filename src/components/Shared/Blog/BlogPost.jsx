import React, { useState } from "react";

const BlogPost = ({ post }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
      <h3 className="mb-2 text-2xl font-bold text-gray-800">{post.title}</h3>

      {/* Check if the mediaPath exists and render the image */}
      {post.mediaPath && (
        <img
          src={post.mediaPath} // This now has the full URL to the image
          alt={post.title}
          className="object-cover w-full mb-4 rounded-lg max-h-60"
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
        className="mt-4 font-semibold text-blue-600 hover:text-blue-800"
        onClick={toggleExpanded}
      >
        {expanded ? "See Less" : "See More"}
      </button>
      <p className="mt-4 text-sm text-gray-500">Category: {post.category}</p>
    </div>
  );
};

export default BlogPost;
