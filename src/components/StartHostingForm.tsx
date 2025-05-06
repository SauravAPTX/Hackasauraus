
import React from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./auth/AuthProvider";
import { format } from "date-fns";
import { Loader2 } from "lucide-react";

const hostingFormSchema = z.object({
  hackathonName: z.string().min(3, {
    message: "Hackathon name must be at least 3 characters.",
  }),
  organization: z.string().min(3, {
    message: "Organization name must be at least 3 characters.",
  }),
  startDate: z.string().min(1, {
    message: "Please select a start date.",
  }),
  endDate: z.string().min(1, {
    message: "Please select an end date.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  theme: z.string().min(1, {
    message: "Please select a theme.",
  }),
  prizePool: z.string().min(1, {
    message: "Please enter a prize pool amount.",
  }),
  visibility: z.enum(["public", "private"]),
});

type HostingFormValues = z.infer<typeof hostingFormSchema>;

const StartHostingForm = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const form = useForm<HostingFormValues>({
    resolver: zodResolver(hostingFormSchema),
    defaultValues: {
      hackathonName: "",
      organization: "",
      startDate: "",
      endDate: "",
      description: "",
      theme: "",
      prizePool: "",
      visibility: "public",
    },
  });

  async function onSubmit(values: HostingFormValues) {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to create a hackathon.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Insert hackathon data into Supabase
      const { data, error } = await supabase.from('hackathons').insert({
        name: values.hackathonName,
        organization: values.organization,
        description: values.description,
        start_date: new Date(values.startDate).toISOString(),
        end_date: new Date(values.endDate).toISOString(),
        theme: values.theme,
        prize_pool: values.prizePool,
        visibility: values.visibility,
        created_by: user.id,
      }).select();

      if (error) {
        throw error;
      }

      toast({
        title: "Hackathon Created!",
        description: `${values.hackathonName} has been created successfully.`,
      });

      // Reset form
      form.reset();
      
      console.log("Created hackathon:", data);
    } catch (error) {
      console.error("Error creating hackathon:", error);
      toast({
        title: "Error Creating Hackathon",
        description: "There was a problem creating your hackathon. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="hackathonName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hackathon Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Tech Innovate 2025" {...field} />
                </FormControl>
                <FormDescription>
                  Give your hackathon a catchy name
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. TechVista Solutions" {...field} />
                </FormControl>
                <FormDescription>
                  The organization hosting this hackathon
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Describe your hackathon's goals, themes, and what participants can expect..." 
                    className="min-h-32" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="theme"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Theme</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a theme" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                    <SelectItem value="sustainable-tech">Sustainable Technology</SelectItem>
                    <SelectItem value="fintech">FinTech</SelectItem>
                    <SelectItem value="healthtech">HealthTech</SelectItem>
                    <SelectItem value="edtech">EdTech</SelectItem>
                    <SelectItem value="open">Open Innovation</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Select the primary theme for your hackathon
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="prizePool"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prize Pool</FormLabel>
                <FormControl>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2">₹</span>
                    <Input className="pl-8" placeholder="e.g. 100,000" {...field} />
                  </div>
                </FormControl>
                <FormDescription>
                  Total prize money to be awarded
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="visibility"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Visibility</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select visibility" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="public">Public - Visible to everyone</SelectItem>
                    <SelectItem value="private">Private - By invitation only</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Control who can see and join your hackathon
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-hackathon-purple hover:bg-hackathon-darkPurple"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating...
              </>
            ) : (
              "Create Hackathon"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default StartHostingForm;
