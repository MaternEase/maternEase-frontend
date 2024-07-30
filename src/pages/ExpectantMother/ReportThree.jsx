import React from 'react';
import { Row, Col } from 'antd';
import WeightChart from '../../components/ExpectantMother/WeightChart.jsx'; // Adjust the path if necessary
import FundalHeightChart from '../../components/ExpectantMother/FundalHeightChart.jsx'; // Adjust the path if necessary

// const styles = {
//     container: {
//         padding: '24px',
//         backgroundColor: '#ffffff',
//     },
//     pageHeader: {
//         backgroundColor: '#f5f5f5',
//     },
//     card: {
//         marginBottom: '16px',
//     },
//     sectionTitle: {
//         fontSize: '18px',
//         fontWeight: 'bold',
//         marginBottom: '12px',
//     },
//     surgicalCondition: {
//         display: 'flex',
//         alignItems: 'center',
//         marginBottom: '16px',
//     },
//     surgicalConditionText: {
//         flex: 1,
//     },
//     paginationContainer: {
//         textAlign: 'right',
//         marginTop: '24px',
//     },
//     button: {
//         backgroundColor: '#967AA1',
//         borderColor: '#967AA1',
//     },
// };

const ReportThree = () => {
    return (
        <div style={{ height: '100vh', padding: '16px', boxSizing: 'border-box' }}>
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

export default ReportThree;
