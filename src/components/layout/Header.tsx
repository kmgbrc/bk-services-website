import React from 'react';

interface HeaderProps {
  bgImg: string; 
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ bgImg, title, subtitle }) => {
    return (
      <div className="relative text-white py-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#13161D] via-[#13161D]/90 to-[#13161D]/70" />
        </div>
  
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-gray-400">{subtitle}</p>
        </div>
      </div>
    );
  };
  

export default Header;
