import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import ScheduledPerson from "@/Objects/ScheduledPerson"

interface CardProps {
  person : ScheduledPerson;
}
 

const ScheduledPersonCard: React.FC<CardProps> = ({ person}) => {

  
  return (

    
    <Card className="w-[260px]">
      <CardHeader>
        <CardTitle>{person.name} scheduled for this hour</CardTitle>
        <CardDescription> {person.date.toTimeString()} </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Action</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="cancel">Cancel</SelectItem>
                  <SelectItem value="reschedule">Reschedule</SelectItem>
                  <SelectItem value="notes">Add notes</SelectItem>
                  <SelectItem value="complete">Mark as complete</SelectItem>
                  <SelectItem value="remind">Remind</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Submit Action</Button>
      </CardFooter>
    </Card>
    
    
    
  )
}

export default ScheduledPersonCard;