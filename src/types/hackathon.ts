
export interface Hackathon {
  id: string;
  name: string;
  organization: string;
  description: string;
  start_date: string;
  end_date: string;
  theme: string;
  prize_pool: string;
  visibility: 'public' | 'private';
  status: 'upcoming' | 'active' | 'completed';
  created_at: string;
  created_by: string;
}

export interface Team {
  id: string;
  name: string;
  description: string | null;
  hackathon_id: string;
  created_at: string;
  created_by: string;
}

export interface TeamMember {
  id: string;
  team_id: string;
  user_id: string;
  role: 'leader' | 'member';
  joined_at: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  team_id: string;
  hackathon_id: string;
  github_url: string | null;
  demo_url: string | null;
  submitted_at: string;
}
