
import  { useState } from 'react';
import WeeklyCalendar from './WeeklyCalendar';


interface collapsibleDay{
  collapseStart: number;
  collapseEnd: number;
}

interface TonalProps {
  startDate: string; // Start hour of the collapsible range
  collapsibleWeek: collapsibleDay[]; // End hour of the collapsible range
}
  

  

const TonalCalendar: React.FC<TonalProps> = ({ startDate, collapsibleWeek}) => {
  

  const [currentDate, setStartDate] = useState<string>(startDate);

  const handleStartDateChange = (newStartDate: string) => {
    setStartDate(newStartDate);
  };

  return (
    <WeeklyCalendar startDate={currentDate} collapsibleWeek={collapsibleWeek} onChangeStartDate={handleStartDateChange} />

  );

};


export default TonalCalendar;

