import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const  = () => {
  const [formData, setFormData] = useState({
    name: '',
    idnumber: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you can handle form submission, e.g., send the data to an API
  };

  function saveDoctor(e){
    e.preventDefault();
    const doctor =(name,email,idnumber,phone)
    console.log(doctor)
  }
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
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Clinics
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="ID Number"
          variant="outlined"
          name="idnumber"
          value={formData.idnumber}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email Address"
          variant="outlined"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary" onClick={saveDoctor}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Clinics;
