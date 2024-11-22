import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Button } from '@mui/material';

const BabiesViewProfile = () => {
  const { childId } = useParams(); // Get childId from the URL
  const [babyData, setBabyData] = useState(null);

  useEffect(() => {
    // Fetch baby data using the childId (replace with actual API call)
    fetch(`/api/babies/${childId}`)
      .then((response) => response.json())
      .then((data) => setBabyData(data))
      .catch((error) => console.error('Error fetching baby data:', error));
  }, [childId]);

  if (!babyData) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Card sx={{ margin: '20px', padding: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Baby Profile: {babyData.name}
      </Typography>
      <CardContent>
        <Typography variant="body1"><strong>Age:</strong> {babyData.age} months</Typography>
        <Typography variant="body1"><strong>Condition:</strong> {babyData.condition}</Typography>
        <Typography variant="body1"><strong>Contact Number:</strong> {babyData.contactNo}</Typography>
        <Typography variant="body1"><strong>Last Checkup:</strong> {babyData.lastCheckup || 'N/A'}</Typography>
        <Button
          variant="contained"
          sx={{ marginTop: '20px' }}
          onClick={() => window.history.back()} // Navigate back
        >
          Back to Table
        </Button>
      </CardContent>
    </Card>
  );
};

export default BabiesViewProfile;
