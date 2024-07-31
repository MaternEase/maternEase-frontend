// import React from 'react';
// import { Row, Col, Card, Typography } from 'antd';
// import { PageHeader } from '@ant-design/pro-layout';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { Link } from 'react-router-dom';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
//
// const theme = createTheme();
//
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
//     paginationContainer: {
//         textAlign: 'right',
//         marginTop: '24px',
//     },
//     button: {
//         backgroundColor: '#967AA1',
//         borderColor: '#967AA1',
//     },
// };
//
// const data = [
//     { week: 1, weightGain: 0 },
//     { week: 2, weightGain: 0.5 },
//     { week: 3, weightGain: 1 },
//     { week: 4, weightGain: 1.2 },
//     { week: 5, weightGain: 1.5 },
//     { week: 6, weightGain: 2 },
//     { week: 7, weightGain: 2.5 },
//     { week: 8, weightGain: 3 },
//     { week: 9, weightGain: 3.5 },
//     { week: 10, weightGain: 4 },
//     { week: 11, weightGain: 4.5 },
//     { week: 12, weightGain: 5 },
//     { week: 13, weightGain: 5.5 },
//     { week: 14, weightGain: 6 },
//     { week: 15, weightGain: 6.5 },
//     { week: 16, weightGain: 7 },
//     { week: 17, weightGain: 7.5 },
//     { week: 18, weightGain: 8 },
// ];
//
// const WeightGainChart = () => (
//     <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <div style={styles.container}>
//             <PageHeader
//                 className="site-page-header"
//                 onBack={() => window.history.back()}
//                 title="Weight Gain Chart"
//                 style={styles.pageHeader}
//             />
//             <div className="content">
//                 <Row gutter={16}>
//                     <Col span={24}>
//                         <Card title={<span>Weight Gain Chart</span>} style={styles.card}>
//                             <ResponsiveContainer width="100%" height={400}>
//                                 <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//                                     <CartesianGrid strokeDasharray="3 3" />
//                                     <XAxis dataKey="week" label={{ value: 'Weeks', position: 'insideBottomRight', offset: 0 }} />
//                                     <YAxis label={{ value: 'Weight Gain (kg)', angle: -90, position: 'insideLeft' }} />
//                                     <Tooltip />
//                                     <Legend />
//                                     <Line type="monotone" dataKey="weightGain" stroke="#8884d8" activeDot={{ r: 8 }} />
//                                 </LineChart>
//                             </ResponsiveContainer>
//                         </Card>
//                     </Col>
//                 </Row>
//             </div>
//             <div style={styles.paginationContainer}>
//                 <Link to="/mother/previouspage">
//                     <Button type="primary" style={styles.button}>Previous</Button>
//                 </Link>
//             </div>
//         </div>
//     </ThemeProvider>
// );
//
// export default WeightGainChart;
