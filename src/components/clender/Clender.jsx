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
      next2Label={null}
      prev2Label={null}
    />
  </div>
  )
}

export default Clender