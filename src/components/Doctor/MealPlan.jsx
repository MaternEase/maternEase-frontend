import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const MealPlan = ({ meals }) => (
  <div style={{ maxWidth: '700px', margin: '20px auto' }}>
    <Typography variant="h5" gutterBottom>
      Recommended Meal Plan
    </Typography>
    {meals.map((meal, index) => (
      <Card key={index} style={{ marginBottom: '10px' }}>
        <CardContent>
          <Typography variant="h6">{meal.title}</Typography>
          <Typography variant="body1">{meal.description}</Typography>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default MealPlan;
