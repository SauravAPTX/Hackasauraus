import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedHackathons from '@/components/FeaturedHackathons';
import Footer from '@/components/Footer';
import { UsersRound, Trophy, Code, Lightbulb, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatsCard from '@/components/StatsCard';
import { Link } from 'react-router-dom';

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
            
            <div className="grid md:grid-cols-4 gap-8 mt-12">
              <Link to="/teams" className="block">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-hackathon-purple transition-all hover:shadow-md">
                  <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                    <UsersRound className="h-6 w-6 text-hackathon-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Find Teams</h3>
                  <p className="text-gray-600 mb-4">Connect with talented developers, designers, and innovators.</p>
                  <span className="text-hackathon-purple font-medium inline-flex items-center">
                    Browse Teams <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </Link>

              <Link to="/projects" className="block">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-hackathon-purple transition-all hover:shadow-md">
                  <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Browse Projects</h3>
                  <p className="text-gray-600 mb-4">Explore innovative solutions created during hackathons.</p>
                  <span className="text-hackathon-purple font-medium inline-flex items-center">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </Link>

              <Link to="/host" className="block">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-hackathon-purple transition-all hover:shadow-md">
                  <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                    <Trophy className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Host a Hackathon</h3>
                  <p className="text-gray-600 mb-4">Create and manage your own hackathon event.</p>
                  <span className="text-hackathon-purple font-medium inline-flex items-center">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </Link>
              
              <Link to="/problem-generator" className="block">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-hackathon-purple transition-all hover:shadow-md">
                  <div className="bg-yellow-100 p-3 rounded-lg w-fit mb-4">
                    <Sparkles className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Problem Generator</h3>
                  <p className="text-gray-600 mb-4">Get inspiration with our problem statement generator.</p>
                  <span className="text-hackathon-purple font-medium inline-flex items-center">
                    Generate Ideas <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </Link>
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
