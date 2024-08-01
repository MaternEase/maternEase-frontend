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

  function getAllElements() {
    listDoctor()
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const addDoctor = () => {
    navigate('/doctor/clinics');
  };

  const updateDoctor = (id) => {
    navigate(`/doctor/crudupdate/${id}`);
  };

  const removeDoctor = (id) => {
    console.log(id);

    deleteDoctor(id).then((response) => {
      getAllElements();
    }).catch(error => {
      console.error(error);
    });
  }

  return (
    <div className="container p-8 mx-auto my-8 bg-white rounded-lg shadow-lg">
      <h1 className="mb-4 text-2xl font-bold" style={{marginLeft:'45%'} } > Risky Mothers</h1>
      <Button
        variant="contained"
        size="small"
        style={{ backgroundColor: '#7C3AED', color: 'white', marginRight: '8px',margin:'13px',marginBottom:'45px' }}
        onClick={addDoctor}
      >
        Add Mother
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Registration Number</TableCell>
              <TableCell>Phone Number</TableCell>
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
                  {/* <Button
                    variant="contained"
                    size="small"
                    style={{ backgroundColor: '#7C3AED', color: 'white', marginRight: '8px' }}
                    onClick={() => updateDoctor(doctor.id)}
                  >
                    Update
                  </Button> */}
                  <Button
                    variant="contained"
                    size="small"
                    color="error"
                    onClick={() => removeDoctor(doctor.id)}
                  >
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
