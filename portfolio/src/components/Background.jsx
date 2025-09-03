import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[#151515] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-repeat-x bg-size-100-200 animate-slide-x opacity-10"
          style={{ backgroundImage: 'linear-gradient(to right, #007cf0 1px, transparent 1px)', backgroundSize: '100px 100%' }}>
        </div>
        <div className="absolute inset-0 bg-repeat-y bg-size-200-100 animate-slide-y opacity-10"
          style={{ backgroundImage: 'linear-gradient(to bottom, #007cf0 1px, transparent 1px)', backgroundSize: '100% 100px' }}>
        </div>
      </div>
      <style jsx="true">{`
        @keyframes slide-x {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100px);
          }
        }
        @keyframes slide-y {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-100px);
          }
        }
        .animate-slide-x {
          animation: slide-x 15s linear infinite;
        }
        .animate-slide-y {
          animation: slide-y 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Background;
