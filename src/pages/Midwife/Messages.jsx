import React from 'react';
import { Box } from '@mui/material';
import CheckboxGroup from '../../components/Shared/Form/CheckboxGroup';
import CustomTextField from '../../components/Shared/Form/CustomTextField ';
import CustomSelect from '../../components/Shared/Form/CustomSelect';
import SectionTitle from '../../components/Shared/Form/SectionTitle';

const PregnancyRecord = () => {
  const checkboxOptions = [
    { label: 'Firstborn', name: 'firstborn' },
    { label: 'Risky', name: 'risky' },
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
          <CheckboxGroup options={checkboxOptions.slice(0, 2)} />
          <CustomSelect label="Blood Group" name="bloodGroup" options={selectOptions} />
        </Box>

        <CustomTextField label="Identified Antenatal Risk Conditions & Morbidity" name="riskConditions" />

      </Box>


    {/* ************************* Personal Details **************************************** */}


      <SectionTitle title="Personal Details" />

      <Box display="flex" flexDirection="column" gap={2}>
        <Box display="flex" gap={2}>
          <CustomTextField label="Name of the Mother" name="motherName" />
          <CustomTextField label="Age" name="motherAge" />
        </Box>
        <Box display="flex" gap={2}>
          <CustomTextField label="Husband's Name" name="husbandName" />
          <CustomTextField label="Husband's Age" name="husbandAge" />
        </Box>
        <Box display="flex" gap={2}>
          <CustomTextField label="Education Level of the Mother" name="motherEducation" />
          <CustomTextField label="Education Level of the Husband" name="husbandEducation" />
        </Box>
        <Box display="flex" gap={2}>
          <CustomTextField label="Mother's Occupation" name="motherOccupation" />
          <CustomTextField label="Husband's Occupation" name="husbandOccupation" />
        </Box>
      </Box>


      {/* ************************* Registration Details **************************************** */}

      <SectionTitle title="Registration Details" />

      <Box display="flex" flexDirection="column" gap={2}>
        <Box display="flex" gap={2}>
          <CustomTextField label="Registration Number" name="registrationNumber" />
          <CustomTextField label="Registration Date" name="registrationDate" />
        </Box>
        <Box display="flex" gap={2}>
          <CustomTextField label="Registration Location" name="registrationLocation" />
          <CustomTextField label="Registration Date in Eligible Family Register" name="registrationDateInEligibleFamilyRegister" />
        </Box>

        <Box display="flex" gap={2}>
          <CustomTextField label="PHM Area" name="PHM_Area" />
          <CustomTextField label="MOH Area" name="MOH_Area" />
        </Box>

        <Box display="flex" gap={2}>
          <CustomTextField label="Distance for the Mother’s Office" name="Distance" />
          <CustomTextField label="Age of the Mother in Marriage" name="marriedAge" />
        </Box>

        <Box display="flex" gap={2}>
          <CustomTextField label="Address" name="address" />
          
        </Box>

      </Box>

      {/* ************************* Present Obstetric History **************************************** */}

      <SectionTitle title="Present Obstetric History" />
      <Box display="flex" gap={2}>
        <CustomTextField label="Gravidity G" name="gravidityG" />
        <CustomTextField label="Gravidity P" name="gravidityP" />
        <CustomTextField label="Number of Children Alive" name="childrenAlive" />
      </Box>

      <SectionTitle title="Other Information" />
      <CheckboxGroup options={checkboxOptions.slice(2)} />
    </Box>
  );
};

export default PregnancyRecord;
