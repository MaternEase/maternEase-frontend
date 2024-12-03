import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ActivitySuggestions = ({ activities }) => (
  <div style={{ maxWidth: '700px', margin: '20px auto' }}>
    <Typography variant="h5" gutterBottom>
      Suggested Activities
    </Typography>
    {activities.map((activity, index) => (
      <Card key={index} style={{ marginBottom: '10px' }}>
        <CardContent>
          <Typography variant="body1">{activity}</Typography>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default ActivitySuggestions;
