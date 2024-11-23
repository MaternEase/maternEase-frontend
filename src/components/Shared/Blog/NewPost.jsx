import React, { useState } from 'react';

const NewPost = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Newborn baby'); // Default category
  const [media, setMedia] = useState(null); // Handle both image and video
  const [mediaType, setMediaType] = useState(null); // Store whether it's an image or video

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type.split('/')[0]; // Check if it's an image or video
      if (fileType === 'image' || fileType === 'video') {
        setMedia(file);
        setMediaType(fileType); // Set either 'image' or 'video'
      } else {
        alert('Please upload a valid image or video file.');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onloadend = () => {
      addPost(title, content, category, reader.result, mediaType); // Pass mediaType
      setTitle('');
      setContent('');
      setCategory('Newborn baby');
      setMedia(null);
      setMediaType(null);
    };
    if (media) {
      reader.readAsDataURL(media); // Convert the media (image/video) to base64
    } else {
      addPost(title, content, category, null, null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a New Post</h2>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Newborn baby">Newborn baby</option>
        <option value="1-3 Months">1-3 Months</option>
        <option value="3-6 months">3-6 months</option>
        <option value="6 months to 1 year">6 months to 1 year</option>
        <option value="2 year">2 year</option>
        <option value="3 year">3 year</option>
        <option value="4 year">4 year</option>
        <option value="5 year">5 year</option>
        <option value="Pregnant mother">Pregnant mother</option>
        <option value="After delivery">After delivery</option>
      </select>
      <div>
        <input type="file" accept="image/*,video/*" onChange={handleMediaChange} />
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default NewPost;
