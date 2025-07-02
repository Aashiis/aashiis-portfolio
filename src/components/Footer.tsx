import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 mt-16 border-t border-slate-800">
      <div className="container mx-auto max-w-5xl px-4 text-center text-slate-400">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/aashiis" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors text-2xl"><FaGithub /></a>
          <a href="https://linkedin.com/in/aashiis0/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors text-2xl"><FaLinkedin /></a>
          <a href="mailto:aashistech@gmail.com" className="hover:text-cyan-400 transition-colors text-2xl"><FaEnvelope /></a>
          <a href="tel:+977-9827562679" className="hover:text-cyan-400 transition-colors text-2xl"><FaPhone /></a>
        </div>
        <p>© {year} Prakash BK (Aashis). All Rights Reserved.</p>
        <p className="text-sm mt-2">Built with <a href="https://nextjs.org" className="underline hover:text-white">Next.js</a> & <a href="https://tailwindcss.com" className="underline hover:text-white">Tailwind CSS</a>.</p>
      </div>
    </footer>
  );
};

export default Footer;