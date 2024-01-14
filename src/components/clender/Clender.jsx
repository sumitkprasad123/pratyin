import React, { useState } from 'react'
import Calendar from 'react-calendar';
import "./clender.scss";
import 'react-calendar/dist/Calendar.css';

const Clender = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };
  return (
    <div >
    <Calendar
      onChange={onChange}
      value={date}
      calendarType="US"
      next2Label={null}
      prev2Label={null}
      className={{boder:"none"}}
    />
  </div>
  )
}

export default Clender