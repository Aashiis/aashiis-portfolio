import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me | Prakash BK (Aashis)",
    description: "Learn more about Prakash BK, his skills, experience as a freelance developer, and his educational background.",
};

export default function AboutPage() {
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6">About Me</h1>
        <div className="prose prose-invert prose-lg text-slate-300 max-w-none">
          <p>
            I am a highly motivated and self-driven full-stack developer and mobile app engineer with over 3 years of experience in building scalable web and mobile applications. My expertise lies in Flutter, Next.js, and Django, and I have a proven track record of creating real-world projects from scratch.
          </p>
          <p>
            My passion for technology extends beyond just coding. I am deeply interested in creating systems with clean, maintainable architecture and crafting user interfaces that are both beautiful and intuitive. I believe technology should be impactful and solve real problems, which is the driving force behind all my personal and professional projects.
          </p>
          
          <h2 className="text-2xl font-bold text-cyan-400 mt-10 border-b border-slate-700 pb-2">Experience</h2>
          <h3 className="text-xl font-semibold text-white mt-4">Freelance Developer / Personal Projects</h3>
          <p className="text-sm text-slate-400">Remote | 2022 – Present</p>
          <ul className="list-disc pl-5">
            <li>Built and published multiple apps on the Play Store using Flutter & Native Android, including the popular Brihat Patro.</li>
            <li>Designed and delivered complete full-stack web platforms for individual clients and student organizations.</li>
            <li>Successfully created a working video call application with real-time messaging from the ground up, demonstrating strong skills in WebRTC and WebSockets.</li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 mt-10 border-b border-slate-700 pb-2">Education</h2>
          <h3 className="text-xl font-semibold text-white mt-4">Saraswati Model Secondary School</h3>
          <p className="text-slate-300">+2 [Computer Science]</p>
          <p className="text-sm text-slate-400">Nawalpur, Nepal</p>
        </div>
      </div>
    </section>
  );
}