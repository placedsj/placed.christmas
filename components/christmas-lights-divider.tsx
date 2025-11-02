import React from 'react';

export function ChristmasLightsDivider() {
  return (
    <div className="w-full h-16 overflow-hidden" aria-hidden="true">
      <svg width="100%" height="64" preserveAspectRatio="none" viewBox="0 0 1200 64">
        <defs>
          <pattern id="light-pattern" x="0" y="0" width="120" height="64" patternUnits="userSpaceOnUse">
            <path 
              d="M0 32 Q 30 12, 60 32 T 120 32" 
              stroke="#059669" 
              strokeWidth="3" 
              fill="none" 
              opacity="0.6" 
            />
            
            {/* Christmas Light Bulbs with Animation */}
            <circle cx="20" cy="40" r="8" fill="#DC2626" className="animate-pulse" style={{animationDelay: '0s'}} />
            <circle cx="20" cy="40" r="4" fill="#FEF3C7" opacity="0.8" className="animate-ping" style={{animationDelay: '0s'}} />
            
            <circle cx="45" cy="24" r="8" fill="#059669" className="animate-pulse" style={{animationDelay: '0.25s'}} />
            <circle cx="45" cy="24" r="4" fill="#FEF3C7" opacity="0.8" className="animate-ping" style={{animationDelay: '0.25s'}} />
            
            <circle cx="75" cy="40" r="8" fill="#F59E0B" className="animate-pulse" style={{animationDelay: '0.5s'}} />
            <circle cx="75" cy="40" r="4" fill="#FEF3C7" opacity="0.8" className="animate-ping" style={{animationDelay: '0.5s'}} />
            
            <circle cx="100" cy="24" r="8" fill="#3B82F6" className="animate-pulse" style={{animationDelay: '0.75s'}} />
            <circle cx="100" cy="24" r="4" fill="#FEF3C7" opacity="0.8" className="animate-ping" style={{animationDelay: '0.75s'}} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#light-pattern)" />
      </svg>
    </div>
  );
}

export function SnowfallAnimation() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="snowflake">❄</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
      
      <style>{`
        .snowflake {
          position: absolute;
          top: -10px;
          color: #fff;
          user-select: none;
          pointer-events: none;
          animation: fall linear infinite;
          opacity: 0.8;
          font-size: 1.2em;
        }
        
        .snowflake:nth-child(1) {
          left: 10%;
          animation-duration: 8s;
          animation-delay: -2s;
        }
        
        .snowflake:nth-child(2) {
          left: 20%;
          animation-duration: 10s;
          animation-delay: -4s;
        }
        
        .snowflake:nth-child(3) {
          left: 30%;
          animation-duration: 12s;
          animation-delay: -6s;
        }
        
        .snowflake:nth-child(4) {
          left: 40%;
          animation-duration: 9s;
          animation-delay: -1s;
        }
        
        .snowflake:nth-child(5) {
          left: 50%;
          animation-duration: 11s;
          animation-delay: -3s;
        }
        
        .snowflake:nth-child(6) {
          left: 60%;
          animation-duration: 8s;
          animation-delay: -5s;
        }
        
        .snowflake:nth-child(7) {
          left: 70%;
          animation-duration: 13s;
          animation-delay: -2s;
        }
        
        .snowflake:nth-child(8) {
          left: 80%;
          animation-duration: 9s;
          animation-delay: -4s;
        }
        
        .snowflake:nth-child(9) {
          left: 90%;
          animation-duration: 10s;
          animation-delay: -1s;
        }
        
        .snowflake:nth-child(10) {
          left: 5%;
          animation-duration: 14s;
          animation-delay: -7s;
        }
        
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}