
import React from 'react';
import { CalendarDays, Users, Trophy } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface HackathonCardProps {
  id: string;
  title: string;
  organizer: string;
  startDate: string;
  endDate: string;
  participantCount: number;
  prizeAmount: string;
  logoUrl: string;
  status: 'upcoming' | 'active' | 'ended';
  tags: string[];
}

const HackathonCard: React.FC<HackathonCardProps> = ({
  id,
  title,
  organizer,
  startDate,
  endDate,
  participantCount,
  prizeAmount,
  logoUrl,
  status,
  tags,
}) => {
  const statusColors = {
    upcoming: 'bg-blue-100 text-blue-800',
    active: 'bg-green-100 text-green-800',
    ended: 'bg-gray-100 text-gray-800',
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md hover:border-hackathon-purple/30 h-full flex flex-col">
      <div className="h-32 w-full relative bg-gradient-to-r from-hackathon-purple/10 to-hackathon-blue/10">
        <div className="absolute top-4 left-4 bg-white rounded-lg p-2 shadow-sm">
          <img 
            src={logoUrl} 
            alt={`${organizer} logo`} 
            className="h-10 w-10 object-contain"
          />
        </div>
        <div className={`absolute top-4 right-4 ${statusColors[status]} px-2 py-1 rounded-full text-xs font-medium`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="font-bold text-lg tracking-tight">{title}</h3>
        <p className="text-sm text-gray-500">Hosted by {organizer}</p>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <CalendarDays className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{startDate} - {endDate}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{participantCount} Participants</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Trophy className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{prizeAmount} in Prizes</span>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2 pb-4">
        <Button className="w-full bg-hackathon-purple hover:bg-hackathon-darkPurple text-white">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HackathonCard;
