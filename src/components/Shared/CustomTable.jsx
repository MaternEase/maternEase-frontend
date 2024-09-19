import React, { useEffect, useState } from 'react';
import {
  Avatar, Button, Card, CardContent, CardHeader, IconButton, InputBase,
  Paper, Tab, Tabs, Tooltip, Typography, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, MenuItem, Select
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ProfileButton from '../Shared/ProfileButton';

const themeColors = {
  primary: '#F5E6E8',
  secondary: '#D5C6E0',
  tertiary: '#AAA1C8',
  quaternary: '#967AA1',
  quinary: '#192A51',
  risky: '#E4B1B1',
  riskyHover: '#D29C9C',
  nonRisky: '#F5E6E8',
  nonRiskyHover: '#7FA7D4',
  referDoctor: '#F5E6E8',
  referDoctorHover: '#D5C6E0',
  referredDoctor: '#967AA1',
  referredDoctorHover: '#7D6091'
};

const CustomTable = ({ title, subheader, tabs, tableHead, tableRows, onAddMemberClick, showActions = true }) => {
  const [tabValue, setTabValue] = useState(tabs[0].value);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCondition, setFilterCondition] = useState('');
  const [filterAge, setFilterAge] = useState('');
  const [rows, setRows] = useState([]);

  const navigate = useNavigate();

  // Sync rows state with prop changes
  useEffect(() => {
    setRows(tableRows);
  }, [tableRows]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleConditionChange = (event) => {
    setFilterCondition(event.target.value);
  };

  const handleAgeChange = (event) => {
    setFilterAge(event.target.value);
  };

  const handleViewProfileClick = (id) => {
    navigate(`/midwife/profile/${id}`);
  };

  const handleReferToDoctorClick = (id) => {
    console.log(`Referred to doctor for ID: ${id}`);
  };

  const filteredRows = rows.filter(row => {
    const matchesSearch = row.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCondition = filterCondition ? row.condition === filterCondition : true;
    const matchesAge = filterAge ? row.age === parseInt(filterAge, 10) : true;
    return matchesSearch && matchesCondition && matchesAge;
  });

  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader
        title={title}
        subheader={subheader}
        action={
          showActions && (
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button variant="contained" size="small" style={{
                backgroundColor: '#192A51',
                borderColor: '#192A51',
                borderRadius: '20px',
                height: '40px',
                fontSize: '14px'
              }} onClick={onAddMemberClick}>+ Add New Expectant Mother</Button>
            </div>
          )
        }
      />
      <CardContent sx={{ height: 'calc(100% - 68px)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: '10%', alignItems: 'center' }}>
          <Tabs style={{ marginBottom: '22px' }}
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            {tabs.map(({ label, value }) => (
              <Tab key={value} label={label} value={value} />
            ))}
          </Tabs>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, mt: 2, backgroundColor: '#EEEEEE' }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Members"
              inputProps={{ 'aria-label': 'search members' }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <Select
            sx={{ p: '2px 2px', display: 'flex', alignItems: 'center', width: 150, mt: 2 }}
            value={filterCondition}
            onChange={handleConditionChange}
            displayEmpty
          >
            <MenuItem value=""><em>Condition</em></MenuItem>
            <MenuItem value="Risky">Risky</MenuItem>
            <MenuItem value="Non Risky">Non Risky</MenuItem>
          </Select>
        </div>
        <TableContainer sx={{ flexGrow: 1, maxHeight: '400px' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {tableHead.map((head) => (
                  <TableCell key={head} sx={{ padding: '8px' }}>
                    <Typography variant="subtitle2" color="textSecondary">
                      {head}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map(({ motherId, name, age, contactNo, condition, referToDoctor }) => (
                <TableRow key={motherId}>
                  <TableCell sx={{ padding: '10px' }}>
                    {/* <Avatar src={motherId} alt={name} /> */}
                    <Typography variant="body2" color="textSecondary">{motherId}</Typography>
                  </TableCell>
                  <TableCell sx={{ padding: '10px' }}>{name}</TableCell>
                  <TableCell sx={{ padding: '10px' }}>{age}</TableCell>
                  <TableCell sx={{ padding: '10px' }}>{contactNo}</TableCell>
                  <TableCell sx={{ padding: '10px' }}>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: condition === "Risky" ? themeColors.risky : themeColors.nonRisky,
                        color: '#000',
                        '&:hover': {
                          backgroundColor: condition === "Risky" ? themeColors.riskyHover : themeColors.nonRiskyHover,
                          color: '#fff',
                        },
                      }}
                      onClick={() => handleConditionChange(motherId)}
                      >{condition ? 'Risky' : 'Non Risky'}
                    </Button>
                  </TableCell>
                  <TableCell sx={{ padding: '10px' }}>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: referToDoctor ? themeColors.referredDoctor : themeColors.referDoctor,
                        color: '#000',
                        '&:hover': {
                          backgroundColor: referToDoctor ? themeColors.referredDoctorHover : themeColors.referDoctorHover,
                          color: '#fff',
                        },
                      }}
                      onClick={() => handleReferToDoctorClick(motherId)}
                    >{referToDoctor ? 'Referred' : 'Refer to Doctor'}
                    </Button>
                  </TableCell>
                  <TableCell sx={{ padding: '10px' }}>
                    <Tooltip title="View Profile">
                      <ProfileButton
                        variant="contained"
                        color="secondary"
                        size="small"
                        sx={{
                          backgroundColor: themeColors.quaternary,
                          '&:hover': {
                            backgroundColor: themeColors.quinary,
                          },
                        }}
                        onClick={() => handleViewProfileClick(motherId)}
                      >
                        View Profile
                      </ProfileButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default CustomTable;
