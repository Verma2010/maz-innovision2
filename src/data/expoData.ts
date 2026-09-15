import { ExpoEvent, VenueZone } from '../types';

export const EXPO_FACTS = {
  venue: 'Strand Mall, Kota Damansara',
  address: '46-G, Jalan PJU 5/22, Encorp Strand, Pusat Perdagangan Kota Damansara, 47810 Petaling Jaya, Selangor',
  organizer: 'PJ Campus Student Cohort & Central Task Force',
  mentor: 'Miss Anjali (Secondary Computer Science Teacher)',
  totalProjects: 24,
  activeBooths: 18,
  expectedVisitors: '1,200+',
  entryFee: 'Free Admission (Registration Required via EntryEnablers)',
  currentStatus: 'Official Schedule & Keynote Timing Under Final Review',
};

export const EXPO_SCHEDULE: ExpoEvent[] = [
  {
    id: 'event-01',
    time: '09:30 AM – 10:15 AM',
    title: 'Inauguration & Welcome Keynote',
    speaker: 'Secondary Head of School & Student Leadership Council',
    role: 'Keynote Address',
    stage: 'Main Grand Atrium Stage (Ground Floor)',
    category: 'Keynote',
    description: 'Welcome speech welcoming students, parents, faculty, and industry partners. Overview of the InnoVision ethos: fostering student autonomy and engineering excellence.',
    status: 'Confirmed',
  },
  {
    id: 'event-02',
    time: '10:30 AM – 12:00 PM',
    title: 'Interactive Project Exhibition & Live Code Walkthroughs',
    speaker: 'PJ Campus Student Innovators & Project Leads',
    role: 'Live Demonstration Sessions',
    stage: 'Pavilions A, B & Green Tech Alley',
    category: 'Live Demo',
    description: 'Hands-on interactive demonstrations across 18 specialized booths. Visitors can interact directly with AI models, IoT sensor rigs, and WebXR navigation prototypes.',
    status: 'Confirmed',
  },
  {
    id: 'event-03',
    time: '01:30 PM – 02:45 PM',
    title: 'Student Tech Panel: "Engineering in Secondary Education"',
    speaker: 'Central Task Force Leads & Miss Anjali (Faculty Advisor)',
    role: 'Moderated Q&A Panel',
    stage: 'Auditorium Hall B',
    category: 'Tech Panel',
    description: 'An open forum discussion exploring how secondary students overcome real-world hardware limits, debug complex microservices, and design user-centric interfaces.',
    status: 'Confirmed',
  },
  {
    id: 'event-04',
    time: '03:15 PM – 04:30 PM',
    title: 'Hands-on Youth Robotics & Coding Micro-Workshop',
    speaker: 'Junior CS Guild & Student Instructors',
    role: 'Interactive Workshop',
    stage: 'Maker Lab Studio (First Floor)',
    category: 'Workshop',
    description: 'A 45-minute interactive coding sprint for primary and junior students, teaching the fundamentals of sensor logic, logic gates, and web building blocks.',
    status: 'Registration Open',
  },
  {
    id: 'event-05',
    time: '05:00 PM – 06:00 PM',
    title: 'Awards Ceremony & InnoVision Closing Showcase',
    speaker: 'Distinguished Guest Judges & Faculty Panel',
    role: 'Ceremony & Presentation',
    stage: 'Main Grand Atrium Stage',
    category: 'Awards',
    description: 'Presentation of the Best Technical Innovation, People’s Choice Award, Eco-Tech Trophy, and Faculty Commendation Certificates, followed by closing remarks.',
    status: 'Confirmed',
  },
];

export const VENUE_ZONES: VenueZone[] = [
  {
    id: 'zone-atrium',
    name: 'Main Grand Atrium (Ground Floor)',
    code: 'GA-01',
    zoneType: 'Exhibition & Keynotes',
    description: 'The open central exhibition hall featuring the main stage, keynote visual LED wall, and flagship AI & web innovation booths.',
    capacity: '400+ attendees',
    highlights: ['Keynote Stage & 4K LED Screen', 'AI & Computational Pavilion', 'Interactive Information Concierge'],
  },
  {
    id: 'zone-maker',
    name: 'Robotics & Green Tech Alley',
    code: 'GT-02',
    zoneType: 'Hardware & Prototyping',
    description: 'Dedicated high-voltage testing zone equipped for live robotics arenas, IoT telemetry stations, and automated hydroponic rigs.',
    capacity: '250+ attendees',
    highlights: ['Automated Waste Sorter Arena', 'Micro-Hydroponic Live Rigs', 'Hardware Diagnostics Workbench'],
  },
  {
    id: 'zone-cyber',
    name: 'Cybersecurity & Web Engineering Lab',
    code: 'CW-03',
    zoneType: 'Digital Sandboxes',
    description: 'Interactive touchscreen stations where visitors can test phishing simulators, WebXR browser guides, and cryptographic verification ledgers.',
    capacity: '150+ attendees',
    highlights: ['Gamified Phishing Defense Terminal', 'WebXR Wayfinding Testing Bay', 'Digital Certificate Verification'],
  },
  {
    id: 'zone-registration',
    name: 'EntryEnablers Registration & Help Desk',
    code: 'EE-04',
    zoneType: 'Access Control & Concierge',
    description: 'Located at the primary Strand Mall main entrance. Handled directly by the student EntryEnablers team for badge issuance and badge scanning.',
    capacity: 'Rapid throughput',
    highlights: ['Digital QR Badge Scanning', 'Printed Expo Guide Booklets', 'Visitor Information Assistance'],
  },
];

export const FAQS = [
  {
    question: 'Is entry to the MAZ InnoVision Digital Expo free?',
    answer: 'Yes! Admission is completely free for all students, parents, educators, and the general public. However, you must register a digital visitor pass through the EntryEnablers portal (or at the front desk) to receive your badge.',
    category: 'General',
  },
  {
    question: 'Where exactly inside Strand Mall is the expo located?',
    answer: 'The expo spans the Ground Floor Central Atrium (main stage and software booths) and the 1st Floor Maker Alley (robotics and IoT displays). Signage and our student-built StrandNav AR app will guide you from all mall entrances.',
    category: 'Venue',
  },
  {
    question: 'What is the role of Miss Anjali and the student organizers?',
    answer: 'Miss Anjali is the Secondary Computer Science Teacher providing strategic faculty guidance and pedagogical mentorship. The expo itself—from the software architecture to booth coordination and web systems—is conceived and executed entirely by the student cohort.',
    category: 'Organization',
  },
  {
    question: 'Can visitors interact with and test the student projects?',
    answer: 'Absolutely! Every single booth is designed for hands-on visitor participation. You can interact with the live AI assistants, trigger the sorting mechanics on the robotics bins, test your cyber awareness, and cast your vote for the People\'s Choice Award.',
    category: 'Exhibits',
  },
  {
    question: 'Where can I park at Strand Mall?',
    answer: 'Strand Mall features dedicated multi-level basement parking (B1 & B2) with direct elevator and escalator access to the Ground Floor Central Atrium. Touch \'n Go and cashless payment terminals are supported at all barriers.',
    category: 'Venue',
  },
];
