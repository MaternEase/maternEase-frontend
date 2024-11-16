import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Typography,
  Box,
} from "@mui/material";

export const AddExpectantMotherPopup = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    contactNo: "",
    nic: "",
    gender: "Female",
    dob: "",
    clinicName: "",
    height: "",
    weight: "",
    bmi: "",
    poa: "",
    husbandName: "",
    husbandAge: "",
    motherEducationLevel: "",
    husbandEducationLevel: "",
    motherOccupation: "",
    husbandOccupation: "",
    registrationNumber: "",
    registrationDate: "",
    registrationLocation: "",
    registrationDateEligibleFamilyRegister: "",
    distanceMotherOffice: "",
    motherAgeInMarriage: "",
    consanguinity: "",
    rubellaImmunization: "",
    prePregnancyScreeningDone: "",
    preconceptionalFolicAcid: "",
    historyOfSubfertility: "",
  });

  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    const newErrors = {};
  
    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.contactNo || !/^\d{10}$/.test(formData.contactNo))
      newErrors.contactNo = "Valid contact number is required (10 digits).";
    if (!formData.nic || !/^\d{9}[vV]|\d{12}$/.test(formData.nic))
      newErrors.nic = "Valid NIC is required.";
    if (!formData.dob) newErrors.dob = "Date of birth is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.motherEducationLevel)
      newErrors.motherEducationLevel = "Mother's education level is required.";
    if (!formData.husbandEducationLevel)
      newErrors.husbandEducationLevel = "Husband's education level is required.";
  
    if (!formData.height || isNaN(formData.height) || formData.height <= 0)
      newErrors.height = "Valid height is required (in cm).";
    if (!formData.weight || isNaN(formData.weight) || formData.weight <= 0)
      newErrors.weight = "Valid weight is required (in kg).";
    if (!formData.bmi || isNaN(formData.bmi) || formData.bmi <= 0)
      newErrors.bmi = "Valid BMI is required.";
    if (!formData.poa || isNaN(formData.poa) || formData.poa <= 0 || formData.poa > 40)
      newErrors.poa = "Valid POA is required (1-40 weeks).";
  
    if (!formData.husbandAge || isNaN(formData.husbandAge) || formData.husbandAge <= 0 || formData.husbandAge > 120)
      newErrors.husbandAge = "Valid husband age is required.";
    if (!formData.motherOccupation)
      newErrors.motherOccupation = "Mother's occupation is required.";
    if (!formData.husbandOccupation)
      newErrors.husbandOccupation = "Husband's occupation is required.";
  
    if (!formData.registrationNumber)
      newErrors.registrationNumber = "Registration number is required.";
    if (!formData.registrationDate)
      newErrors.registrationDate = "Registration date is required.";
    if (!formData.registrationLocation)
      newErrors.registrationLocation = "Registration location is required.";
    if (!formData.registrationDateEligibleFamilyRegister)
      newErrors.registrationDateEligibleFamilyRegister =
        "Family register date is required.";
  
    if (!formData.clinicName) newErrors.clinicName = "Clinic name is required.";
  
    // Medical conditions validation
    ["consanguinity", "rubellaImmunization", "prePregnancyScreeningDone", "preconceptionalFolicAcid", "historyOfSubfertility"].forEach(
      (field) => {
        if (!formData[field]) {
          newErrors[field] = `Please select a value for ${field.replace(/([A-Z])/g, " $1")}.`;
        }
      }
    );
  
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log("Submit button clicked!");
    const validationErrors = validateForm();
    console.log("Validation errors:", validationErrors); // Check validation output
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.log("Form validation failed:", validationErrors); // Check if validation failed
      return;
    }
    console.log("Form validated successfully. Passing data to parent...");
    onSubmit(formData); // Pass valid data to parent
    onClose(); // Close dialog after submission
    setErrors({}); // Clear errors
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Clear error for the current field
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  // Handle radio changes
  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Clear error for the current field
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle
        style={{
          backgroundColor: "#D5C6E0",
          color: "#000",
          textAlign: "center",
          padding: "16px 0",
        }}
      >
        Expectant Mother Registration
      </DialogTitle>
      <DialogContent style={{ backgroundColor: "#D5C6E0" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              error={Boolean(errors.fullName)}
              helperText={errors.fullName}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              label="Clinic Name"
              name="clinicName"
              value={formData.clinicName}
              onChange={handleChange}
              error={Boolean(errors.clinicName)}
              helperText={errors.clinicName}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              label="Contact Number"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              error={Boolean(errors.contactNo)}
              helperText={errors.contactNo}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              label="NIC"
              name="nic"
              value={formData.nic}
              onChange={handleChange}
              error={Boolean(errors.nic)}
              helperText={errors.nic}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              error={Boolean(errors.gender)}
              helperText={errors.gender}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              label="Date of Birth"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              error={Boolean(errors.dob)}
              helperText={errors.dob}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              error={Boolean(errors.address)}
              helperText={errors.address}
              fullWidth
            />
          </Grid>
          {/* Existing fields */}
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              label="Height (cm)"
              name="height"
              value={formData.height}
              onChange={handleChange}
              error={Boolean(errors.height)}
              helperText={errors.height}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              label="Weight (kg)"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              error={Boolean(errors.weight)}
              helperText={errors.weight}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              label="BMI at Registration"
              name="bmi"
              value={formData.bmi}
              onChange={handleChange}
              error={Boolean(errors.bmi)}
              helperText={errors.bmi}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              label="POA at Registration (weeks)"
              name="poa"
              value={formData.poa}
              onChange={handleChange}
              error={Boolean(errors.poa)}
              helperText={errors.poa}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              label="Mother's Occupation"
              name="motherOccupation"
              value={formData.motherOccupation}
              onChange={handleChange}
              error={Boolean(errors.motherOccupation)}
              helperText={errors.motherOccupation}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              label="Distance from Mother's Office (km)"
              name="distanceMotherOffice"
              value={formData.distanceMotherOffice}
              onChange={handleChange}
              error={Boolean(errors.distanceMotherOffice)}
              helperText={errors.distanceMotherOffice}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl
              fullWidth
              margin="dense"
              error={Boolean(errors.motherEducationLevel)}
            >
              <InputLabel>Education Level of the Mother</InputLabel>
              <Select
                name="motherEducationLevel"
                value={formData.motherEducationLevel}
                onChange={handleChange}
                label="Education Level of the Mother"
              >
                {/* Add education level options */}
                <MenuItem value="No Formal Education">
                  No Formal Education
                </MenuItem>
                <MenuItem value="Primary Education">Primary Education</MenuItem>
                <MenuItem value="Senior Secondary (O/L)">
                  Senior Secondary (O/L)
                </MenuItem>
                <MenuItem value="Advanced Level (A/L)">
                  Advanced Level (A/L)
                </MenuItem>
                <MenuItem value="Diploma">Diploma</MenuItem>
                <MenuItem value="Undergraduate Degree">
                  Undergraduate Degree
                </MenuItem>
                <MenuItem value="Postgraduate Diploma">
                  Postgraduate Diploma
                </MenuItem>
                <MenuItem value="Master's Degree">Master's Degree</MenuItem>
                <MenuItem value="Doctorate (Ph.D.)">Doctorate (Ph.D.)</MenuItem>
              </Select>

              {errors.motherEducationLevel && (
                <FormHelperText>{errors.motherEducationLevel}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          {/* <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              label="Education Level of the Mother"
              name="motherEducationLevel"
              value={formData.motherEducationLevel}
              onChange={handleChange}
              fullWidth
            />
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              label="Age of the Mother in Marriage"
              name="motherAgeInMarriage"
              value={formData.motherAgeInMarriage}
              onChange={handleChange}
              error={Boolean(errors.motherAgeInMarriage)}
              helperText={errors.motherAgeInMarriage}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              label="Name of the Husband"
              name="husbandName"
              value={formData.husbandName}
              onChange={handleChange}
              error={Boolean(errors.husbandName)}
              helperText={errors.husbandName}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              label="Age of the Husband"
              name="husbandAge"
              value={formData.husbandAge}
              onChange={handleChange}
              error={Boolean(errors.husbandAge)}
              helperText={errors.husbandAge}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="dense" error={Boolean(errors.husbandEducationLevel)}>
              <InputLabel>Education Level of the Husband</InputLabel>
              <Select
                name="husbandEducationLevel"
                value={formData.husbandEducationLevel}
                onChange={handleChange}
                label="Education Level of the Husband"
              >
                {/* Add education level options */}
                <MenuItem value="No Formal Education">
                  No Formal Education
                </MenuItem>
                <MenuItem value="Primary Education">Primary Education</MenuItem>
                <MenuItem value="Senior Secondary (O/L)">
                  Senior Secondary (O/L)
                </MenuItem>
                <MenuItem value="Advanced Level (A/L)">
                  Advanced Level (A/L)
                </MenuItem>
                <MenuItem value="Diploma">Diploma</MenuItem>
                <MenuItem value="Undergraduate Degree">
                  Undergraduate Degree
                </MenuItem>
                <MenuItem value="Postgraduate Diploma">
                  Postgraduate Diploma
                </MenuItem>
                <MenuItem value="Master's Degree">Master's Degree</MenuItem>
                <MenuItem value="Doctorate (Ph.D.)">Doctorate (Ph.D.)</MenuItem>
              </Select>
              {errors.husbandEducationLevel && (
      <FormHelperText>{errors.husbandEducationLevel}</FormHelperText>
    )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              label="Husband's Occupation"
              name="husbandOccupation"
              value={formData.husbandOccupation}
              onChange={handleChange}
              error={Boolean(errors.husbandOccupation)}
              helperText={errors.husbandOccupation}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              label="Registration Number"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
              error={Boolean(errors.registrationNumber)}
              helperText={errors.registrationNumber}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              label="Registration Location"
              name="registrationLocation"
              value={formData.registrationLocation}
              onChange={handleChange}
              error={Boolean(errors.registrationLocation)}
              helperText={errors.registrationLocation}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              label="Registration Date"
              name="registrationDate"
              type="date"
              value={formData.registrationDate}
              onChange={handleChange}
              error={Boolean(errors.registrationDate)}
              helperText={errors.registrationDate}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="dense"
              label="Registration Date in Eligible Family Register"
              name="registrationDateEligibleFamilyRegister"
              type="date"
              value={formData.registrationDateEligibleFamilyRegister}
              onChange={handleChange}
              error={Boolean(errors.registrationDateEligibleFamilyRegister)}
              helperText={errors.registrationDateEligibleFamilyRegister}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

         {/* Medical Conditions */}
         <Grid item xs={12}>
            <FormControl component="fieldset" fullWidth>
              <FormLabel component="legend" style={{ marginBottom: "20px" }}>
                Medical Conditions
              </FormLabel>
              {[
                { label: "Consanguinity", name: "consanguinity" },
                { label: "Rubella Immunization", name: "rubellaImmunization" },
                { label: "Pre-Pregnancy Screening Done", name: "prePregnancyScreeningDone" },
                { label: "Preconceptional Folic Acid", name: "preconceptionalFolicAcid" },
                { label: "History of Sub-fertility", name: "historyOfSubfertility" },
              ].map((condition) => (
                <Box key={condition.name} display="flex" alignItems="center" marginBottom="20px">
                  <Typography
                    variant="subtitle1"
                    style={{ width: "50%", margin: "0 10px 0 0" }}
                  >
                    {condition.label}
                  </Typography>
                  <RadioGroup
                    aria-label={condition.name}
                    name={condition.name}
                    value={formData[condition.name]}
                    onChange={handleRadioChange}
                    row
                  >
                    <FormControlLabel value="true" control={<Radio />} label="Yes" />
                    <FormControlLabel value="false" control={<Radio />} label="No" />
                  </RadioGroup>
                  {errors[condition.name] && (
                    <FormHelperText error>{errors[condition.name]}</FormHelperText>
                  )}
                </Box>
              ))}
            </FormControl>
          </Grid>
        </Grid>
        {/* <FormControlLabel
          control={<Checkbox checked={checked} onChange={handleCheckboxChange} />}
          label="I ensure the accuracy of the information"
          style={{ marginTop: 16 }}
        /> */}
      </DialogContent>
      <DialogActions
        style={{
          backgroundColor: "#D5C6E0",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Button
          onClick={onClose}
          style={{ backgroundColor: "#192A51", color: "#fff" }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          style={{ backgroundColor: "#192A51", color: "#fff" }}
        >
          Register Mother
        </Button>
      </DialogActions>
    </Dialog>
  );
};
