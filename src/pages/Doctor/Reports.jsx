import React, { useState } from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../../styles/Admin/Dashboard.css';

const { Title } = Typography;

const Reports = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  const cardData = [
    {
      key: 1,
      title: 'Maternal Health Statistics',
      value: 1052,
      paragraph:
        'Newborns this week have reached a significant number. Keep track of their progress and ensure proper care is provided.',
      path: '/doctor/maternalhealthstats',
    },
    {
      key: 2,
      title: 'Pregnancy and Delivery Statistics',
      value: 475,
      paragraph:
        'The count of expectant mothers is vital for planning and resource allocation. Ensure all are receiving the necessary prenatal care.',
      path: '/doctor/pregnancydeliverystats',
    },
    {
      key: 3,
      title: 'Newborn Health Statistics',
      value: 8,
      paragraph:
        'We currently have a total of 8 doctors available. Their expertise and availability are crucial for providing quality medical care.',
      path: '/doctor/pregnancydeliverystats',
    },
    {
      key: 4,
      title: 'Immunization and Screening Statistics',
      value: 29,
      paragraph:
        'With 29 midwives on duty, we are well-prepared to assist in childbirth and provide essential support to new mothers.',
      path: '/doctor/ImmunizationScreeningstats',
    },
  ];

  return (
    <div style={{ padding: '24px', minHeight: '100vh' }}>
      <Row gutter={16} style={{ marginTop: 24 }}>
        {cardData.map((card) => (
          <Col span={6} key={card.key}>
            <Card
              onClick={() => handleCardClick(card.path)}
              title={<span style={{ color: '#7C3AED' }}>{card.title}</span>}
              bordered={false}
              style={{
                backgroundColor: '#eee4f9',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
              bodyStyle={{ padding: '8px 16px' }}
              headStyle={{ borderBottom: 0 }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d9c3f1')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#eee4f9')}
            >
              <Title level={3}>{card.value}</Title>
              <p>{card.paragraph}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Reports;
