// Calendar Component
import React, { useState } from "react";
import { Calendar, Badge, Dropdown, Menu, Button } from "antd";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import "../styles/components.css";

const CustomHeader = ({ value, onChange }) => {
  const [selectedYear, setSelectedYear] = useState(value.year());

  const handleMonthChange = (direction) => {
    onChange(value.clone().add(direction, "month"));
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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
      }}
    >
      <ArrowBack
        onClick={() => handleMonthChange(-1)}
        style={{ cursor: "pointer", fontSize: "16px" }}
      />
      <span style={{ fontSize: "16px", color: "#192A51", fontWeight: "bold" }}>
        {value.format("MMMM")}
      </span>
      <Dropdown overlay={yearMenu} trigger={["click"]}>
        <span
          style={{
            cursor: "pointer",
            fontSize: "16px",
            color: "#192A51",
            fontWeight: "bold",
          }}
        >
          {selectedYear}
        </span>
      </Dropdown>
      <ArrowForward
        onClick={() => handleMonthChange(1)}
        style={{ cursor: "pointer", fontSize: "16px" }}
      />
    </div>
  );
};

const CustomCalendar = ({ events, fullCalendarPath }) => {
  const navigate = useNavigate();

  const dateCellRender = (value) => {
    const dateKey = value.format("YYYY-MM-DD");
    const dayEvents = events[dateKey] || [];
    return (
      <div>
        {dayEvents.map((event) => (
          <Badge key={event.id} color="blue" />
        ))}
      </div>
    );
  };

  return (
    <div>
      <Calendar
        headerRender={({ value, onChange }) => (
          <CustomHeader value={value} onChange={onChange} />
        )}
        fullscreen={false}
        cellRender={dateCellRender}
      />

      {fullCalendarPath && (
        <Button
          type="link"
          onClick={() => navigate(fullCalendarPath)}
          style={{ marginTop: "10px" }}
        >
          Full Calendar
        </Button>
      )}
    </div>
  );
};

export default CustomCalendar;
