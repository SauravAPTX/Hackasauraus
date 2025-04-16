
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, Code2, Star, GitFork } from 'lucide-react';
import { Input } from "@/components/ui/input";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">Discover Amazing Projects</h1>
              <p className="text-gray-600">Explore innovative solutions created during hackathons</p>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search projects..."
                className="pl-10 w-full"
              />
            </div>

            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-hackathon-purple transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Code2 className="h-5 w-5 text-hackathon-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold">EcoTracker AI</h3>
                      <p className="text-sm text-gray-500">by Team CodeCrafters</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm text-gray-600">128</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">24</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  An AI-powered platform that helps track and reduce carbon footprint through smart recommendations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-hackathon-purple text-xs px-2 py-1 rounded-full">AI/ML</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">React</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
