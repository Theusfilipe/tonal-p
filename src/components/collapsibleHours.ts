// collapsibleHours.ts

// Interface for collapsible hour range
export interface CollapsibleHours {
  start: number;
  end: number;
}

// Sample collapsible hours data
export const collapsibleHours: CollapsibleHours[] = [
  { start: 0, end: 9 }, // Example collapsible range from 8:00 to 12:00
];

// Function to check if an hour is collapsible
export const isCollapsibleHour = (hour: number): boolean => {
  if (hour < 0 || hour > 23) {
    throw new Error('Hour must be between 0 and 23.');
  }
  return collapsibleHours.some((range) => hour >= range.start && hour < range.end);
};