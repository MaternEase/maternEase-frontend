import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link component

const Growth = () => (
  <>
    <div className="title text-2xl">
      <h1 style={{ color: '#003366' }}>Enter details about your child</h1>
      <p style={{ color: '#333', fontSize: '14px', marginTop: '8px', marginBottom: '16px' }}>
        Please provide the necessary details about your child to help us understand their growth and development better. Your input is valuable and will assist in creating a tailored plan.
      </p>
    </div>
   
    <div className="grid grid-cols-3 gap-4 p-8 mx-auto my-8 bg-white rounded-lg shadow-lg" style={{ width: '90%' }}>
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="container p-4 bg-white rounded-lg shadow-lg"
          style={{ height: '300px' }}
        >
          <div
            className="p-4 mb-4 bg-gray-100 rounded-lg shadow-sm"
            style={{ width: '100%', height: '200px', margin: '1px' }}
          >
            <img
              src="" // Replace with your image path
              alt={`Description of image ${index + 1}`} // Replace with a description of the image
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }}
            />
          </div>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Link to="/page" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ textTransform: 'none' }}
              >
                Fill the form
              </Button>
            </Link>
          </Box>
        </div>
      ))}
    </div>
  </>
);

export default Growth;
