
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import TeamCard from '@/components/TeamCard';
import TeamDetails from '@/components/TeamDetails';

// Mock data for teams
const teamsData = [
  {
    id: '1',
    name: 'Team CodeCrafters',
    lookingFor: 'Looking for UI/UX Designer',
    description: "We're building an AI-powered educational platform and need a creative designer to join our team.",
    members: [
      { id: '1', name: 'Arjun Sharma', role: 'Full Stack Developer', initial: 'A' },
      { id: '2', name: 'Priya Patel', role: 'ML Engineer', initial: 'P' },
      { id: '3', name: 'Vikram Singh', role: 'Backend Developer', initial: 'V' }
    ],
    skills: ['UI/UX Design', 'Figma', 'User Research', 'Interaction Design'],
    isOpen: true,
  },
  {
    id: '2',
    name: 'TechMindz',
    lookingFor: 'Looking for Backend Developer',
    description: "Working on a fintech solution for small businesses in India. Need someone with Node.js and MongoDB experience.",
    members: [
      { id: '4', name: 'Neha Gupta', role: 'Project Manager', initial: 'N' },
      { id: '5', name: 'Rahul Kumar', role: 'Frontend Developer', initial: 'R' }
    ],
    skills: ['Node.js', 'MongoDB', 'Express', 'API Development'],
    isOpen: true,
  },
  {
    id: '3',
    name: 'GreenTech Solutions',
    lookingFor: 'Looking for Mobile Developer',
    description: "Developing an app to track and reduce carbon footprint for Indian households and small businesses.",
    members: [
      { id: '6', name: 'Ananya Desai', role: 'UI Designer', initial: 'A' },
      { id: '7', name: 'Karan Malhotra', role: 'Backend Developer', initial: 'K' },
      { id: '8', name: 'Sanjana Roy', role: 'Product Manager', initial: 'S' }
    ],
    skills: ['React Native', 'Flutter', 'Mobile UI Design'],
    isOpen: true,
  }
];

const Teams = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredTeams = teamsData.filter(team => 
    team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    team.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    team.lookingFor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedTeamData = teamsData.find(team => team.id === selectedTeam);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {selectedTeam ? (
              <TeamDetails 
                teamId={selectedTeamData?.id || ''}
                teamName={selectedTeamData?.name || ''}
                description={selectedTeamData?.description || ''}
                lookingFor={selectedTeamData?.isOpen ? [selectedTeamData.lookingFor.replace('Looking for ', '')] : []}
                members={selectedTeamData?.members || []}
                skills={selectedTeamData?.skills || []}
                onClose={() => setSelectedTeam(null)}
              />
            ) : (
              <>
                <div className="text-center space-y-4">
                  <h1 className="text-4xl font-bold">Find Your Dream Team</h1>
                  <p className="text-gray-600">Connect with talented developers, designers, and innovators.</p>
                </div>
                
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search for teams or members..."
                    className="pl-10 w-full"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                </div>

                <div className="grid gap-6">
                  {filteredTeams.map(team => (
                    <TeamCard
                      key={team.id}
                      id={team.id}
                      name={team.name}
                      lookingFor={team.lookingFor}
                      description={team.description}
                      members={team.members}
                      isOpen={team.isOpen}
                      onClick={() => setSelectedTeam(team.id)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Teams;
