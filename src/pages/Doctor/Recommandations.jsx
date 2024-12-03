import React, { useState } from 'react';

const DoctorRecommendations = () => {
  const [recommendation, setRecommendation] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const [buttonState, setButtonState] = useState('Save');
  const [message, setMessage] = useState(''); // State for feedback messages

  const handleSave = () => {
    if (!recommendation.trim()) {
      setMessage('Error: Recommendation cannot be empty!');
      return;
    }

    setIsUpdate(true);
    setButtonState('Saved');
    setMessage('Recommendation saved successfully!');
  };

  const handleUpdate = () => {
    if (!recommendation.trim()) {
      setMessage('Error: Recommendation cannot be empty!');
      return;
    }

    setButtonState('Saved');
    setMessage('Recommendation updated successfully!');
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    setRecommendation(value);
    setButtonState(isUpdate ? 'Update' : 'Save');
    setMessage(''); // Clear the message when editing
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Doctor's Recommendation</h2>
      <textarea
        style={styles.textarea}
        value={recommendation}
        onChange={handleTextChange}
        placeholder="Write your recommendation here..."
      ></textarea>
      <div style={styles.message}>
        {message && (
          <p style={{ color: message.startsWith('Error') ? 'red' : 'green' }}>
            {message}
          </p>
        )}
      </div>
      <div style={styles.buttonContainer}>
        {!isUpdate ? (
          <button onClick={handleSave} style={{ ...styles.button, ...styles.saveButton }}>
            {buttonState}
          </button>
        ) : (
          <button onClick={handleUpdate} style={{ ...styles.button, ...styles.updateButton }}>
            {buttonState}
          </button>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    fontFamily: "'Arial', sans-serif",
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  textarea: {
    width: '100%',
    height: '150px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '14px',
    resize: 'none',
  },
  message: {
    marginTop: '10px',
    textAlign: 'center',
    fontSize: '14px',
    minHeight: '20px', // Ensures space is reserved for messages
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
  },
  updateButton: {
    backgroundColor: '#2196F3',
    color: 'white',
  },
};

export default DoctorRecommendations;
