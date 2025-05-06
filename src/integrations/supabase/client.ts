
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xdjnbygdqhpizhsmczqm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhkam5ieWdkcWhwaXpoc21jenFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwNTExMDMsImV4cCI6MjA2MDYyNzEwM30.XqsjTvKYosWFlFpxuIBWGRil1CCuO2noc1-RHyg5VEQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
