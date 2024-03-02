
import  { useState } from 'react';
import {CollapsibleDay} from "./components/collapsibleDay"
import TonalCalendar from "./components/Tonal";

export function App() {

// Example start date for the weekly calendar
const [startDate, setStartDate] = useState<string>('2024-03-01');

  let collapsibleWeek: CollapsibleDay[] = [];

  for (let i = 0; i < 7; i++) {
    collapsibleWeek.push(new CollapsibleDay(0,8));
  }

  

  const handleStartDateChange = (newStartDate: string) => {
    setStartDate(newStartDate);
  };

  return (
    <div className="app">
      <h1>My Weekly Calendar App</h1>
      <TonalCalendar startDate={startDate} collapsibleWeek={collapsibleWeek} />
    </div>
  );
}

