import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-24 h-24" }) => {
  return (
    <svg 
      viewBox="0 0 512 512" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {/* Main Circle Background with White Border for contrast on blue backgrounds */}
      <circle cx="256" cy="256" r="246" fill="#1d4ed8" stroke="white" strokeWidth="20" />
      
      {/* Cityscape Content Group */}
      <g stroke="white" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round">
        
        {/* Horizon Line / Hill */}
        <path d="M80 320 Q256 260 432 320" fill="none" />
        
        {/* Left House */}
        <path d="M130 310 V240 L170 200 L210 240 V310" />
        <path d="M150 260 V290 M190 260 V290" strokeWidth="10" /> 
        
        {/* Center Buildings */}
        <path d="M230 310 V160 H290 V310" />
        <path d="M245 180 H275 M245 210 H275 M245 240 H275" strokeWidth="10" />
        
        {/* Right Building */}
        <path d="M310 310 V220 H380 V310" />
        <rect x="330" y="240" width="30" height="30" strokeWidth="10" />
        
        {/* Stylized Trees */}
        <path d="M90 290 L90 315" strokeWidth="12" />
        <circle cx="90" cy="275" r="20" fill="white" stroke="none" />
        
        <path d="M420 290 L420 315" strokeWidth="12" />
        <circle cx="420" cy="275" r="20" fill="white" stroke="none" />

        {/* Clouds */}
        <path d="M160 120 Q180 100 200 120" strokeWidth="12" />
        <path d="M340 110 Q370 80 400 110" strokeWidth="12" />
      </g>
    </svg>
  );
};