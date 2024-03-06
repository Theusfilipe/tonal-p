
import {CollapsibleDay} from "./components/CollapsibleComponents/CollapsibleDay"
import TonalCalendar from "./components/Tonal";
import {CollapsibleHours} from "./components/CollapsibleComponents/CollapsibleHours";

export function App() {

// Example start date for the weekly calendar
  const startDate= '2024-03-04';


  let collapsibleWeek: CollapsibleDay[] = [];

  for (let i = 0; i < 7; i++) {
    const colHours = new CollapsibleHours(0,8);
    const colDay = new CollapsibleDay([colHours]);
    if((i) === 0 || (i) === 6){
      colDay.addCollapsibleHours(18,24);
    }
    
    collapsibleWeek.push(colDay);
  }

  


  return (
    <div className="app">
      <h1>My Weekly Calendar App</h1>
      <TonalCalendar startDate={startDate} collapsibleWeek={collapsibleWeek} />
    </div>
  );
}

