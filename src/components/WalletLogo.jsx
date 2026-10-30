import React from 'react';

export const WalletLogo = ({ className = "w-9 h-9", showText = true, textClassName = "text-xl font-bold" }) => {
  return (
    <div className="flex items-center gap-3 group select-none">
      {/* Branded Logo Mark inspired by Image 1 */}
      <div className={`relative ${className} shrink-0`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_12px_rgba(249,115,22,0.35)]"
        >
          {/* Outer soft circle glow */}
          <rect width="40" height="40" rx="12" fill="#0E1526" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          
          {/* Stylized 'W' ribbon wave (Orange to Cyan/White) */}
          <path
            d="M10 24.5C11.5 21 13.5 15 15.5 15C17.5 15 18.5 25 20.5 25C22.5 25 24 16 26 16C28 16 29.5 21 30.5 24"
            stroke="url(#wallet-logo-grad)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Accent dot */}
          <circle cx="15.5" cy="11.5" r="2" fill="#F97316" />
          
          <defs>
            <linearGradient id="wallet-logo-grad" x1="10" y1="20" x2="30.5" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F97316" />
              <stop offset="0.5" stopColor="#FB923C" />
              <stop offset="1" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <span className={`${textClassName} tracking-tight text-white group-hover:text-lime-300 transition-colors`}>
          Wallet
        </span>
      )}
    </div>
  );
};

export default WalletLogo;
