import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { validateAllFields } from '../../utils/validationUtils'; // Import validation utility

export const AddChildPopup = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    motherId: '',
    guardianName:'',
    dob: '',
    contactNo: '',
    email: '',
    clinicId: '',
    nic: '',
    gender: '',
  });

  const [errors, setErrors] = useState({}); // State to track errors
  const [checked, setChecked] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };

  // Handle form submission
  const handleSubmit = () => {
    const validationErrors = validateAllFields(formData); // Validate all fields
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Update errors state if validation fails
      return;
    }

    if (checked) {
      onSubmit && onSubmit(formData); // Pass form data to the parent component if valid
    } else {
      alert('Please confirm the accuracy of the information.');
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle style={{ backgroundColor: '#D5C6E0', color: '#000', textAlign: 'center', padding: '16px 0' }}>
        Child Registration
      </DialogTitle>
      <DialogContent style={{ backgroundColor: '#D5C6E0' }}>
        <TextField
          margin="dense"
          label="Child Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          error={!!errors.fullName} // Highlight error if exists
          helperText={errors.fullName} // Show validation error
          fullWidth
          InputProps={{ style: { backgroundColor: '#fff' } }}
        />
        <TextField
          margin="dense"
          label="Mother Registration Number"
          name="motherId"
          type="motherId"
          value={formData.motherId}
          onChange={handleChange}
          error={!!errors.motherId}
          helperText={errors.motherId}
          fullWidth
          InputProps={{ style: { backgroundColor: '#fff' } }}
        />
        <TextField
          margin="dense"
          label="Guardian Name"
          name="guardianName"
          value={formData.guardianName}
          onChange={handleChange}
          error={!!errors.guardianName}
          fullWidth
          InputProps={{ style: { backgroundColor: '#fff' } }}
        />
        <TextField
          margin="dense"
          label="Contact Number"
          name="contactNo"
          value={formData.contactNo}
          onChange={handleChange}
          error={!!errors.contactNo}
          helperText={errors.contactNo}
          fullWidth
          InputProps={{ style: { backgroundColor: '#fff' } }}
        />
        <TextField
          margin="dense"
          label="Guardian NIC"
          name="nic"
          value={formData.nic}
          onChange={handleChange}
          error={!!errors.nic}
          helperText={errors.nic}
          fullWidth
          InputProps={{ style: { backgroundColor: '#fff' } }}
        />
        <TextField
          margin="dense"
          label="Child Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          fullWidth
          InputProps={{ style: { backgroundColor: '#fff' } }}
        />
        <TextField
          margin="dense"
          label="Date of Birth (Child)"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ shrink: true }}
          InputProps={{ style: { backgroundColor: '#fff' } }}
        />
        <TextField
          margin="dense"
          label="Clinic ID"
          name="clinicId"
          value={formData.age}
          onChange={handleChange}
          fullWidth
          InputProps={{ style: { backgroundColor: '#fff' } }}
        />
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={handleCheckboxChange} />}
          label="I ensure the accuracy of the information"
        />
      </DialogContent>
      <DialogActions style={{ backgroundColor: '#D5C6E0', justifyContent: 'center', gap: '10px' }}>
        <Button onClick={onClose} style={{ backgroundColor: '#192A51', color: '#fff' }}>
          Cancel
        </Button>
        <Button onClick={handleSubmit} style={{ backgroundColor: '#192A51', color: '#fff' }}>
          Register Mother
        </Button>
      </DialogActions>
    </Dialog>
  );
};
