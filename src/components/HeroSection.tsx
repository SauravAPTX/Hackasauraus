
import React from 'react';
import { Button } from "@/components/ui/button";
import { PenTool, Users, Trophy, ChevronRight, Code } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-hackathon-purple">
              <Trophy className="h-4 w-4 mr-2" />
              <span>500+ Hackathons Hosted</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="block">Where Ideas</span>
              <span className="block gradient-text">Come to Life</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Discover hackathons, form teams, collaborate on projects, and showcase your skills to the world.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-hackathon-purple hover:bg-hackathon-darkPurple text-white">
                Find Hackathons
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Host a Hackathon
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-hackathon-purple">10K+</div>
                <div className="text-sm text-gray-600">Developers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-hackathon-purple">500+</div>
                <div className="text-sm text-gray-600">Hackathons</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-hackathon-purple">2K+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Graphics */}
          <div className="relative">
            <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-hackathon-lightPurple/20 rounded-full filter blur-3xl"></div>
            
            <div className="relative z-10 bg-white rounded-xl shadow-xl p-6 border border-gray-100 animate-float">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-hackathon-purple text-white p-2 rounded-lg">
                    <Code className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold">Summer Code Jam</h3>
                    <p className="text-xs text-gray-500">Hosted by TechCorp</p>
                  </div>
                </div>
                <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Active</div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">Submissions</span>
                    <span className="font-medium">76%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-hackathon-purple h-1.5 rounded-full" style={{ width: "76%" }}></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-gray-400 mr-1" />
                    <span>243 Participants</span>
                  </div>
                  <div className="flex items-center">
                    <PenTool className="h-4 w-4 text-gray-400 mr-1" />
                    <span>56 Projects</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex -space-x-2 overflow-hidden">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="inline-block h-8 w-8 rounded-full bg-hackathon-purple/80 text-white text-xs flex items-center justify-center border-2 border-white">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                    <div className="inline-block h-8 w-8 rounded-full bg-gray-200 text-gray-600 text-xs flex items-center justify-center border-2 border-white">
                      +28
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block absolute -bottom-10 left-10 z-0 bg-white rounded-lg shadow-lg p-4 border border-gray-100 w-60 animate-pulse-slow">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 text-green-800 p-2 rounded-md">
                  <Trophy className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">First Place 🎉</h4>
                  <p className="text-xs text-gray-500">Team CodeCrafters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
