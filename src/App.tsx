import WeeklyCalendar from "./components/WeeklyCalendar";


export function App() {

// Example start date for the weekly calendar
  const startDate = "2024-03-01T00:00:00.000Z"; // ISO format string

  const start = 0;
  const end = 9;

 

  return (
    <div className="app">
      <h1>My Weekly Calendar App</h1>
      <WeeklyCalendar startDate={startDate} start={start} end={end} />
    </div>
  );
}

