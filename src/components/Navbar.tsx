import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/aashiis", icon: <FaGithub /> },
    { href: "https://linkedin.com/in/aashiis0/", icon: <FaLinkedin /> },
    { href: "mailto:aashistech@gmail.com", icon: <FaEnvelope /> },
  ];

  return (
    <header className="py-6 border-b border-slate-800 sticky top-0 bg-slate-950/80 backdrop-blur-md z-50">
      <div className="container mx-auto max-w-5xl px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
          Prakash (Aashiis)
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-slate-300 hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors text-xl">
              {link.icon}
            </a>
          ))}
        </div>
         {/* Add Mobile Menu button here if needed */}
      </div>
    </header>
  );
};

export default Navbar;