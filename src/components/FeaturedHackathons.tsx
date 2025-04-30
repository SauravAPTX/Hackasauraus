
import React from 'react';
import { ChevronRight, Medal, Rocket, Code2, Database, Brain } from 'lucide-react';
import { Button } from "@/components/ui/button";
import HackathonCard from './HackathonCard';

const FEATURED_HACKATHONS = [
  {
    id: "1",
    title: "AI Innovation Challenge",
    organizer: "TechCorp India",
    startDate: "Jun 1",
    endDate: "Jun 15",
    participantCount: 500,
    prizeAmount: "₹7,50,000",
    logoUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=128&h=128&fit=crop&auto=format",
    status: "active" as const,
    tags: ["AI", "Machine Learning", "Data Science"]
  },
  {
    id: "2",
    title: "Web3 Development Jam",
    organizer: "Blockchain Alliance India",
    startDate: "Jul 5",
    endDate: "Jul 20",
    participantCount: 350,
    prizeAmount: "₹5,60,000",
    logoUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=128&h=128&fit=crop&auto=format",
    status: "upcoming" as const,
    tags: ["Blockchain", "Web3", "Smart Contracts"]
  },
  {
    id: "3",
    title: "Mobile App Showdown",
    organizer: "DevStars Academy Bengaluru",
    startDate: "May 10",
    endDate: "May 30",
    participantCount: 420,
    prizeAmount: "₹3,75,000",
    logoUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=128&h=128&fit=crop&auto=format",
    status: "ended" as const,
    tags: ["Mobile", "UI/UX", "Flutter", "React Native"]
  },
  {
    id: "4",
    title: "Cloud Solutions Hackathon",
    organizer: "CloudTech India",
    startDate: "Jun 20",
    endDate: "Jul 5",
    participantCount: 280,
    prizeAmount: "₹6,00,000",
    logoUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=128&h=128&fit=crop&auto=format",
    status: "upcoming" as const,
    tags: ["Cloud Computing", "DevOps", "Serverless"]
  }
];

const FeaturedHackathons = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Hackathons</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover the most exciting hackathons from top organizations and universities.
            </p>
          </div>
          <Button variant="ghost" className="mt-4 sm:mt-0 text-hackathon-purple hover:text-hackathon-darkPurple">
            View All
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_HACKATHONS.map(hackathon => (
            <HackathonCard 
              key={hackathon.id} 
              {...hackathon} 
            />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Browse by Category</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              className="h-auto py-6 justify-start border-gray-200 hover:border-hackathon-purple hover:bg-hackathon-purple/5"
            >
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Brain className="h-5 w-5 text-hackathon-purple" />
                </div>
                <div className="text-left">
                  <div className="font-medium">AI & Machine Learning</div>
                  <div className="text-xs text-gray-500">48 hackathons</div>
                </div>
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-auto py-6 justify-start border-gray-200 hover:border-hackathon-purple hover:bg-hackathon-purple/5"
            >
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Database className="h-5 w-5 text-hackathon-purple" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Big Data</div>
                  <div className="text-xs text-gray-500">36 hackathons</div>
                </div>
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-auto py-6 justify-start border-gray-200 hover:border-hackathon-purple hover:bg-hackathon-purple/5"
            >
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Code2 className="h-5 w-5 text-hackathon-purple" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Web Development</div>
                  <div className="text-xs text-gray-500">65 hackathons</div>
                </div>
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-auto py-6 justify-start border-gray-200 hover:border-hackathon-purple hover:bg-hackathon-purple/5"
            >
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Rocket className="h-5 w-5 text-hackathon-purple" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Innovation</div>
                  <div className="text-xs text-gray-500">42 hackathons</div>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHackathons;
