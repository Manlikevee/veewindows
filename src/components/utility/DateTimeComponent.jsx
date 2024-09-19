'use client'
import React, { useState, useEffect } from 'react';

const DateTimeComponent = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const isPM = hours >= 12;
    hours = hours % 12 || 12; // Convert 24hr to 12hr format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const period = isPM ? 'PM' : 'AM';
    return `${hours}:${formattedMinutes} ${period}`;
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className='dateflex'>
      {formatTime(dateTime)}

<div className='dateflex'>
{formatDate(dateTime)}
</div>
  
    </div>
  );
};

export default DateTimeComponent;
