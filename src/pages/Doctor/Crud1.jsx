import React, { useState, useEffect } from 'react';
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
import { deleteDoctor, listDoctor } from '../../services/doctorServise';
import { useNavigate } from 'react-router-dom';

const ListDoctorComponents = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllElements();
  }, []);

  function getAllElements(){
    listDoctor()
    .then((response) => {
      setDoctors(response.data);
    })
    .catch((error) => {
      console.error(error);
    })
  }

  const addDoctor = () => {
    navigate('/doctor/clinics');
  };

  const updateDoctor = (id) => {
    navigate(`/doctor/crudupdate/${id}`);
  };
  
  const removeDoctor=(id)=> {
    console.log(id);

    deleteDoctor(id).then((response)=>{
      getAllElements()
    }).catch(error=>{
      console.error(error);
    })
  }

  return (
    <div className="container p-8 mx-auto my-8 bg-white rounded-lg shadow-lg">
      <h1 className="mb-4 text-2xl font-bold">Schedules</h1>
      <Button variant="contained" color="primary" size="small" style={{ marginRight: '8px' }} onClick={addDoctor}>
        Add Doctor
      </Button>
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
            {doctors.map((doctor) => (
              <TableRow key={doctor.id}>
                <TableCell>{doctor.name}</TableCell>
                <TableCell>{doctor.email}</TableCell>
                <TableCell>{doctor.number}</TableCell>
                <TableCell>{doctor.idnumber}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginRight: '8px' }}
                    onClick={() => updateDoctor(doctor.id)}
                  >
                    Update
                  </Button>
                  <Button variant="contained" color="error" size="small" onClick={() => removeDoctor(doctor.id)}>
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

export default ListDoctorComponents;
