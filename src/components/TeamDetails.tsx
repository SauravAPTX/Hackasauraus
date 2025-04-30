
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Code, MessageSquare, Calendar, CheckCircle2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  initial: string;
};

type TeamDetailsProps = {
  teamId: string;
  teamName: string;
  description: string;
  lookingFor: string[];
  members: TeamMember[];
  skills: string[];
  onClose: () => void;
};

const TeamDetails: React.FC<TeamDetailsProps> = ({
  teamId,
  teamName,
  description,
  lookingFor,
  members,
  skills,
  onClose,
}) => {
  const { toast } = useToast();

  const handleJoinRequest = () => {
    toast({
      title: "Request Sent",
      description: `Your request to join ${teamName} has been sent.`,
    });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="h-6 w-6 text-hackathon-purple" />
            </div>
            <div>
              <CardTitle className="text-2xl">{teamName}</CardTitle>
              <CardDescription>{lookingFor.length > 0 ? `Looking for: ${lookingFor.join(", ")}` : "Team complete"}</CardDescription>
            </div>
          </div>
          <Badge variant={lookingFor.length > 0 ? "success" : "outline"}>
            {lookingFor.length > 0 ? "Open" : "Closed"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="about">
          <TabsList className="mb-4">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="skills">Required Skills</TabsTrigger>
          </TabsList>
          <TabsContent value="about" className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Team Description</h3>
              <p className="text-gray-600">{description}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Current Project</h3>
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-4 w-4 text-hackathon-purple" />
                  <h4 className="font-medium">AI-powered Educational Platform</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  We're building an educational platform that uses AI to personalize learning experiences for students in India.
                </p>
                <div className="mt-3 flex gap-2">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    Education
                  </Badge>
                  <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                    AI/ML
                  </Badge>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Team Activity</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Response rate: within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Formed: 2 months ago</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Completed projects: 2</span>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="members" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {members.map((member) => (
                <div key={member.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-md border border-gray-200">
                  <Avatar className="h-10 w-10 bg-hackathon-purple text-white">
                    <span>{member.initial}</span>
                  </Avatar>
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="skills" className="space-y-4">
            {lookingFor.length > 0 ? (
              <div>
                <h3 className="font-semibold text-lg mb-3">Looking for these skills:</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-50 py-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-600">This team is not currently looking for new members.</p>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button variant="outline" onClick={onClose}>
          Back
        </Button>
        {lookingFor.length > 0 && (
          <Button onClick={handleJoinRequest}>Request to Join</Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default TeamDetails;
