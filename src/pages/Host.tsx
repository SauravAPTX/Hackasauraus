
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Trophy, Users, Calendar, Code2, Rocket, GraduationCap, ArrowLeft } from 'lucide-react';
import StartHostingForm from '@/components/StartHostingForm';
import EducationalProgramForm from '@/components/EducationalProgramForm';

const Host = () => {
  const [activeView, setActiveView] = useState<'main' | 'hosting' | 'educational'>('main');

  const renderContent = () => {
    switch (activeView) {
      case 'hosting':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setActiveView('main')}
                className="flex items-center gap-1"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <h2 className="text-2xl font-bold">Start Hosting Your Hackathon</h2>
            </div>
            <p className="text-gray-600 max-w-2xl">
              Fill out the form below to create your hackathon. Our team will review your submission and help you set up everything you need.
            </p>
            <StartHostingForm />
          </div>
        );
      case 'educational':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setActiveView('main')}
                className="flex items-center gap-1"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <h2 className="text-2xl font-bold">Educational Program Request</h2>
            </div>
            <p className="text-gray-600 max-w-2xl">
              Our educational program is designed for schools, colleges, and universities looking to bring hackathon experiences to their students.
            </p>
            <EducationalProgramForm />
          </div>
        );
      default:
        return (
          <>
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">Host Your Hackathon</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Create an engaging hackathon experience for participants worldwide. Our platform provides all the tools you need.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold mb-6">For Organizations</h2>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Trophy className="h-4 w-4 text-hackathon-purple" />
                    </div>
                    <span className="text-gray-600">Custom branding and themes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Users className="h-4 w-4 text-hackathon-purple" />
                    </div>
                    <span className="text-gray-600">Participant management tools</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Calendar className="h-4 w-4 text-hackathon-purple" />
                    </div>
                    <span className="text-gray-600">Scheduling and timeline tools</span>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-hackathon-purple hover:bg-hackathon-darkPurple"
                  onClick={() => setActiveView('hosting')}
                >
                  <Rocket className="mr-2 h-4 w-4" />
                  Start Hosting
                </Button>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold mb-6">For Educational Institutions</h2>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Code2 className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-600">Student-friendly interface</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-600">Team formation assistance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Trophy className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-600">Learning-focused features</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                  onClick={() => setActiveView('educational')}
                >
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Educational Program
                </Button>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {renderContent()}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Host;
