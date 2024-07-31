import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Checkbox, FormControlLabel } from '@mui/material';

const AddExpectantMotherPopup = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle style={{ backgroundColor: '#D5C6E0', color: '#000', textAlign: 'center', padding: '16px 0' }}>Expectant Mother</DialogTitle>
      <DialogContent style={{ backgroundColor: '#D5C6E0' }}>
        <TextField margin="dense" label="Full Name" fullWidth InputProps={{ style: { backgroundColor: '#fff' } }} />
        <TextField margin="dense" label="Address" fullWidth InputProps={{ style: { backgroundColor: '#fff' } }} />
        <TextField margin="dense" label="Date of Birth" type="date" fullWidth InputLabelProps={{ shrink: true }} InputProps={{ style: { backgroundColor: '#fff' } }} />
        <TextField margin="dense" label="Age" fullWidth InputProps={{ style: { backgroundColor: '#fff' } }} />
        <TextField margin="dense" label="Telephone" fullWidth InputProps={{ style: { backgroundColor: '#fff' } }} />
        <FormControlLabel
          control={<Checkbox />}
          label="I ensure the accuracy of the information"
        />
      </DialogContent>
      <DialogActions style={{ backgroundColor: '#D5C6E0', justifyContent: 'center', gap: '10px' }}>
        <Button onClick={onClose} style={{ backgroundColor: '#192A51', color: '#fff' }}>
          Cancel
        </Button>
        <Button onClick={onClose} style={{ backgroundColor: '#192A51', color: '#fff' }}>
          Create Account
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const AddChildPopup = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle style={{ backgroundColor: '#D5C6E0', color: '#000', textAlign: 'center', padding: '16px 0' }}>Add New Child</DialogTitle>
      <DialogContent style={{ backgroundColor: '#D5C6E0' }}>
        <TextField margin="dense" label="Full Name" fullWidth InputProps={{ style: { backgroundColor: '#fff' } }} />
        <TextField margin="dense" label="Date of Birth" type="date" fullWidth InputLabelProps={{ shrink: true }} InputProps={{ style: { backgroundColor: '#fff' } }} />
        <TextField margin="dense" label="Age" fullWidth InputProps={{ style: { backgroundColor: '#fff' } }} />
        <TextField margin="dense" label="Parent/Guardian Name" fullWidth InputProps={{ style: { backgroundColor: '#fff' } }} />
        <TextField margin="dense" label="Contact Number" fullWidth InputProps={{ style: { backgroundColor: '#fff' } }} />
        <FormControlLabel
          control={<Checkbox />}
          label="I ensure the accuracy of the information"
        />
      </DialogContent>
      <DialogActions style={{ backgroundColor: '#D5C6E0', justifyContent: 'center', gap: '10px' }}>
        <Button onClick={onClose} style={{ backgroundColor: '#192A51', color: '#fff' }}>
          Cancel
        </Button>
        <Button onClick={onClose} style={{ backgroundColor: '#192A51', color: '#fff' }}>
          Create Account
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { AddExpectantMotherPopup, AddChildPopup };
