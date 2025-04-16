
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Users, Code2 } from 'lucide-react';

export type FilterStatus = 'all' | 'active' | 'upcoming' | 'past';
export type CategoryType = 'AI & ML' | 'Web3' | 'Mobile' | 'Cloud';

interface HackathonFiltersProps {
  activeFilter: FilterStatus;
  activeCategory: CategoryType | null;
  onFilterChange: (filter: FilterStatus) => void;
  onCategoryChange: (category: CategoryType) => void;
}

const filters: { label: string; value: FilterStatus }[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Upcoming', value: 'upcoming' },
  { label: 'Past', value: 'past' },
];

const categories = [
  { name: 'AI & ML' as CategoryType, icon: Code2, count: 48 },
  { name: 'Web3' as CategoryType, icon: Trophy, count: 36 },
  { name: 'Mobile' as CategoryType, icon: Users, count: 24 },
  { name: 'Cloud' as CategoryType, icon: Calendar, count: 42 },
];

const HackathonFilters: React.FC<HackathonFiltersProps> = ({
  activeFilter,
  activeCategory,
  onFilterChange,
  onCategoryChange,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Badge
            key={filter.value}
            variant={filter.value === activeFilter ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => onFilterChange(filter.value)}
          >
            {filter.label}
          </Badge>
        ))}
      </div>

      <div className="space-y-2">
        <h3 className="font-medium text-sm text-gray-700">Categories</h3>
        <div className="grid grid-cols-1 gap-2">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="outline"
              className={`justify-start h-auto py-3 px-4 border-gray-200 ${
                category.name === activeCategory
                  ? "border-hackathon-purple bg-hackathon-purple/5"
                  : "hover:border-hackathon-purple hover:bg-hackathon-purple/5"
              }`}
              onClick={() => onCategoryChange(category.name)}
            >
              <div className="flex items-center w-full">
                <div className="bg-purple-100 p-2 rounded-lg mr-3">
                  <category.icon className="h-4 w-4 text-hackathon-purple" />
                </div>
                <div className="flex-grow text-left">
                  <span className="text-sm font-medium">{category.name}</span>
                </div>
                <Badge variant="secondary" className="ml-auto">
                  {category.count}
                </Badge>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HackathonFilters;
