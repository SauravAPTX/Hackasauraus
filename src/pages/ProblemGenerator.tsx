
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { RefreshCw, CheckCircle, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import type { ProblemStatement } from '@/types/hackathon';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const ProblemGenerator = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [currentProblem, setCurrentProblem] = useState<ProblemStatement | null>(null);

  // Fetch all problem statements
  const { data: problems, isLoading, error, refetch } = useQuery({
    queryKey: ['problemStatements'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('problem_statements')
        .select('*');
      
      if (error) throw error;
      return data as ProblemStatement[];
    },
  });

  // Fetch all available categories
  const categories = problems ? [...new Set(problems.map(p => p.category).filter(Boolean))] : [];
  
  // Generate a random problem statement based on filters
  const generateProblem = () => {
    if (!problems || problems.length === 0) {
      toast.error("No problem statements available");
      return;
    }
    
    let filteredProblems = [...problems];
    
    if (selectedCategory) {
      filteredProblems = filteredProblems.filter(p => p.category === selectedCategory);
    }
    
    if (selectedDifficulty) {
      filteredProblems = filteredProblems.filter(p => p.difficulty === selectedDifficulty);
    }
    
    if (filteredProblems.length === 0) {
      toast.error("No problems match your filters");
      return;
    }
    
    const randomIndex = Math.floor(Math.random() * filteredProblems.length);
    setCurrentProblem(filteredProblems[randomIndex]);
    toast.success("Generated a new problem statement!");
  };
  
  // Copy problem statement to clipboard
  const copyToClipboard = () => {
    if (currentProblem) {
      navigator.clipboard.writeText(currentProblem.statement);
      toast.success("Copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-4">Hackathon Problem Generator</h1>
              <p className="text-gray-600">
                Need inspiration for your hackathon? Use our problem statement generator to 
                discover interesting challenges to solve.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="w-full sm:w-1/2">
                  <label className="block mb-2 text-sm font-medium">Category</label>
                  <Select
                    value={selectedCategory || ""}
                    onValueChange={(value) => setSelectedCategory(value || null)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="w-full sm:w-1/2">
                  <label className="block mb-2 text-sm font-medium">Difficulty</label>
                  <Select
                    value={selectedDifficulty || ""}
                    onValueChange={(value) => setSelectedDifficulty(value || null)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All difficulties" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All difficulties</SelectItem>
                      <SelectItem value="easy">Easy</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="hard">Hard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button 
                onClick={generateProblem}
                className="w-full bg-hackathon-purple hover:bg-hackathon-darkPurple"
                disabled={isLoading}
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Generate Problem Statement
              </Button>
            </div>
            
            {error && (
              <div className="bg-red-50 p-4 rounded-md text-red-800">
                Error loading problem statements. Please try again later.
              </div>
            )}
            
            {currentProblem && (
              <Card>
                <CardHeader>
                  <CardTitle>Problem Statement</CardTitle>
                  <CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {currentProblem.category && (
                        <Badge variant="outline" className="bg-purple-50">
                          {currentProblem.category}
                        </Badge>
                      )}
                      {currentProblem.difficulty && (
                        <Badge variant="outline" className={`
                          ${currentProblem.difficulty === 'easy' ? 'bg-green-50 text-green-700' : 
                            currentProblem.difficulty === 'medium' ? 'bg-yellow-50 text-yellow-700' : 
                            'bg-red-50 text-red-700'}
                        `}>
                          {currentProblem.difficulty.charAt(0).toUpperCase() + currentProblem.difficulty.slice(1)}
                        </Badge>
                      )}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">{currentProblem.statement}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" onClick={copyToClipboard}>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Copy to Clipboard
                  </Button>
                </CardFooter>
              </Card>
            )}
            
            {!currentProblem && !isLoading && (
              <div className="text-center p-8 border border-dashed border-gray-300 rounded-lg">
                <Filter className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                <h3 className="text-lg font-medium text-gray-600 mb-1">No Problem Generated Yet</h3>
                <p className="text-gray-500">
                  Click the generate button to get a random problem statement
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProblemGenerator;
