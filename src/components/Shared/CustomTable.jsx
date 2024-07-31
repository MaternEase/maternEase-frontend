import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  InputBase,
  Paper,
  Tab,
  Tabs,
  Tooltip,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination,
  MenuItem,
  Select,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import {
  Search as SearchIcon,
  Edit as EditIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ProfileButton from '../Shared/ProfileButton';

const themeColors = {
  primary: '#F5E6E8',
  secondary: '#D5C6E0',
  tertiary: '#AAA1C8',
  quaternary: '#967AA1',
  quinary: '#192A51',
  risky: '#E4B1B1',
  nonRisky: '#9DBFE6',
  referDoctor: '#28A745'
};

const CustomTable = ({ title, subheader, tabs, tableHead, tableRows, onAddMemberClick, showActions = true }) => {
  const [tabValue, setTabValue] = useState(tabs[0].value);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCondition, setFilterCondition] = useState('');
  const [filterAge, setFilterAge] = useState('');
  const [referDialogOpen, setReferDialogOpen] = useState(false);

  const navigate = useNavigate();

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
    navigate(`/midwife/mothers/expected/profile/${id}`);
  };

  const handleReferToDoctorClick = () => {
    setReferDialogOpen(true);
  };

  const handleCloseReferDialog = () => {
    setReferDialogOpen(false);
  };

  const filteredRows = tableRows.filter(row => {
    const matchesSearch = row.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCondition = filterCondition ? row.condition === filterCondition : true;
    const matchesAge = filterAge ? row.age === parseInt(filterAge) : true;
    return matchesSearch && matchesCondition && matchesAge;
  });

  return (
    <>
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
                }} startIcon={<EditIcon />} onClick={onAddMemberClick}>+ Add New Expectant Mother</Button>
              </div>
            )
          }
          sx={{ backgroundColor: '' }}
        />
        <CardContent sx={{ height: 'calc(100% - 68px)', display: 'flex', flexDirection: 'column', backgroundColor: '' }}>
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
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, mt: 2, marginTop: '0px', marginBottom: '22px', backgroundColor: '#EEEEEE' }}
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
            <div>
              <Select
                sx={{ p: '2px 2px', display: 'flex', alignItems: 'center', width: 150, mt: 2, marginTop: '0px', marginBottom: '22px' }}
                value={filterCondition}
                onChange={handleConditionChange}
                displayEmpty
              >
                <MenuItem value=""><em>Condition</em></MenuItem>
                <MenuItem value="Risky">Risky</MenuItem>
                <MenuItem value="Non Risky">Non Risky</MenuItem>
              </Select>
            </div>
          </div>
          <TableContainer sx={{ flexGrow: 1 }}>
            <Table>
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
                {filteredRows.map(({ id, img, name, age, condition, referToDoctor, guardianName, deliveredDate }) => (
                  <TableRow key={id}>
                    <TableCell sx={{ padding: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar src={img} alt={name} />
                        <div style={{ marginLeft: '8px' }}>
                          <Typography variant="body2" color="textSecondary">{id}</Typography>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell sx={{ padding: '10px' }}>
                      <Typography variant="body2">{name}</Typography>
                    </TableCell>
                    <TableCell sx={{ padding: '10px' }}>
                      <Typography variant="body2">{age}</Typography>
                    </TableCell>
                    <TableCell sx={{ padding: '10px' }}>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{
                          backgroundColor: condition === "Risky" ? themeColors.risky : themeColors.nonRisky,
                          color: themeColors.primary
                        }}
                      >
                        {condition}
                      </Button>
                    </TableCell>
                    <TableCell sx={{ padding: '10px' }}>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          borderColor: referToDoctor ? themeColors.referDoctor : themeColors.tertiary,
                          color: referToDoctor ? themeColors.referDoctor : themeColors.tertiary
                        }}
                        onClick={handleReferToDoctorClick}
                      >
                        Refer to Doctor
                      </Button>
                    </TableCell>
                    <TableCell sx={{ padding: '10px' }}>
                      <Typography variant="body2">{deliveredDate}</Typography>
                    </TableCell>
                    <TableCell sx={{ padding: '10px' }}>
                      <Tooltip title="View Profile">
                        <ProfileButton
                          variant="contained"
                          color="secondary"
                          size="small"
                          onClick={() => handleViewProfileClick(id)}
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
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                count={filteredRows.length}
                rowsPerPage={5}
                page={0}
                // Implement changePage and changeRowsPerPage handlers as needed
              />
            </TableRow>
          </TableFooter>
        </CardContent>
      </Card>

      <Dialog open={referDialogOpen} onClose={handleCloseReferDialog}>
        <DialogTitle>Refer to Doctor</DialogTitle>
        <DialogContent>
          <Typography>The member has been referred to a doctor.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseReferDialog} color="primary">OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CustomTable;
