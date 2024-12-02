import React, { useState, useEffect } from "react";
import BlogList from "../../components/Shared/Blog/BlogList";
import NewPostModal from "../../components/Shared/Blog/NewPost";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { getAllPosts, createPost } from "../../services/midwifeService"; // import the API functions

const Reports = () => {
  const [posts, setPosts] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("All");
  const [showNewPostModal, setShowNewPostModal] = useState(false);

  // Fetch blog posts from backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAllPosts();
        setPosts(data); // Assuming data is an array of posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const addPost = async (newPost) => {
    try {
      const response = await createPost(newPost);
      setPosts([...posts, response]); // Assuming response is the newly created post
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  const openNewPostModal = () => {
    setShowNewPostModal(true);
  };

  const closeNewPostModal = () => {
    setShowNewPostModal(false);
  };

  const handleCategoryChange = (event) => {
    setFilteredCategory(event.target.value);
  };

  const filteredPosts =
    filteredCategory === "All"
      ? posts
      : posts.filter((post) => post.category === filteredCategory);

  return (
    <div className="container p-3 mx-auto my-5 bg-white rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Blog Posts</h1>
        <div className="flex items-center gap-4">
          <FormControl variant="outlined" size="small">
            <InputLabel id="category-select-label">Filter by Category</InputLabel>
            <Select
              labelId="category-select-label"
              value={filteredCategory}
              onChange={handleCategoryChange}
              label="Filter by Category"
              style={{ minWidth: 200 }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Newborn baby">Newborn baby</MenuItem>
              <MenuItem value="1-3 Months">1-3 Months</MenuItem>
              <MenuItem value="Pregnant mother">Pregnant mother</MenuItem>
              <MenuItem value="6 months to 1 year">6 months to 1 year</MenuItem>
            </Select>
          </FormControl>
          <button
            className="px-6 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
            onClick={openNewPostModal}
          >
            Create a New Post
          </button>
        </div>
      </div>

      {/* Blog List Section */}
      <BlogList posts={filteredPosts} onCreateNew={openNewPostModal} />

      {/* New Post Modal */}
      {showNewPostModal && (
        <NewPostModal onClose={closeNewPostModal} addPost={addPost} />
      )}
    </div>
  );
};

export default Reports;
