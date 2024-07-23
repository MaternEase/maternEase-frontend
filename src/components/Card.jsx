// Card Component
import React from 'react';
import { Card, Row, Col, Dropdown, Statistic } from 'antd';
import { MoreHoriz } from '@mui/icons-material';
import '../styles/components.css';

const ReusableCard = ({ card, selectedCard, handleCardClick, menu }) => (
  <Card
    className={`custom-card ${selectedCard === card.key ? 'selected' : ''}`}
    onClick={() => handleCardClick(card.key)}
    hoverable
  >
    <Row justify="space-between">
      <Col>
        {card.icon}
        <span className="card-title">{card.title}</span>
      </Col>
      <Col>
        <Dropdown overlay={menu} trigger={['click']}>
          <MoreHoriz className="more-icon" />
        </Dropdown>
      </Col>
    </Row>
    <Statistic
      value={card.value}
      valueStyle={{ color: card.color }}
      suffix={<span className="suffix-text">for today</span>} 
      style={{ marginTop: '16px' }}
    />
    <div className="card-paragraph">
        <p>{card.paragraph}</p>
    </div>
  </Card>
);

export default ReusableCard;
