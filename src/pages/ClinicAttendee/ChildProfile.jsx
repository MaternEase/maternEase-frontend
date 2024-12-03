import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const ChildProfile = () => {
  const navigate = useNavigate();

  const profileData = {
    name: '',
    age: '',
    //gender: '',
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', p: 4 }}>
      {/* Title */}
      <Typography variant="h4" sx={{ color: '#000', mb: 4, textAlign: 'center' }}>
        Child Health and Development Record
      </Typography>

      {/* Profile Card */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          mb: 4,
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: '#f9f9f9',
        }}
      >
        <Typography variant="h6" sx={{ color: '#666' }}>
          Name: {profileData.name}
        </Typography>
        <Typography variant="body1" sx={{ color: '#666' }}>
          Age: {profileData.age}
        </Typography>
        {/*<Typography variant="body1" sx={{ color: '#666' }}>
          Gender: {profileData.gender}
        </Typography>*/}
      </Box>

      {/* Health Records Section */}
      <Typography variant="h5" sx={{ color: '#000', mb: 2 }}>
        Health Records
      </Typography>

      <Paper sx={{ p: 2, mb: 2, borderRadius: 2, boxShadow: 1 }}>
        <Typography variant="h6" sx={{ color: '#000', mb: 1 }}>
          Special Health Records
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Details about the child's Special Health Records.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#003366',
            color: '#fff',
            '&:hover': { backgroundColor: '#002244' },
          }}
          onClick={() => handleNavigation('../health_charts')}
        >
          View Special Health Records
        </Button>
      </Paper>

      {/* Immunization Section */}
      <Paper sx={{ p: 2, mb: 2, borderRadius: 2, boxShadow: 1 }}>
        <Typography variant="h6" sx={{ color: '#000', mb: 1 }}>
          Immunization
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Details about the child's immunization records.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#003366',
            color: '#fff',
            '&:hover': { backgroundColor: '#002244' },
          }}
          onClick={() => handleNavigation('../immunization')}
        >
          View Immunization
        </Button>
      </Paper>

      

      {/* Growth Charts Section */}
      <Paper sx={{ p: 2, mb: 2, borderRadius: 2, boxShadow: 1 }}>
        <Typography variant="h6" sx={{ color: '#000', mb: 1 }}>
          Growth Chart - Weight
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Details about the child's growth charts.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#003366',
            color: '#fff',
            '&:hover': { backgroundColor: '#002244' },
          }}
          onClick={() => handleNavigation('../weight')}
        >
          View Weight Chart
        </Button>
      </Paper>

      {/*  Section */}
      <Paper sx={{ p: 2, mb: 2, borderRadius: 2, boxShadow: 1 }}>
        <Typography variant="h6" sx={{ color: '#000', mb: 1 }}>
        Growth Chart - Height
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
        Details about the child's growth charts.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#003366',
            color: '#fff',
            '&:hover': { backgroundColor: '#002244' },
          }}
          onClick={() => handleNavigation('../height')}
        >
          View Height Chart
        </Button>
      </Paper>

      {/*<Paper sx={{ p: 2, mb: 2, borderRadius: 2, boxShadow: 1 }}>
        <Typography variant="h6" sx={{ color: '#000', mb: 1 }}>
        Growth Record
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
        Details about the child's growth .
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#003366',
            color: '#fff',
            '&:hover': { backgroundColor: '#002244' },
          }}
          onClick={() => handleNavigation('../growth')}
        >
          View Child's Growth
        </Button>
      </Paper>*/}


     
    </Box>
  );
};

export default ChildProfile;
