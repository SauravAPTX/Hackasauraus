
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, Code2, Star, GitFork, Filter, Clock, Award, DollarSign, Briefcase } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("projects");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">Discover Amazing Projects</h1>
              <p className="text-gray-600">Explore innovative solutions, freelance opportunities, and open source projects</p>
            </div>
            
            <Tabs defaultValue="projects" className="w-full" onValueChange={(value) => setActiveTab(value)}>
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="bounties">Freelance Bounties</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
              </TabsList>
              
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder={activeTab === "bounties" ? "Search freelance opportunities..." : "Search projects..."}
                    className="pl-10 w-full"
                  />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Filter className="h-4 w-4" /> Filters
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Most Stars</DropdownMenuItem>
                    <DropdownMenuItem>Recently Updated</DropdownMenuItem>
                    <DropdownMenuItem>Most Forks</DropdownMenuItem>
                    {activeTab === "bounties" && (
                      <>
                        <DropdownMenuItem>Highest Paying</DropdownMenuItem>
                        <DropdownMenuItem>Shortest Deadline</DropdownMenuItem>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <TabsContent value="projects" className="space-y-6">
                {/* Project Cards */}
                <ProjectCard 
                  title="EcoTracker AI"
                  team="Team CodeCrafters"
                  description="An AI-powered platform that helps track and reduce carbon footprint through smart recommendations."
                  stars={128}
                  forks={24}
                  tags={["AI/ML", "React", "Python"]} 
                />
                
                <ProjectCard 
                  title="MediConnect"
                  team="HealthTech Innovators"
                  description="A telemedicine platform connecting rural areas with specialist healthcare providers through low-bandwidth video streaming."
                  stars={96}
                  forks={18}
                  tags={["Healthcare", "WebRTC", "React Native"]} 
                />
                
                <ProjectCard 
                  title="Urban Transit Mapper"
                  team="MobilityHackers"
                  description="Real-time public transportation tracking and route optimization with crowd-sourced data."
                  stars={85}
                  forks={12}
                  tags={["Maps", "Mobile", "IoT"]} 
                />
              </TabsContent>
              
              <TabsContent value="bounties" className="space-y-6">
                <BountyCard 
                  title="Mobile App UI Overhaul"
                  company="GreenTech Solutions"
                  description="Looking for a UI/UX designer to modernize our mobile app interface with focus on accessibility."
                  bounty="$1200"
                  deadline="5 days"
                  tags={["UI/UX", "Mobile", "Figma"]}
                />
                
                <BountyCard 
                  title="API Integration for Payment Gateway"
                  company="FinanceFlow"
                  description="Need a backend developer to integrate our existing platform with multiple payment processors."
                  bounty="$800"
                  deadline="7 days"
                  tags={["Backend", "API", "Payments"]}
                />
                
                <BountyCard 
                  title="Data Visualization Dashboard"
                  company="DataInsights"
                  description="Create an interactive dashboard to visualize complex user analytics data using chart libraries."
                  bounty="$1500"
                  deadline="10 days"
                  tags={["Frontend", "Charts", "Analytics"]}
                />
              </TabsContent>
              
              <TabsContent value="trending" className="space-y-6">
                <ProjectCard 
                  title="AR Navigation Assistant"
                  team="RealityCoders"
                  description="Augmented reality navigation system that overlays directional information on the real world through your phone's camera."
                  stars={342}
                  forks={87}
                  tags={["AR", "Mobile", "Computer Vision"]}
                  trending={true}
                />
                
                <ProjectCard 
                  title="Smart Home Energy Monitor"
                  team="SustainableTech"
                  description="IoT device and companion app for tracking and optimizing home energy usage with AI-powered recommendations."
                  stars={219}
                  forks={43}
                  tags={["IoT", "Energy", "Machine Learning"]}
                  trending={true}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  team: string;
  description: string;
  stars: number;
  forks: number;
  tags: string[];
  trending?: boolean;
}

const ProjectCard = ({ title, team, description, stars, forks, tags, trending }: ProjectCardProps) => {
  return (
    <Card className="hover:border-hackathon-purple transition-colors">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Code2 className="h-5 w-5 text-hackathon-purple" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{title}</h3>
                {trending && (
                  <Badge className="bg-orange-500 hover:bg-orange-600">Trending 🔥</Badge>
                )}
              </div>
              <p className="text-sm text-gray-500">by {team}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-gray-600">{stars}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">{forks}</span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => {
              let bgColor = "bg-purple-100 text-hackathon-purple";
              if (index % 3 === 1) bgColor = "bg-blue-100 text-blue-800";
              if (index % 3 === 2) bgColor = "bg-green-100 text-green-800";
              
              return (
                <span key={index} className={`${bgColor} text-xs px-2 py-1 rounded-full`}>
                  {tag}
                </span>
              );
            })}
          </div>
          <Button variant="ghost" size="sm" className="text-hackathon-purple">
            View Details →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

interface BountyCardProps {
  title: string;
  company: string;
  description: string;
  bounty: string;
  deadline: string;
  tags: string[];
}

const BountyCard = ({ title, company, description, bounty, deadline, tags }: BountyCardProps) => {
  return (
    <Card className="hover:border-hackathon-purple transition-colors">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <Briefcase className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-gray-500">by {company}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-green-700 bg-green-50 px-2 py-1 rounded-md">
              <DollarSign className="h-4 w-4" />
              <span className="text-sm font-medium">{bounty}</span>
            </div>
            <div className="flex items-center gap-1 text-orange-700 bg-orange-50 px-2 py-1 rounded-md">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">{deadline}</span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => {
              let bgColor = "bg-blue-100 text-blue-800";
              if (index % 3 === 1) bgColor = "bg-purple-100 text-hackathon-purple";
              if (index % 3 === 2) bgColor = "bg-teal-100 text-teal-800";
              
              return (
                <span key={index} className={`${bgColor} text-xs px-2 py-1 rounded-full`}>
                  {tag}
                </span>
              );
            })}
          </div>
          <Button variant="ghost" size="sm" className="text-green-700">
            Apply Now →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;

