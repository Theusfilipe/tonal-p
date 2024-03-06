
import  { useState } from 'react';
import WeeklyCalendar from './WeeklyCalendar';
import ScheduledPerson from '@/Objects/ScheduledPerson';

import { CollapsibleDay } from './CollapsibleComponents/CollapsibleDay';



interface TonalProps {
  startDate: string; // Start hour of the collapsible range
  collapsibleWeek: CollapsibleDay[]; // End hour of the collapsible range
}
  

  

const TonalCalendar: React.FC<TonalProps> = ({ startDate, collapsibleWeek}) => {
  const schedule : ScheduledPerson[] = [new ScheduledPerson(new Date('2024-03-06T10:00:00'),"Fred"), new ScheduledPerson(new Date('2024-03-07T11:00:00'),"Gregory"), new ScheduledPerson(new Date('2024-03-08T11:00:00'),"Gregory")];


  const [currentDate, setStartDate] = useState<string>(startDate);

  const handleStartDateChange = (newStartDate: string) => {
    setStartDate(newStartDate);
  };

  return (
    <WeeklyCalendar startDate={currentDate} collapsibleWeek={collapsibleWeek} schedule={schedule} onChangeStartDate={handleStartDateChange} />

  );

};


export default TonalCalendar;

