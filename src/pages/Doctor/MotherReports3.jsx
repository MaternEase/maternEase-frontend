import React from 'react';
import { Row, Col } from 'antd';
// import MotherReports5 from '../../components/Doctor/MotherReports5.jsx'; // Adjust the path if necessary
// import MotherReports4 from '../../components/Doctor/4.jsx'; // Adjust the path if necessary

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
