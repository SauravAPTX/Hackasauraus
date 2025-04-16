
import React, { ReactNode } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  description?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  icon, 
  trend, 
  description 
}) => {
  return (
    <Card className="overflow-hidden border-gray-200 hover:border-hackathon-purple/30 transition-all">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <div className="bg-purple-100 p-2 rounded-lg">
            {icon}
          </div>
        </div>
        
        <div className="flex items-end space-x-1 mb-1">
          <div className="text-2xl font-bold">{value}</div>
          
          {trend && (
            <div className={`flex items-center text-xs pb-1 ${
              trend.isPositive ? 'text-green-600' : 'text-red-600'
            }`}>
              <span className="mr-1">
                {trend.isPositive ? '↑' : '↓'}
              </span>
              <span>{Math.abs(trend.value)}%</span>
            </div>
          )}
        </div>
        
        {description && (
          <p className="text-xs text-gray-500">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;
