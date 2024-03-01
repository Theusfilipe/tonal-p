import React from 'react';
import { ChevronsUpDown } from "lucide-react";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

interface CollapsibleHoursProps {
  start: number; // Start hour of the collapsible range
  end: number; // End hour of the collapsible range
}

const CollapsibleHours: React.FC<CollapsibleHoursProps> = ({ start, end }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  // Generate an array of hours within the collapsible range
  const collapsibleHours = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <div>
          {start}:00 - {end}:00
        </div>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        {/* Additional content if needed */}
      </div>
      <CollapsibleContent className="space-y-2">
        {/* Render each hour inside the collapsible component */}
        {collapsibleHours.map((hour, index) => (
          <div key={index}>{hour}:00</div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleHours;