import React from 'react';
import {Form, Input, DatePicker, Radio, Card, Table, InputNumber, Button} from 'antd';
import {Link} from "react-router-dom";

const styles = {
    container: {
        padding: '24px',
        backgroundColor: '#ffffff',
    },
    card: {
        marginBottom: '16px',
    },
    inputField: {
        width: '100%',
    },
    pageHeader: {
        backgroundColor: '#f5f5f5',
    },
    sectionTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '12px',
    },
    surgicalCondition: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '16px',
    },
    surgicalConditionText: {
        flex: 1,
    },
    paginationContainer: {
        textAlign: 'right',
        marginTop: '24px',
    },
    button: {
        backgroundColor: '#967AA1',
        borderColor: '#967AA1',
    },
};

const columns = [
    {
        title: 'Date of Visit',
        dataIndex: 'dateOfVisit',
        key: 'dateOfVisit',
        render: () => <DatePicker style={styles.inputField} />,
    },
    ...Array.from({ length: 9 }).map((_, index) => ({
        title: `Visit ${index + 1}`,
        dataIndex: `visit${index + 1}`,
        key: `visit${index + 1}`,
        render: () => <DatePicker style={styles.inputField} />,
    })),
];

const dataSource = [
    {
        key: '1',
        dateOfVisit: '',
        ...Array.from({ length: 9 }).reduce((acc, _, index) => {
            acc[`visit${index + 1}`] = '';
            return acc;
        }, {}),
    },
    ...['Gravidity', 'POA', 'Weight', 'BP', 'Fundal Height', 'Foetal Lie', 'FHR', 'Presentation', 'FM', 'Engagement', 'Proteinuria', 'Oedema', 'Haemoglobin', 'Folate', 'Iron', 'Calcium', 'Vitamin C'].map((label, rowIndex) => ({
        key: `${rowIndex + 2}`,
        dateOfVisit: label,
        ...Array.from({ length: 9 }).reduce((acc, _, colIndex) => {
            acc[`visit${colIndex + 1}`] = rowIndex === 5 ? <Input style={styles.inputField} /> : rowIndex >= 12 ? <Radio.Group><Radio value="supplemented">Supplemented</Radio><Radio value="notSupplemented">Not Supplemented</Radio></Radio.Group> : <InputNumber style={styles.inputField} />;
            return acc;
        }, {}),
    })),
];

const ReportTwo = () => {
    return (
        <div style={styles.container}>
            <Card title="Clinic Care" style={styles.card}>
                <Form layout="vertical">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={dataSource}
                        pagination={false}
                    />
                </Form>
            </Card>
            <div style={styles.paginationContainer}>
                <Link to="/mother/reportthree">
                    <Button type="primary" style={styles.button}>
                        Next
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ReportTwo;
