
import React, { useState, useCallback } from 'react';
import { useToast } from "@/hooks/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HackathonSearch from '@/components/HackathonSearch';
import HackathonFilters, { FilterStatus, CategoryType } from '@/components/HackathonFilters';
import HackathonCard from '@/components/HackathonCard';
import { Trophy } from 'lucide-react';

const HACKATHONS = [
  {
    id: "1",
    title: "AI Innovation Challenge",
    organizer: "TechCorp",
    startDate: "Jun 1",
    endDate: "Jun 15",
    participantCount: 500,
    prizeAmount: "$10,000",
    logoUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=128&h=128&fit=crop&auto=format",
    status: "active" as const,
    tags: ["AI", "Machine Learning", "Data Science"]
  },
  {
    id: "2",
    title: "Web3 Development Jam",
    organizer: "Blockchain Alliance",
    startDate: "Jul 5",
    endDate: "Jul 20",
    participantCount: 350,
    prizeAmount: "$7,500",
    logoUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=128&h=128&fit=crop&auto=format",
    status: "upcoming" as const,
    tags: ["Blockchain", "Web3", "Smart Contracts"]
  },
  {
    id: "3",
    title: "Cloud Solutions Hackathon",
    organizer: "CloudTech Inc.",
    startDate: "Jun 20",
    endDate: "Jul 5",
    participantCount: 280,
    prizeAmount: "$8,000",
    logoUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=128&h=128&fit=crop&auto=format",
    status: "upcoming" as const,
    tags: ["Cloud Computing", "DevOps", "Serverless"]
  }
];

const FindHackathons = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterStatus>('all');
  const [activeCategory, setActiveCategory] = useState<CategoryType | null>(null);
  const { toast } = useToast();

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleFilterChange = useCallback((filter: FilterStatus) => {
    setActiveFilter(filter);
    toast({
      title: "Filter Updated",
      description: `Showing ${filter} hackathons`,
    });
  }, [toast]);

  const handleCategoryChange = useCallback((category: CategoryType) => {
    setActiveCategory(prevCategory => prevCategory === category ? null : category);
    toast({
      title: "Category Updated",
      description: `Showing ${category} hackathons`,
    });
  }, [toast]);

  const filteredHackathons = HACKATHONS.filter(hackathon => {
    const matchesSearch = hackathon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hackathon.organizer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = activeFilter === 'all' || hackathon.status === activeFilter;
    
    const matchesCategory = !activeCategory || hackathon.tags.some(tag => 
      tag.toLowerCase() === activeCategory.toLowerCase()
    );

    return matchesSearch && matchesFilter && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <div className="bg-gradient-to-r from-hackathon-purple to-hackathon-blue py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h1 className="text-3xl font-bold mb-4">Find Your Next Hackathon</h1>
              <p className="text-lg opacity-90">
                Browse through hundreds of hackathons and find the perfect one to showcase your skills.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <HackathonFilters
                activeFilter={activeFilter}
                activeCategory={activeCategory}
                onFilterChange={handleFilterChange}
                onCategoryChange={handleCategoryChange}
              />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <HackathonSearch onSearch={handleSearch} />
              </div>

              {filteredHackathons.length === 0 ? (
                <div className="text-center py-12">
                  <Trophy className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No hackathons found</h3>
                  <p className="text-gray-500">Try adjusting your search or filters</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredHackathons.map((hackathon) => (
                    <HackathonCard key={hackathon.id} {...hackathon} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FindHackathons;
