import React from 'react';

interface SkillBadgeProps {
  name: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
  return (
    <div className="bg-slate-800 text-cyan-400 text-sm font-medium px-3 py-1 rounded-full shadow-md">
      {name}
    </div>
  );
};

export default SkillBadge;