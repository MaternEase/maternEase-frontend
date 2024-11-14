import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState('All'); // State for category filter

  const truncateContent = (content, maxLength = 100) => {
    if (content.length > maxLength) {
      return content.slice(0, maxLength) + '...';
    }
    return content;
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredPosts = posts.filter(post => {
    if (selectedCategory === 'All') return true;
    return post.category === selectedCategory;
  });

  // Inline style objects for styling
  const styles = {
    blogList: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
    },
    blogListGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '20px',
    },
    blogListItem: {
      backgroundColor: '#fff',
      padding: '20px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '10px',
      marginBottom: '15px',
    },
    title: {
      color: '#003366',
      marginBottom: '10px',
    },
    content: {
      color: '#333',
      lineHeight: '1.6',
      fontSize: '18px',
      marginBottom: '15px',
    },
    link: {
      color: '#003366',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    linkHover: {
      textDecoration: 'underline',
    },
    createNewPostLink: {
      textAlign: 'center',
      marginTop: '20px',
    },
    createNewPostButton: {
      color: '#fff',
      backgroundColor: '#003366',
      padding: '10px 20px',
      borderRadius: '5px',
      textDecoration: 'none',
      fontSize: '16px',
    },
    createNewPostButtonHover: {
      backgroundColor: '#002244',
    },
  };

  return (
    <div style={styles.blogList}>
      <h2>Blog Posts</h2>

      {/* Blog Posts Section */}
      <div style={styles.blogListGrid}>
        {filteredPosts.map((post) => (
          <div key={post.id} style={styles.blogListItem}>
            <h3 style={styles.title}>{post.title}</h3>

            {/* Conditionally render image or video */}
            {post.mediaType === 'image' && post.media && (
              <img src={post.media} alt={post.title} style={styles.image} />
            )}
            {post.mediaType === 'video' && post.media && (
              <video controls style={styles.image}>
                <source src={post.media} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}

            <p style={styles.content}>{truncateContent(post.content, 150)}</p>
            <p style={styles.content}>Category: {post.category}</p>
            <Link to={`/post/${post.id}`} style={styles.link}>Read More</Link>
          </div>
        ))}
      </div>

      {/* Create New Post Link */}
      <div style={styles.createNewPostLink}>
        <Link to="/new" style={styles.createNewPostButton}>Create a New Post</Link>
      </div>
    </div>
  );
};

export default BlogList;
