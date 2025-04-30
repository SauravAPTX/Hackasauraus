
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
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const educationalFormSchema = z.object({
  institutionName: z.string().min(3, {
    message: "Institution name must be at least 3 characters.",
  }),
  contactPerson: z.string().min(3, {
    message: "Contact person name is required.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  institutionType: z.string().min(1, {
    message: "Please select an institution type.",
  }),
  studentsCount: z.string().min(1, {
    message: "Please enter the approximate number of participants.",
  }),
  requirements: z.string().min(10, {
    message: "Please provide at least a brief description of your requirements.",
  }),
  mentorshipRequired: z.boolean().default(false),
  workshopsRequired: z.boolean().default(false),
  resourcesRequired: z.boolean().default(false),
});

type EducationalFormValues = z.infer<typeof educationalFormSchema>;

const EducationalProgramForm = () => {
  const { toast } = useToast();
  
  const form = useForm<EducationalFormValues>({
    resolver: zodResolver(educationalFormSchema),
    defaultValues: {
      institutionName: "",
      contactPerson: "",
      email: "",
      phone: "",
      institutionType: "",
      studentsCount: "",
      requirements: "",
      mentorshipRequired: false,
      workshopsRequired: false,
      resourcesRequired: false,
    },
  });

  function onSubmit(values: EducationalFormValues) {
    console.log(values);
    toast({
      title: "Request Submitted!",
      description: "We'll contact you soon to discuss the educational program.",
    });
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="institutionName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Institution Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Delhi Technical University" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="contactPerson"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Person</FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="institutionType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Institution Type</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. University, School, College" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="contact@institution.edu" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+91 98765 43210" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="studentsCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expected Number of Participants</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. 50-100" {...field} />
                </FormControl>
                <FormDescription>
                  Approximate number of students who will participate
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="requirements"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Program Requirements</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Please describe what you're looking for in an educational hackathon program..." 
                    className="min-h-28" 
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  Include details about your goals, timeline, and any specific requirements
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="space-y-4">
            <h3 className="font-medium text-sm text-gray-700">Additional Services Required</h3>
            
            <FormField
              control={form.control}
              name="mentorshipRequired"
              render={({ field }) => (
                <FormItem className="flex items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox 
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Industry Mentorship</FormLabel>
                    <FormDescription>
                      Connect students with industry professionals
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="workshopsRequired"
              render={({ field }) => (
                <FormItem className="flex items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox 
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Pre-Hackathon Workshops</FormLabel>
                    <FormDescription>
                      Training sessions to prepare participants
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="resourcesRequired"
              render={({ field }) => (
                <FormItem className="flex items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox 
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Learning Resources</FormLabel>
                    <FormDescription>
                      Access to tutorials, documentation, and learning materials
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </div>
          
          <Button type="submit" variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
            Submit Request
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EducationalProgramForm;
