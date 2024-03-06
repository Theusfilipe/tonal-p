import * as React from "react"
 
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



interface CardProps {
  date : String;
}
 

const ScheduledPersonCard: React.FC<CardProps> = ({ date}) => {

  
  return (

    
    <Card className="w-[350px]">
      <CardHeader>
        <CardDescription>{date }</CardDescription>
      </CardHeader>
      
      
    </Card>
    
    
    
  )
}

export default ScheduledPersonCard;