
import React from 'react';
import { Button } from "@/components/ui/button";
import { Users } from 'lucide-react';

type TeamCardProps = {
  id: string;
  name: string;
  lookingFor: string;
  description: string;
  members: { initial: string }[];
  isOpen: boolean;
  onClick: () => void;
};

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  lookingFor,
  description,
  members,
  isOpen,
  onClick,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-hackathon-purple transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-purple-100 p-2 rounded-lg">
            <Users className="h-5 w-5 text-hackathon-purple" />
          </div>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{lookingFor}</p>
          </div>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full ${isOpen ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
          {isOpen ? 'Open' : 'Closed'}
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-4">
        {description}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex -space-x-2">
          {members.map((member, i) => (
            <div
              key={i}
              className="h-8 w-8 rounded-full bg-hackathon-purple text-white flex items-center justify-center text-sm border-2 border-white"
            >
              {member.initial}
            </div>
          ))}
        </div>
        <Button 
          variant="ghost" 
          className="text-hackathon-purple hover:text-hackathon-darkPurple text-sm font-medium"
          onClick={onClick}
        >
          View Team →
        </Button>
      </div>
    </div>
  );
};

export default TeamCard;
