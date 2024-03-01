import React from 'react';
import { DateTime } from 'luxon';
import  '../global.css';
import { Label } from './ui/label';
import { Collapsible } from './ui/collapsible';

import { CollapsibleHours, isCollapsibleHour } from './collapsibleHours'; // Import collapsibleHours module


interface CalendarProps {
  startDate: string; // We'll accept ISO format string as startDate
  collapsibleHours?: CollapsibleHours[]; // Optional collapsibleHours prop
}



const WeeklyCalendar: React.FC<CalendarProps> = ({ startDate, collapsibleHours }) => {
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
            <Label>{date.toFormat('EEE')}</Label>
            <div className="hours">
              {hours.map((hour) => (
                <div key={hour} className="hour">
                  {isCollapsibleHour(hour) ? (
                    <Collapsible title={`${hour}:00`} collapsed={true}>
                      {/* Render each hour within the collapsible component */}
                      {Array.from({ length: hour + 1 }, (_, i) => (
                        <div key={i}>{i}:00</div>
                      ))}
                    </Collapsible>
                  ) : (
                    <div>{hour}:00</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;