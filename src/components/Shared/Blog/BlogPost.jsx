import React from 'react';
import { useParams } from 'react-router-dom';
//import './BlogPost.css'; 

const BlogPost = ({ posts }) => {
  const { id } = useParams(); // Get the post ID from the URL
  const post = posts.find((post) => post.id === parseInt(id)); // Find the post by ID

  // Check if the post exists
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="BlogPost">
      <h2>{post.title}</h2> {/* Display the post title */}
      {post.image && (
        <img src={post.image} alt={post.title} style={{ maxWidth: '100%' }} /> 
      )} {/* Display the post image if it exists */}
      <p>{post.content}</p> {/* Display the post content */}
    </div>
  );
};

export default BlogPost;
