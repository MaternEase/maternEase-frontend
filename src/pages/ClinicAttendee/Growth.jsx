import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import eye from '../../assets/images/eye1.png';
import ear from '../../assets/images/ear1.png';
import image3 from '../../assets/images/teeth1.png';
import image4 from '../../assets/images/part1.png';
import image5 from '../../assets/images/part2.png';
import image6 from '../../assets/images/part3.jpeg';

const images = [eye, ear, image3, image4, image5, image6];
const urls = [
  '/child/Child_details1',
  '/child/Child_details2',
  '/child/Child_details3',
  '/child/Child_details4',
  '/child/Child_details5',
  '/child/Child_details6',
];
const titles = [
  'Eye Health',
  'Hearing Checkup',
  'Dental Care',
  'Steps on growth from birth to 5 years - Part 1',
  'Steps on growth from birth to 5 years - Part 2',
  'Steps on growth from birth to 5 years - Part 3'
];

const Growth = () => (
  <>
    <div className="title text-2xl">
      <h1 style={{ color: '#003366' }}>Enter details about your child</h1>
      <p style={{ color: '#333', fontSize: '14px', marginTop: '8px', marginBottom: '16px' }}>
        Please provide the necessary details about your child to help us understand their growth and development better. Your input is valuable and will assist in creating a tailored plan.
      </p>
    </div>

    <div className="grid grid-cols-3 gap-4 p-8 mx-auto my-8 bg-white rounded-lg shadow-lg" style={{ width: '90%' }}>
      {images.map((image, index) => (
        <div
          key={index}
          className="container p-4 bg-white rounded-lg shadow-lg"
          style={{ height: '320px' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '8px' }}>
            <h2 style={{ color: '#003366', fontSize: '18px', margin: 0 }}>{titles[index]}</h2>
          </div>
          <div
            className="p-4 bg-gray-100 rounded-lg shadow-sm"
            style={{ width: '100%', height: '200px', marginBottom: '16px' }}
          >
            <img
              src={image}
              alt={`child-details-${index + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }}
            />
          </div>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link to={urls[index]} style={{ textDecoration: 'none' }}>
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
