import React from 'react';
import { Row, Col } from 'antd';
import WeightChart from '../../components/ExpectantMother/WeightChart.jsx'; // Adjust the path if necessary
import FundalHeightChart from '../../components/ExpectantMother/FundalHeightChart.jsx'; // Adjust the path if necessary

const Charts = () => {
    return (
        <div style={{ height: '100vh', padding: '16px' }}>
            <Row gutter={16} style={{ height: '100%' }}>
                <Col span={12} style={{ height: '100%' }}>
                    <WeightChart />
                </Col>
                <Col span={12} style={{ height: '100%' }}>
                    <FundalHeightChart />

                </Col>
            </Row>
        </div>
    );
};

export default Charts;
