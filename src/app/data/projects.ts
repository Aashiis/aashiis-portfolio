export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Brihat Patro – Flutter App",
    description: "A popular Nepali calendar and event app with a user-friendly UI and dynamic daily panchanga. Features include date conversion, notifications, and Firebase backend. Built for a client.",
    tags: ["Flutter", "Firebase", "Play Store"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.nepaliyogi.brihatpatro",
  },
  {
    title: "Full-Stack E-Commerce Website",
    description: "A full-featured web shop with user login, product browsing, cart, and payment simulation. Includes an admin dashboard for product management and order tracking.",
    tags: ["Next.js", "Django", "DRF", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/aashiis", // Replace with actual repo link if available
  },
  {
    title: "Video Calling + Chat App",
    description: "A complete WhatsApp-like app with 1-to-1 video calls, real-time messaging, and presence tracking. Used WebRTC and Django Channels for live communication.",
    tags: ["Next.js", "Django", "WebRTC", "WebSocket", "PostgreSQL"],
    githubUrl: "https://github.com/aashiis", // Replace with actual repo link
  },
  {
    title: "Course Selling Website",
    description: "A modern e-learning platform featuring secure login, course previews, video streaming, and payment processing. Includes an intuitive admin dashboard.",
    tags: ["Next.js", "Django", "PostgreSQL", "Stripe API"],
    githubUrl: "https://github.com/aashiis", // Replace with actual repo link
  },
    {
    title: "School Management System",
    description: "A web platform for student records, attendance, grading, and fee management. Included role-based access for admin, teachers, and parents.",
    tags: ["Django", "Next.js", "PostgreSQL"],
    githubUrl: "https://github.com/aashiis", // Replace with actual repo link
  },
];