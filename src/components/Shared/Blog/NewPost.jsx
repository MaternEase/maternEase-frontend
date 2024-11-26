import React, { useState , useEffect } from "react";

const NewPost = ({ onClose, addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Newborn baby");
  const [media, setMedia] = useState(null);
  const [mediaType, setMediaType] = useState(null);

  // Disable scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);


  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type.split("/")[0];
      if (fileType === "image" || fileType === "video") {
        setMedia(file);
        setMediaType(fileType);
      } else {
        alert("Please upload a valid image or video file.");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onloadend = () => {
      addPost({
        title,
        content,
        category,
        media: reader.result,
        mediaType,
      });
      onClose();
    };
    if (media) {
      reader.readAsDataURL(media);
    } else {
      addPost({ title, content, category, media: null, mediaType: null });
      onClose();
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
            <option value="3-6 months">3-6 months</option>
            <option value="6 months to 1 year">6 months to 1 year</option>
            <option value="Pregnant mother">Pregnant mother</option>
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
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
