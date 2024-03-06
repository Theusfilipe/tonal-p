import React from 'react';
import { DateTime } from 'luxon';
import  '../global.css';
import { Label } from './ui/label';

import CollapsibleHours from './collapsibleHours';
import ScheduledPerson from '@/Objects/ScheduledPerson';
import ScheduledPersonCard from './ScheduledPersonCard';
import EmptyScheduledPersonCard from './EmptyScheduledPersonCard';

import {
  Pagination,
  PaginationContent,
  
  PaginationItem,
  
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


  const scheudule : ScheduledPerson[] = [new ScheduledPerson(new Date('2024-03-13T10:00:00'),"Fred"), new ScheduledPerson(new Date('2024-03-13T11:00:00'),"Gregory"), new ScheduledPerson(new Date('2024-03-14T11:00:00'),"Gregory")];

  

  const weekDates = generateWeekDates(startDateObj);

  // Generate an array of hours
  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="weekly-calendar">
      <h2>Week of {weekDates.at(0)?.day} of {weekDates.at(0)?.monthLong} of {weekDates.at(0)?.year} until {weekDates.at(6)?.day} of {weekDates.at(6)?.monthLong} of {weekDates.at(6)?.year} </h2>
      <div className="week-days-container">
        {weekDates.map((date, index) => (
          <div key={index} className="day">
            <Label>{date.toFormat('dd')+", "}</Label>
            <Label>{date.toFormat('EEE')}</Label>
            <div className="hours">
              
              <CollapsibleHours start={collapsibleWeek[index].collapseStart} end={collapsibleWeek[index].collapseEnd} />

              {hours.map((hour) => {
                // Check if the hour falls outside the collapsible range
                if (hour > collapsibleWeek[index].collapseEnd) {
                  // Check if there's a scheduled activity for the current date and hour
                  const scheduledActivity = scheudule.find((activity) =>
                        (
                          date.year === activity.date.getFullYear() &&
                          date.month === activity.date.getMonth() + 1 &&
                          date.day === activity.date.getDate() &&
                          hour === activity.date.getHours()
                        )
                        );

                  // If a scheduled activity is found, display its information
                  if (scheduledActivity) {
                    return (
                    <ScheduledPersonCard person={scheduledActivity} />
                    );
                  } else {
                    // Otherwise, display the hour
                    return <EmptyScheduledPersonCard date={hour+":00"} />;
                  }
                }
              return null; // No need to return anything if hour is within the collapsible range
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