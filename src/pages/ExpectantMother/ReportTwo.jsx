import React from 'react';
import { Form, Input, DatePicker, Radio, Card, Table, InputNumber } from 'antd';

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

const ClinicCareForm = () => {
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
        </div>
    );
};

export default ClinicCareForm;
