import React, { useState } from 'react';
import { Calendar, Badge, Dropdown, Menu } from 'antd';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import moment from 'moment';
import 'antd/dist/reset.css'; // Import Ant Design styles

// Custom Header Component
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
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px', backgroundColor: '#967aa1', color: '#fff' }}>
      <ArrowBack onClick={() => handleMonthChange(-1)} style={{ cursor: 'pointer' }} />
      <Dropdown overlay={yearMenu} trigger={['click']}>
        <span style={{ cursor: 'pointer' }}>{selectedYear}</span>
      </Dropdown>
      <ArrowForward onClick={() => handleMonthChange(1)} style={{ cursor: 'pointer' }} />
    </div>
  );
};

// Custom Calendar Component
const CustomCalendar = () => {
  const dateCellRender = (value) => {
    // Define event dates
    const events = ['2024-07-25', '2024-07-30'];
    const dateString = value.format('YYYY-MM-DD');
    
    return events.includes(dateString) ? (
      <Badge dot={true} />
    ) : null;
  };

  return (
    <Calendar
      headerRender={({ value, onChange }) => <CustomHeader value={value} onChange={onChange} />}
      fullscreen={false}
      dateCellRender={dateCellRender}
      style={{ backgroundColor: '#967aa1' }}
    />
  );
};

export default CustomCalendar;
