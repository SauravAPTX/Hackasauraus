
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";

const Teams = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto space-y-8">
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
              />
            </div>

            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-hackathon-purple transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Users className="h-5 w-5 text-hackathon-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Team CodeCrafters</h3>
                      <p className="text-sm text-gray-500">Looking for UI/UX Designer</p>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Open</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  We're building an AI-powered educational platform and need a creative designer to join our team.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full bg-hackathon-purple text-white flex items-center justify-center text-sm border-2 border-white"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <button className="text-hackathon-purple hover:text-hackathon-darkPurple text-sm font-medium">
                    View Team →
                  </button>
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

export default Teams;
