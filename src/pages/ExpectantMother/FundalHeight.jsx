import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthService from '../../services/authService';
import {Chart} from "react-chartjs-2"; // Adjust the path as needed

const FundalHeight = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = AuthService.getToken(); // Retrieve token from AuthService
                const headers = { Authorization: `Bearer ${token}` };
                const response = await axios.get('http://localhost:15000/api/v1/mother/AS9/fundal-height', { headers });
                setChartData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {chartData ? <Chart data={chartData} /> : <p>Loading...</p>}
        </div>
    );
};

export default FundalHeight;
