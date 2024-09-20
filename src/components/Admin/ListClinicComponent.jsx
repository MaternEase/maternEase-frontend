import React, { useEffect, useState } from "react";
import { listClinics } from "../../services/clinicService";

const ListClinicComponent = () => {
//   const dummyData = [
//     {
//       id: "1",
//       name: "Mahawewa",
//       location: "Town Halle",
//       created_at: "2023-03-09",
//     },
//     {
//       id: "2",
//       name: "Ranwela",
//       location: "Town Halle",
//       created_at: "2010-05-09",
//     },
//     {
//       id: "3",
//       name: "Surapura",
//       location: "Town Halle",
//       created_at: "2017-03-09",
//     },
//   ];

const [clinics, setClinics] = useState([])

useEffect(() => {
    listClinics().then((response) => {
        setClinics(response.data);
    }).catch(error => {
        console.error(error);
    })
}, [])

  return (
    <div>
      <h2>List of Clinics</h2>

      <table>
        <thead>
          <tr>
            <th>Clinic ID</th>
            <th>Clinic Name</th>
            <th>Location</th>
            <th>Created_at</th>
          </tr>
        </thead>
        <tbody>
          {clinics.map((clinic) => (
            <tr key={clinic.id}>
                <td>{clinic.id}</td>
                <td>{clinic.name}</td>
                <td>{clinic.location}</td>
                <td>{clinic.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListClinicComponent;
