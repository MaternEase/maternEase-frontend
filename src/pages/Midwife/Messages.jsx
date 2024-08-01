import React from 'react';
import { Box, Table, TableBody, TableCell, TableRow, FormControlLabel, Radio, RadioGroup, InputAdornment, TableHead, Checkbox } from '@mui/material';
import CheckboxGroup from '../../components/Shared/Form/CheckboxGroup';
import CustomTextField from '../../components/Shared/Form/CustomTextField ';
import CustomSelect from '../../components/Shared/Form/CustomSelect';
import SectionTitle from '../../components/Shared/Form/SectionTitle';

const PregnancyRecord = () => {
  const checkboxOptions = [
    { label: 'Firstborn', name: 'firstborn' },
    { label: 'Risky', name: 'risky' },
  ];

  const antenatalOptions = [
    { label: 'Consanguinity', name: 'consanguinity' },
    { label: 'Rubella Immunization', name: 'rubellaImmunization' },
    { label: 'Pre-Pregnancy Screening Done', name: 'prePregnancyScreeningDone' },
    { label: 'Preconceptional Folic Acid', name: 'preconceptionalFolicAcid' },
    { label: 'History of Sub-Fertility', name: 'historyOfSubFertility' },
  ];

  const selectOptions = [
    { value: 'A+', label: 'A+' },
    { value: 'B+', label: 'B+' },
    { value: 'AB+', label: 'AB+' },
    { value: 'O+', label: 'O+' },
    { value: 'A-', label: 'A-' },
    { value: 'B-', label: 'B-' },
    { value: 'AB-', label: 'AB-' },
    { value: 'O-', label: 'O-' },
  ];

  return (
    <Box p={2}>
      <SectionTitle title="Pregnancy Record" />

      <Box display="flex" flexDirection="column" gap={3}>
        <Box display="flex" gap={2}>
          <CheckboxGroup options={checkboxOptions} />
          <CustomSelect label="Blood Group" name="bloodGroup" options={selectOptions} />
        </Box>

        <CustomTextField label="Identified Antenatal Risk Conditions & Morbidity" name="riskConditions" type="text" />
      </Box>

      {/* ************************* Personal Details **************************************** */}

      <SectionTitle title="Personal Details" />

      <Box display="flex" flexDirection="column" gap={2}>
        <Box display="flex" gap={2}>
          <CustomTextField label="Name of the Mother" name="motherName" type="text" />
          <CustomTextField label="Age" name="motherAge" type="number" />
        </Box>
        <Box display="flex" gap={2}>
          <CustomTextField label="Husband's Name" name="husbandName" type="text" />
          <CustomTextField label="Husband's Age" name="husbandAge" type="number" />
        </Box>
        <Box display="flex" gap={2}>
          <CustomTextField label="Education Level of the Mother" name="motherEducation" type="text" />
          <CustomTextField label="Education Level of the Husband" name="husbandEducation" type="text" />
        </Box>
        <Box display="flex" gap={2}>
          <CustomTextField label="Mother's Occupation" name="motherOccupation" type="text" />
          <CustomTextField label="Husband's Occupation" name="husbandOccupation" type="text" />
        </Box>
      </Box>

      {/* ************************* Registration Details **************************************** */}

      <SectionTitle title="Registration Details" />

      <Box display="flex" flexDirection="column" gap={2}>
        <Box display="flex" gap={2}>
          <CustomTextField label="Registration Number" name="registrationNumber" type="text" />
          <CustomTextField label="Registration Date" name="registrationDate" type="date" />
        </Box>
        <Box display="flex" gap={2}>
          <CustomTextField label="Registration Location" name="registrationLocation" type="text" />
          <CustomTextField label="Registration Date in Eligible Family Register" name="registrationDateInEligibleFamilyRegister" type="date" />
        </Box>

        <Box display="flex" gap={2}>
          <CustomTextField label="PHM Area" name="PHM_Area" type="text" />
          <CustomTextField label="MOH Area" name="MOH_Area" type="text" />
        </Box>

        <Box display="flex" gap={2}>
          <CustomTextField label="Distance for the Mother’s Office" name="Distance" type="text" />
          <CustomTextField label="Age of the Mother in Marriage" name="marriedAge" type="number" />
        </Box>

        <Box display="flex" gap={2}>
          <CustomTextField label="Address" name="address" type="text" />
        </Box>
      </Box>

      {/* ************************* Antenatal Details **************************************** */}
      <SectionTitle title="Antenatal Details" />
      <CheckboxGroup options={antenatalOptions} />

      {/* ************************* Present Obstetric History **************************************** */}
      <SectionTitle title="Pregnancy History" />
      <Box mt={2}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Gravidity</TableCell>
              <TableCell>
                <CustomTextField
                  name="gravidityG"
                  type="text"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">G</InputAdornment>,
                  }}
                />
              </TableCell>
              <TableCell>
                <CustomTextField
                  name="gravidityP"
                  type="text"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">P</InputAdornment>,
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Number of Children Alive</TableCell>
              <TableCell colSpan={2}>
                <CustomTextField name="childrenAlive" type="text" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Age of Youngest Child</TableCell>
              <TableCell colSpan={2}>
                <CustomTextField name="youngestChildAge" type="text" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Last Menstrual Date</TableCell>
              <TableCell colSpan={3}>
                <Box display="flex" gap={1}>
                  <CustomTextField name="lastMenstrualDateD" type="text" placeholder="Day" />
                  <CustomTextField name="lastMenstrualDateM" type="text" placeholder="Month" />
                  <CustomTextField name="lastMenstrualDateY" type="text" placeholder="Year" />
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Expected Delivery Date</TableCell>
              <TableCell colSpan={3}>
                <Box display="flex" gap={1}>
                  <CustomTextField name="expectedDeliveryDateD" type="text" placeholder="Day" />
                  <CustomTextField name="expectedDeliveryDateM" type="text" placeholder="Month" />
                  <CustomTextField name="expectedDeliveryDateY" type="text" placeholder="Year" />
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>US Corrected Expected Delivery Date</TableCell>
              <TableCell colSpan={3}>
                <Box display="flex" gap={1}>
                  <CustomTextField name="usCorrectedExpectedDeliveryDateD" type="text" placeholder="Day" />
                  <CustomTextField name="usCorrectedExpectedDeliveryDateM" type="text" placeholder="Month" />
                  <CustomTextField name="usCorrectedExpectedDeliveryDateY" type="text" placeholder="Year" />
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Expected Period</TableCell>
              <TableCell colSpan={3}>
                <Box display="flex" gap={1}>
                  <CustomTextField name="expectedPeriodD" type="text" placeholder="Day" />
                  <CustomTextField name="expectedPeriodM" type="text" placeholder="Month" />
                  <CustomTextField name="expectedPeriodY" type="text" placeholder="Year" />
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Date of Quickening</TableCell>
              <TableCell colSpan={3}>
                <Box display="flex" gap={1}>
                  <CustomTextField name="dateOfQuickeningD" type="text" placeholder="Day" />
                  <CustomTextField name="dateOfQuickeningM" type="text" placeholder="Month" />
                  <CustomTextField name="dateOfQuickeningY" type="text" placeholder="Year" />
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>POA at Registration</TableCell>
              <TableCell colSpan={2}>
                <CustomTextField name="poaAtRegistration" type="text" placeholder="Enter POA" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Was a Family Planning Method Used Before Pregnancy? If so, Method</TableCell>
              <TableCell colSpan={2}>
                <RadioGroup row name="familyPlanningMethod">
                  <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
                </RadioGroup>
                <CustomTextField name="familyPlanningMethodDetails" type="text" placeholder="Enter method" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>

      {/* ************************* Previous Pregnancy History **************************************** */}
      <SectionTitle title="Previous Pregnancy History" />
      <Box mt={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pregnancy</TableCell>
              <TableCell>Outcome</TableCell>
              <TableCell>Delivery Details</TableCell>
              <TableCell>Place of Delivery</TableCell>
              <TableCell>Birth Weight</TableCell>
              <TableCell>Pregnancy Delivery Complications</TableCell>
              <TableCell>Gender & Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from({ length: 6 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>G{index + 1}</TableCell>
                <TableCell>
                  <CustomTextField name={`outcome${index + 1}`} type="text" placeholder="Enter outcome" />
                </TableCell>
                <TableCell>
                  <CustomTextField name={`deliveryDetails${index + 1}`} type="text" placeholder="Enter details" />
                </TableCell>
                <TableCell>
                  <CustomTextField name={`placeOfDelivery${index + 1}`} type="text" placeholder="Enter place" />
                </TableCell>
                <TableCell>
                  <CustomTextField name={`birthWeight${index + 1}`} type="text" placeholder="Enter weight" />
                </TableCell>
                <TableCell>
                  <CustomTextField name={`complications${index + 1}`} type="text" placeholder="Enter complications" />
                </TableCell>
                <TableCell>
                  <CustomTextField name={`genderAge${index + 1}`} type="text" placeholder="Enter gender & age" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      {/* ************************* Present Obstetric History **************************************** */}
      <SectionTitle title="Present Obstetric History" />
      <Box mt={2}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Age</TableCell>
              <TableCell>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Below 20</TableCell>
                      <TableCell><Checkbox name="ageBelow20" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Over 35</TableCell>
                      <TableCell><Checkbox name="ageOver35" /></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5 or More Pregnancies</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={2}>
                  <Checkbox name="fiveOrMorePregnancies" />
                  <CustomTextField name="fiveOrMorePregnanciesDetails" type="text" placeholder="Specify" />
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Preeclampsia / Hypertension</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={2}>
                  <Checkbox name="preeclampsiaHypertension" />
                  <CustomTextField name="preeclampsiaHypertensionDetails" type="text" placeholder="Specify" />
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Antepartum Vaginal Bleeding</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={2}>
                  <Checkbox name="antepartumVaginalBleeding" />
                  <CustomTextField name="antepartumVaginalBleedingDetails" type="text" placeholder="Specify" />
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Multiple Fertility</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={2}>
                  <Checkbox name="multipleFertility" />
                  <CustomTextField name="multipleFertilityDetails" type="text" placeholder="Specify" />
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Casual Position</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={2}>
                  <Checkbox name="casualPosition" />
                  <CustomTextField name="casualPositionDetails" type="text" placeholder="Specify" />
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Not knowing the due date of the baby</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={2}>
                  <Checkbox name="notKnowingDueDate" />
                  <CustomTextField name="notKnowingDueDateDetails" type="text" placeholder="Specify" />
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Others (specify)</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={2}>
                  <Checkbox name="othersSpecify" />
                  <CustomTextField name="othersSpecifyDetails" type="text" placeholder="Specify" />
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>

      {/* ************************* Other Risky Conditions **************************************** */}
      <SectionTitle title="Other Risky Conditions" />
      <Box mt={2}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>BMI Below 18 or Above 25</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={2}>
                  <Checkbox name="bmiBelow18orAbove25" />
                  <CustomTextField name="bmiBelow18orAbove25Details" type="text" placeholder="Specify" />
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Diabetes Mellitus</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={2}>
                  <Checkbox name="diabetesMellitus" />
                  <CustomTextField name="diabetesMellitusDetails" type="text" placeholder="Specify" />
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Malaria Disease</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={2}>
                  <Checkbox name="malariaDisease" />
                  <CustomTextField name="malariaDiseaseDetails" type="text" placeholder="Specify" />
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cardiac Diseases</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={2}>
                  <Checkbox name="cardiacDiseases" />
                  <CustomTextField name="cardiacDiseasesDetails" type="text" placeholder="Specify" />
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Renal Diseases</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={2}>
                  <Checkbox name="renalDiseases" />
                  <CustomTextField name="renalDiseasesDetails" type="text" placeholder="Specify" />
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Others (specify)</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={2}>
                  <Checkbox name="otherRiskyConditionsSpecify" />
                  <CustomTextField name="otherRiskyConditionsDetails" type="text" placeholder="Specify" />
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>

      {/* ************************* Family Medical History **************************************** */}
      <SectionTitle title="Family Medical History" />
      <Box mt={2}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Diabetes Mellitus</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={2}>
                  <Checkbox name="familyDiabetesMellitus" />
                  <CustomTextField name="familyDiabetesMellitusDetails" type="text" placeholder="Specify" />
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Hypertension</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={2}>
                  <Checkbox name="familyHypertension" />
                  <CustomTextField name="familyHypertensionDetails" type="text" placeholder="Specify" />
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Haematological Diseases</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={2}>
                  <Checkbox name="familyHaematologicalDiseases" />
                  <CustomTextField name="familyHaematologicalDiseasesDetails" type="text" placeholder="Specify" />
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Others (specify)</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={2}>
                  <Checkbox name="familyOthersSpecify" />
                  <CustomTextField name="familyOthersDetails" type="text" placeholder="Specify" />
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default PregnancyRecord;
