
import React, { useState, useCallback } from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface HackathonSearchProps {
  onSearch: (query: string) => void;
}

const HackathonSearch: React.FC<HackathonSearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  }, [onSearch]);

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      <Input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search hackathons..."
        className="pl-10 w-full"
      />
    </div>
  );
};

export default HackathonSearch;
