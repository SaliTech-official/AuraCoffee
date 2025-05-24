import React from 'react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-cream flex items-center justify-center z-50">
      <div className="relative">
        {/* Coffee cup animation */}
        <div className="w-24 h-24 border-4 border-brown rounded-b-[100px] relative overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-0 bg-brown animate-[fillUp_2s_ease-in-out_infinite]"></div>
        </div>
        {/* Steam animation */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-2 h-8 bg-brown/30 rounded-full animate-[steam_2s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
        <div className="mt-8 text-brown text-xl font-heading font-semibold animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  );
}
