// Calendar Component
import React, { useState } from 'react';
import { Calendar, Badge, Dropdown, Menu } from 'antd';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import moment from 'moment';
import '../styles/components.css';

const CustomHeader = ({ value, onChange }) => {
  const [selectedYear, setSelectedYear] = useState(value.year());

  const handleMonthChange = (direction) => {
    onChange(value.clone().add(direction, 'month'));
  };

  const handleYearChange = (year) => {
    const newDate = value.clone().year(year);
    setSelectedYear(year);
    onChange(newDate);
  };

  const yearMenu = (
    <Menu>
      {[...Array(10).keys()].map((i) => {
        const year = moment().year() - 5 + i;
        return (
          <Menu.Item key={year} onClick={() => handleYearChange(year)}>
            {year}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', }}>
      <ArrowBack onClick={() => handleMonthChange(-1)} style={{ cursor: 'pointer', fontSize: '16px' }} />
      <span style={{ fontSize: '16px', color: '#192A51', fontWeight: 'bold' }}>{value.format('MMMM')}</span>
      <Dropdown overlay={yearMenu} trigger={['click']}>
        <span style={{ cursor: 'pointer', fontSize: '16px', color: '#192A51', fontWeight: 'bold' }}>{selectedYear}</span>
      </Dropdown>
      <ArrowForward onClick={() => handleMonthChange(1)} style={{ cursor: 'pointer', fontSize: '16px' }} />
    </div>
  );
};

const CustomCalendar = () => {
  const dateCellRender = (value) => {
    const events = ['2024-07-25', '2024-07-30'];
    const dateString = value.format('YYYY-MM-DD');
    
    return events.includes(dateString) ? (
      <div className="ant-calendar-date-event">{value.date()}</div>
    ) : null;
  };

  const footerRender = () => (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <a href="/full-calendar" style={{ color: '#192A51', fontSize: '14px' }}>View Full Calendar</a>
    </div>
  );

  return (
    <Calendar
      headerRender={({ value, onChange }) => <CustomHeader value={value} onChange={onChange} />}
      fullscreen={false}
      dateCellRender={dateCellRender}
      footerRender={footerRender}
    />
  );
};

export default CustomCalendar;
