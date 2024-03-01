import React from 'react';
import { DateTime } from 'luxon';
import  '../global.css';
import { Label } from './ui/label';

import CollapsibleHours from './collapsibleHours';




interface CalendarProps {
  startDate: string; // We'll accept ISO format string as startDate
  start?: number; // Optional collapsibleHours prop
  end?: number;
}



const WeeklyCalendar: React.FC<CalendarProps> = ({ startDate, start, end }) => {
  // Convert ISO string to Luxon DateTime object
  const startDateObj = DateTime.fromISO(startDate);

  // Generate an array of dates for the week starting from the provided start date
  const generateWeekDates = (startDateObj: DateTime): DateTime[] => {
    const dates = [];
    let currentDate = startDateObj.startOf('week');

    // Generate dates for the whole week
    for (let i = 0; i < 7; i++) {
      dates.push(currentDate);
      currentDate = currentDate.plus({ days: 1 });
    }

    return dates;
  };

  const weekDates = generateWeekDates(startDateObj);

  // Generate an array of hours
  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="weekly-calendar">
      <h2>Weekly Calendar</h2>
      <div className="week-days-container">
        {weekDates.map((date, index) => (
          <div key={index} className="day">
            <Label>{date.toFormat('dd')+", "}</Label>
            <Label>{date.toFormat('EEE')}</Label>
            <div className="hours">
              <CollapsibleHours start={0} end={9} />

              
                
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;