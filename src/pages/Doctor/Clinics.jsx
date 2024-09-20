import React, { useEffect, useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { createDoctor, getDoctor, updateDoctor } from '../../services/doctorServise';
import { useNavigate, useParams } from 'react-router-dom';

const Clinics = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [idnumber, setIdNumber] = useState('');
  const [errors, setErrors] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getDoctor(id)
        .then((response) => {
          setName(response.data.name);
          setEmail(response.data.email);
          setIdNumber(response.data.idnumber);
          setNumber(response.data.number);
        })
        .catch((error) => {
          console.error('Error fetching doctor:', error);
        });
    }
  }, [id]);

  const saveOrUpdateDoctor = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const doctor = { name, email, idnumber, number };

      if (id) {
        updateDoctor(id, doctor)
          .then((response) => {
            console.log('Doctor updated:', response.data);
            navigate('/doctor/crud1');
          })
          .catch((error) => {
            console.error('Error updating doctor:', error);
          });
      } else {
        createDoctor(doctor)
          .then((response) => {
            console.log('Doctor created:', response.data);
            navigate('/doctor/crud1');
          })
          .catch((error) => {
            console.error('Error creating doctor:', error);
          });
      }
    }
  };

  const validateForm = () => {
    let valid = true;
    const errorCopy = { ...errors };

    if (name.trim()) {
      errorCopy.name = '';
    } else {
      errorCopy.name = 'Name is required';
      valid = false;
    }

    if (email.trim()) {
      errorCopy.email = '';
    } else {
      errorCopy.email = 'Email is required';
      valid = false;
    }

    if (number.trim()) {
      errorCopy.number = '';
    } else {
      errorCopy.number = 'Phone is required';
      valid = false;
    }

    if (idnumber.trim()) {
      errorCopy.idnumber = '';
    } else {
      errorCopy.idnumber = 'NIC is required';
      valid = false;
    }

    setErrors(errorCopy);
    return valid;
  };

  const pageTitle = () => (
    <Typography className='text-center'>
      {id ? 'Update Doctor' : 'Create Doctor'}
    </Typography>
  );

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          p: 3,
          mt: 4,
          mb: 4,
          bgcolor: 'white',
          borderRadius: 1,
          boxShadow: 3,
        }}
        onSubmit={saveOrUpdateDoctor}
      >
        {pageTitle()}
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          label="ID Number"
          variant="outlined"
          name="idnumber"
          value={idnumber}
          onChange={(e) => setIdNumber(e.target.value)}
          required
          error={!!errors.idnumber}
          helperText={errors.idnumber}
        />
        <TextField
          label="Email Address"
          variant="outlined"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          name="number"
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          error={!!errors.number}
          helperText={errors.number}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Clinics;
