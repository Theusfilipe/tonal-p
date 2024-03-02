
import  { useState } from 'react';
import WeeklyCalendar from './WeeklyCalendar';

const [startDate, setStartDate] = useState<string>('2024-03-01');

interface collapsibleDay{
  collapseStart: number;
  collapseEnd: number;
}

interface TonalProps {
  startDate: string; // Start hour of the collapsible range
  collapsibleWeek: collapsibleDay[]; // End hour of the collapsible range
}
  

  const handleStartDateChange = (newStartDate: string) => {
    setStartDate(newStartDate);
  };

const TonalCalendar: React.FC<TonalProps> = ({ startDate, collapsibleWeek}) => {
  setStartDate(startDate);

  return (
    <WeeklyCalendar startDate={startDate} collapsibleWeek={collapsibleWeek} onChangeStartDate={handleStartDateChange} />

  );

};


export default TonalCalendar;

