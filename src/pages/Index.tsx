
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedHackathons from '@/components/FeaturedHackathons';
import Footer from '@/components/Footer';
import { UsersRound, Trophy, Code, Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatsCard from '@/components/StatsCard';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose HackCollab?</h2>
              <p className="text-gray-600">
                Our platform provides everything you need to discover hackathons, form teams, collaborate on projects, and showcase your skills.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <StatsCard
                title="Registered Users"
                value="10,000+"
                icon={<UsersRound className="h-5 w-5 text-hackathon-purple" />}
                trend={{ value: 12, isPositive: true }}
                description="Active developers, designers, and innovators"
              />
              
              <StatsCard
                title="Hackathons Hosted"
                value="500+"
                icon={<Trophy className="h-5 w-5 text-hackathon-purple" />}
                trend={{ value: 8, isPositive: true }}
                description="From startups to Fortune 500 companies"
              />
              
              <StatsCard
                title="Projects Submitted"
                value="2,300+"
                icon={<Code className="h-5 w-5 text-hackathon-purple" />}
                trend={{ value: 15, isPositive: true }}
                description="Innovative solutions across various domains"
              />
              
              <StatsCard
                title="Success Rate"
                value="87%"
                icon={<Lightbulb className="h-5 w-5 text-hackathon-purple" />}
                description="Teams successfully completing their projects"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-2">
                    For Participants
                  </div>
                  <h3 className="text-xl font-bold mb-3">Join Exciting Hackathons</h3>
                  <p className="text-gray-600 mb-4">
                    Discover hackathons that match your skills and interests, form teams with like-minded individuals, and build amazing projects.
                  </p>
                  <ul className="space-y-2">
                    {['Find hackathons based on skills', 'Connect with team members', 'Access problem statements and resources', 'Submit and showcase projects'].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                          <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="bg-hackathon-purple hover:bg-hackathon-darkPurple text-white w-full">
                  Find a Hackathon
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-2">
                    For Organizers
                  </div>
                  <h3 className="text-xl font-bold mb-3">Host Your Own Hackathon</h3>
                  <p className="text-gray-600 mb-4">
                    Launch your hackathon effortlessly with our comprehensive platform, manage participants, and evaluate submissions.
                  </p>
                  <ul className="space-y-2">
                    {['Easy hackathon setup and management', 'Customizable problem statements', 'Real-time analytics and insights', 'Judging and evaluation tools'].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                          <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="bg-hackathon-blue hover:bg-hackathon-darkBlue text-white w-full">
                  Host a Hackathon
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <FeaturedHackathons />
        
        <section className="py-16 bg-gradient-to-r from-hackathon-purple to-hackathon-blue text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Hackathon Journey?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Join thousands of innovators and problem-solvers on HackCollab. Whether you're looking to participate or host a hackathon, we've got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-hackathon-purple hover:bg-gray-100">
                Register Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
