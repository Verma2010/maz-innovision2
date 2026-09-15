export type PageId = 
  | 'home'
  | 'campus'
  | 'showcase'
  | 'venue'
  | 'events'
  | 'visitor'
  | 'contacts'
  | 'admin';

export type ProjectCategory = 
  | 'All'
  | 'AI & Computational'
  | 'Interactive Web'
  | 'Eco-Tech & IoT'
  | 'Cybersecurity'
  | 'Creative Media';

export interface StudentProject {
  id: string;
  title: string;
  tagline: string;
  category: Exclude<ProjectCategory, 'All'>;
  grade: string;
  leadStudent: string;
  teamMembers: string[];
  mentor: string;
  summary: string;
  fullDescription: string;
  techStack: string[];
  status: 'Ready for Live Demo' | 'Hardware Setup Ready' | 'Interactive Prototype' | 'Beta Testing';
  upvotes: number;
  featured?: boolean;
  boothLocation: string;
  awards?: string[];
  keyFeatures: string[];
}

export interface ExpoEvent {
  id: string;
  time: string;
  title: string;
  speaker: string;
  role: string;
  stage: string;
  category: 'Keynote' | 'Live Demo' | 'Tech Panel' | 'Awards' | 'Workshop';
  description: string;
  status: 'Confirmed' | 'Pending Final Schedule' | 'Registration Open';
}

export interface VenueZone {
  id: string;
  name: string;
  code: string;
  zoneType: string;
  description: string;
  capacity: string;
  highlights: string[];
}

export interface VisitorPass {
  passId: string;
  attendeeName: string;
  email: string;
  ticketType: 'General Public' | 'Student Guest' | 'Parent / Guardian' | 'Industry Observer' | 'Press';
  institution: string;
  registeredDate: string;
}
