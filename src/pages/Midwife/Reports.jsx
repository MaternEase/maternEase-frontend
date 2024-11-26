import React, { useState  } from "react";
import BlogList from "../../components/Shared/Blog/BlogList";
import NewPostModal from "../../components/Shared/Blog/NewPost";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const Reports = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Welcome to Parenthood",
      content:
        "Parenthood is a journey full of learning and joy. As a mother, you may experience a range of emotions, challenges, and unforgettable moments. Embrace every step with love and patience as you nurture your newborn.",
      category: "Newborn baby",
      media: "https://via.placeholder.com/300",
      mediaType: "image",
    },
    {
      id: 2,
      title: "Tips for 1-3 Months Old",
      content:
        "Caring for a newborn during the first three months can be overwhelming. Ensure they are fed, comforted, and loved. Here are some practical tips for sleep schedules, feeding routines, and understanding your baby's cues.",
      category: "1-3 Months",
      media: "https://via.placeholder.com/300",
      mediaType: "image",
    },
    {
      id: 3,
      title: "Tips for Pregnant Mothers",
      content:
        "During pregnancy, staying active and following a balanced diet is key. Here are some essential tips for expectant mothers to stay healthy and prepare for childbirth.",
      category: "Pregnant mother",
      media: "https://via.placeholder.com/300",
      mediaType: "image",
    },
    {
      id: 4,
      title: "Caring for Babies 6 Months to 1 Year",
      content:
        "As your baby grows, their nutritional needs and development milestones change. Learn how to support them during this important stage.",
      category: "6 months to 1 year",
      media: "https://via.placeholder.com/300",
      mediaType: "image",
    },
  ]);

  const [filteredCategory, setFilteredCategory] = useState("All");
  const [showNewPostModal, setShowNewPostModal] = useState(false);

  const addPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: posts.length + 1 }]);
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
    <div className="container mx-auto p-3 my-5 bg-white rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Blog Posts</h1>
        <div className="flex gap-4 items-center">
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
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
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
