import React, { useState, useEffect } from "react";
import { createPost } from "../../../services/midwifeService"; // import the createPost API function

const NewPost = ({ onClose, addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Newborn baby");
  const [media, setMedia] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMedia(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      content,
      category,
      media,
    };

    try {
      await createPost(newPost); // create post via API
      addPost(newPost); // update the UI with the new post
      onClose(); // close the modal
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Create a New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
          <select
            className="w-full px-4 py-2 border rounded-lg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Newborn baby">Newborn baby</option>
            <option value="1-3 Months">1-3 Months</option>
            <option value="Pregnant mother">Pregnant mother</option>
            <option value="6 months to 1 year">6 months to 1 year</option>
          </select>
          <input
            type="file"
            className="w-full px-4 py-2 border rounded-lg"
            accept="image/*,video/*"
            onChange={handleMediaChange}
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
