import React, { useState } from 'react';
import { TextField, Button, MenuItem } from '@mui/material';

const PregnancyForm = ({ onSubmit }) => {
  const [details, setDetails] = useState({
    lmp: '', // Last Menstrual Period
    weight: '',
    age: '',
    preExistingConditions: '',
    activityLevel: '', // Sedentary, Active, Very Active
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(details);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '20px auto' }}>
      <TextField
        label="Last Menstrual Period (YYYY-MM-DD)"
        type="date"
        name="lmp"
        value={details.lmp}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Current Weight (kg)"
        name="weight"
        value={details.weight}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Age"
        name="age"
        value={details.age}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Activity Level"
        select
        name="activityLevel"
        value={details.activityLevel}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        <MenuItem value="Sedentary">Sedentary</MenuItem>
        <MenuItem value="Active">Active</MenuItem>
        <MenuItem value="Very Active">Very Active</MenuItem>
      </TextField>
      <TextField
        label="Pre-existing Conditions (comma-separated)"
        name="preExistingConditions"
        value={details.preExistingConditions}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </form>
  );
};

export default PregnancyForm;
