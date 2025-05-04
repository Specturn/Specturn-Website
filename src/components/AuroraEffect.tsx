import React from 'react';

const AuroraEffect: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="aurora-blur absolute -inset-[10px] opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-blue-900/20 to-cyan-900/20 blur-3xl animate-aurora-shift-1" />
        <div className="absolute inset-0 bg-gradient-to-l from-purple-900/20 via-indigo-900/20 to-blue-900/20 blur-3xl animate-aurora-shift-2" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-cyan-900/20 to-purple-900/20 blur-3xl animate-aurora-shift-3" />
      </div>
    </div>
  );
};

export default AuroraEffect; 