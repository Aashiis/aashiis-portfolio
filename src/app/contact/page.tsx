import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Me | Prakash BK (Aashis)",
    description: "Get in touch with Prakash BK for collaborations, job opportunities, or freelance projects.",
};

export default function ContactPage() {
  const contactDetails = [
    { icon: <FaEnvelope />, text: "aashistech@gmail.com", href: "mailto:aashistech@gmail.com" },
    { icon: <FaPhone />, text: "+977-9827562679", href: "tel:+977-9827562679" },
    { icon: <FaMapMarkerAlt />, text: "Nawalpur, Nepal", href: "#" },
  ];

  return (
    <section className="py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Get In Touch</h1>
        <p className="text-lg text-slate-400 mb-10">
          I'm currently open to new opportunities, collaborations, and freelance projects. Feel free to reach out!
        </p>

        <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 flex flex-col items-center gap-6">
          {contactDetails.map((detail, index) => (
            <a key={index} href={detail.href} className="flex items-center gap-4 text-slate-200 hover:text-cyan-400 transition-colors text-lg">
              <span className="text-cyan-400 text-xl">{detail.icon}</span>
              <span>{detail.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}