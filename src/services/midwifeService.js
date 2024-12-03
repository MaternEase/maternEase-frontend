import axios from 'axios';
import AuthService from '../services/authService';

const API_URL = 'http://localhost:8082/api/v1/midwife';

// --- Mother-related Services ---

export const getExpectedMothers = async () => {
  try {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('User not authenticated. Please log in.');
    }

    const response = await axios.get(`${API_URL}/get-all-expected-mother`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching expected mothers:', error);
    throw new Error(error.response ? error.response.data : 'Error fetching data');
  }
};

export const getDeliveredMother = async () => {
  try {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('User not authenticated. Please log in.');
    }

    const response = await axios.get(`${API_URL}/get-all-delivered-mother`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching delivered mothers:', error);
    throw new Error(error.response ? error.response.data : 'Error fetching data');
  }
};

export const registerMother = async (formData) => {
  try {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('User not authenticated. Please log in.');
    }

    const response = await axios.post(`${API_URL}/mother-register`, formData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data.responseMzg;
  } catch (error) {
    console.error('Error in mother registration:', error?.response?.data || error.message);
    throw new Error(error.response ? error.response.data : 'Error registering mother');
  }
};

export const getBasicDetails = async ({ motherId }) => {
  try {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('User not authenticated. Please log in.');
    }

    const response = await axios.get(`${API_URL}/get-basic-details/${motherId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : 'Error fetching data');
  }
};

export const addClinicRecord = async (motherId, formData) => {
  try {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('User not authenticated. Please log in.');
    }

    const response = await axios.post(`${API_URL}/clinic-record/${motherId}`, formData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data.responseMzg;
  } catch (error) {
    console.error('Error in record adding:', error?.response?.data || error.message);
    throw new Error(error.response ? error.response.data : 'Error record adding');
  }
};

export const getClinicRecord = async ({ motherId }) => {
  try {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('User not authenticated. Please log in.');
    }

    const response = await axios.get(`${API_URL}/clinic-record/${motherId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching clinic records:', error?.response?.data || error.message);
    throw new Error(error.response ? error.response.data : 'Error fetching records');
  }
};

// --- Child-related Services ---

export const registerChild = async (formData) => {
  try {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('User not authenticated. Please log in.');
    }

    const response = await axios.post(`${API_URL}/child-register`, formData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error in child registration:', error?.response?.data || error.message);
    throw new Error(error.response ? error.response.data : 'Error registering child');
  }
};



export const getChildDetails = async (childId) => {
  try {
    const token = AuthService.getToken(); // Get the authentication token
    if (!token) {
      throw new Error("User not authenticated. Please log in.");
    }

    const response = await axios.get(`${API_URL}/get-child-details/${childId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data; // Ensure the backend sends correct data here
  } catch (error) {
    console.error("Error fetching child details:", error.response?.data || error.message);
    throw new Error(error.response?.data || "Failed to fetch child details.");
  }
};


export const getAllChildren = async () => {
  try {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('User not authenticated. Please log in.');
    }

    const response = await axios.get(`${API_URL}/get-all-children`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching children:', error?.response?.data || error.message);
    throw new Error(error.response ? error.response.data : 'Error fetching children');
  }
};


export const getAllPosts = async () => {
  try {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('User not authenticated. Please log in.');
    }

    const response = await axios.get(`${API_URL}/blogs-get-all`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    // Construct full URL for the mediaPath
    const postsWithFullImagePath = response.data.map(post => {
      if (post.mediaPath) {
        // Assuming base URL is 'http://localhost:8080/api/v1/midwife/uploads/'
        post.mediaPath = `http://localhost:8082/api/v1/midwife/${post.mediaPath}`;
      }
      return post;
    });

    return postsWithFullImagePath; // Now the posts will have full media URLs
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error(error.response ? error.response.data : 'Error fetching posts');
  }
};

export const createPost = async (postData) => {
  try {
    const formData = new FormData();
    formData.append("title", postData.title);
    formData.append("content", postData.content);
    formData.append("postType", postData.category);
    
    // Add media if it exists
    if (postData.media) {
      formData.append("mediaPath", postData.media);
    }

    // Retrieve the authentication token
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('User not authenticated. Please log in.');
    }

    // Make the request with Bearer token in headers
    const response = await axios.post(`${API_URL}/blog-create`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // for file uploads
        'Authorization': `Bearer ${token}`,  // Add Bearer token here
      },
    });

    console.log('Response:', response);


    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw new Error(error.response ? error.response.data : 'Error creating post');
  }
};