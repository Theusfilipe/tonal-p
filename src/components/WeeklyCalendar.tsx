import React from 'react';
import { DateTime } from 'luxon';
import  '../global.css';
import { Label } from './ui/label';

import CollapsibleHours from './collapsibleHours';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"




interface CalendarProps {
  startDate: string; // We'll accept ISO format string as startDate
  onChangeStartDate: (newStartDate: string) => void; // Callback to update startDate
  collapsibleWeek: collapsibleDay[]; 
}

interface collapsibleDay{
  collapseStart: number;
  collapseEnd: number;
}



const WeeklyCalendar: React.FC<CalendarProps> = ({ startDate, collapsibleWeek, onChangeStartDate }) => {
  // Convert ISO string to Luxon DateTime object
  const startDateObj = DateTime.fromISO(startDate);

  const handlePreviousWeek = () => {
    const newStartDate = startDateObj.minus({ weeks: 1 }).toISODate(); // Subtract one week
    if (newStartDate !== null) {
      onChangeStartDate(newStartDate);
    } else {
      console.error("New start date is null");
    }
  };

  const handleNextWeek = () => {
    const newStartDate = startDateObj.plus({ weeks: 1 }).toISODate(); // Add one week
    if (newStartDate !== null) {
      onChangeStartDate(newStartDate);
    } else {
      console.error("New start date is null");
    }
  };

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
      <h2>Week of {weekDates.at(0)?.day} of {weekDates.at(0)?.monthLong} of {weekDates.at(0)?.year} </h2>
      <div className="week-days-container">
        {weekDates.map((date, index) => (
          <div key={index} className="day">
            <Label>{date.toFormat('dd')+", "}</Label>
            <Label>{date.toFormat('EEE')}</Label>
            <div className="hours">
              
              <CollapsibleHours start={collapsibleWeek[index].collapseStart} end={collapsibleWeek[index].collapseEnd} />

              {hours.map((hour) => {
                // Check if the hour falls outside the collapsible range
                if (hour>collapsibleWeek[index].collapseEnd) {
                  return <div key={hour}>{hour}:00</div>;
                }
                return null;
              })}
                
              
            </div>
          </div>
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={handlePreviousWeek} />
          </PaginationItem>
          
          <PaginationItem>
            <PaginationNext onClick={handleNextWeek} />
          </PaginationItem>
        </PaginationContent>
    </Pagination>
    </div>
  );
};

export default WeeklyCalendar;