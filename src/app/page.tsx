"use client"; // Required for animations and hooks

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { PROJECTS } from './data/projects';
import { SKILLS } from './data/skills';
import ProjectCard from '../components/ProjectCard';
import SkillBadge from '../components/SkillBadge';
import BackgroundParticles from '../components/BackgroundParticles';
import styles from './styles/HomePage.module.css'; // Import our new CSS module

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.6, 
            ease: "easeOut" // Corrected: string, not string[]
        } 
    }
}

export default function Home() {
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="relative overflow-hidden">
      <BackgroundParticles />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="text-center py-24 min-h-[70vh] flex flex-col justify-center items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className={`text-5xl md:text-7xl font-bold mb-4 ${styles.heroTextGradient}`}
              variants={itemVariants}
            >
              Prakash BK (Aashis)
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-cyan-400 font-medium mb-8"
              variants={itemVariants}
            >
              Full-Stack Developer & Mobile App Engineer
            </motion.p>
            <motion.p
              className="max-w-3xl mx-auto text-slate-300 mb-10 text-balance"
              variants={itemVariants}
            >
              Highly motivated and self-driven developer with 3+ years of experience building scalable web and mobile applications. Passionate about clean architecture, great UI/UX, and impactful technology.
            </motion.p>
            <motion.div className="flex justify-center gap-4" variants={itemVariants}>
              <Link href="/projects" className={`font-bold py-3 px-6 rounded-lg transition-all ${styles.glowingBtn}`}>
                  View My Work
              </Link>
              <Link href="/contact" className="bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold py-3 px-6 rounded-lg transition-all">
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <motion.section 
            id="skills" 
            className="py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-12">My Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(SKILLS).map(([category, skills], index) => (
              <motion.div 
                key={category} 
                className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg border border-slate-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{ visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 }}}}
              >
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => <SkillBadge key={skill.name} name={skill.name} />)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Projects Section */}
        <motion.section 
            id="projects" 
            className="py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
               <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{ visible: { opacity: 1, y: 0, transition: { delay: index * 0.15 }}}}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/projects" className="text-cyan-400 hover:underline text-lg font-semibold">
              View All Projects →
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}