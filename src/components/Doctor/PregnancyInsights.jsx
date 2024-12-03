import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PregnancyInsights = ({ insights }) => (
  <div style={{ maxWidth: '700px', margin: '20px auto' }}>
    <Typography variant="h5" gutterBottom>
      Pregnancy Insights
    </Typography>
    <Card style={{ marginBottom: '10px' }}>
      <CardContent>
        <Typography variant="h6">Weeks Pregnant</Typography>
        <Typography variant="body1">{insights.weeksPregnant} weeks</Typography>
      </CardContent>
    </Card>
    <Card style={{ marginBottom: '10px' }}>
      <CardContent>
        <Typography variant="h6">Estimated Delivery Date (EDD)</Typography>
        <Typography variant="body1">{insights.edd}</Typography>
      </CardContent>
    </Card>
    {insights.abnormalities.length > 0 && (
      <Card style={{ marginBottom: '10px' }}>
        <CardContent>
          <Typography variant="h6">Potential Abnormalities</Typography>
          {insights.abnormalities.map((abnormality, index) => (
            <Typography key={index} variant="body1">
              - {abnormality}
            </Typography>
          ))}
        </CardContent>
      </Card>
    )}
    {insights.risks.length > 0 && (
      <Card style={{ marginBottom: '10px' }}>
        <CardContent>
          <Typography variant="h6">Recognized Risks</Typography>
          {insights.risks.map((risk, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <Typography variant="subtitle1">
                {risk.condition} - {risk.reason}
              </Typography>
              <Typography variant="body2">Protection: {risk.protection}</Typography>
            </div>
          ))}
        </CardContent>
      </Card>
    )}
  </div>
);

export default PregnancyInsights;
