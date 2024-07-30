import React,{useState,useEffect} from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import { listDoctor } from '../../services/doctorServise';
import { useNavigate } from 'react-router-dom'; 

const ListDoctorComponenets = () => {
  const [doctor, setDoctor] = useState([]);

  const navigator = useNavigate();


  useEffect(() => {
    listDoctor().then((response)=>{
      setDoctor(response.data);
    }) .catch(error=>{
      console.error(error);
    })
    
  }, []);

  
  function addDoctor() {
    navigator('/doctor/clinics');
  }

  return (
    <div className="container p-8 mx-auto my-8 bg-white rounded-lg shadow-lg">
      <h1 className="mb-4 text-2xl font-bold">Schedules</h1>
      <Button variant="contained" color="primary" size="small" style={{ marginRight: '8px' }} onClick={addDoctor}>Add Doctor</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Day</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doctor.map((doctor) => (
              <TableRow key={doctor.id}>
                <TableCell>{doctor.name}</TableCell>
                <TableCell>{doctor.email}</TableCell>
                <TableCell>{doctor.number}</TableCell>
                <TableCell>{doctor.idnumber}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" size="small" style={{ marginRight: '8px' }}>
                    View
                  </Button>
                  <Button variant="contained" color="secondary" size="small" style={{ marginRight: '8px' }}>
                    Edit
                  </Button>
                  <Button variant="contained" color="error" size="small">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListDoctorComponenets;
