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
      // value: 1052,
      paragraph:
        'Data analysis on various health conditions and outcomes during pregnancy and childbirth.',
      path: '/doctor/maternalhealthstats',
    },
    {
      key: 2,
      title: 'Pregnancy and Delivery Statistics',
      // value: 475,
      paragraph:
        ' Detailed metrics on pregnancy occurrences, delivery methods, and birth outcomes.'
    },
    {
      key: 3,
      title: 'Newborn Health Statistics',
      // value: 8,
      paragraph:
        'Comprehensive insights into pregnancy trends and childbirth practices.',
      path: '/doctor/pregnancydeliverystats',
    },
    {
      key: 4,
      title: 'Immunization and Screening Statistics',
      // value: 29,
      paragraph:
        'Statistical overview of pregnancies, delivery types, and associated health outcomes.',
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
