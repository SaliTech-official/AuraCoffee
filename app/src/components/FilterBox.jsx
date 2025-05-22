import React from 'react'

export default function FilterBox({ icon, activeIcon, title, isActive, onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`
        flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3
        px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 rounded-lg sm:rounded-xl cursor-pointer transition-all duration-300
        border-2 min-w-[90px] sm:min-w-[110px] md:min-w-[130px]
        ${isActive 
          ? 'border-brown text-brown bg-brown/5' 
          : 'border-brown/30 text-brown/70 hover:border-brown hover:text-brown'
        }
      `}
    >
      <img 
        src={isActive ? activeIcon : icon} 
        alt="Icon" 
        className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-all duration-300'
      />
      <span className='text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap'>{title}</span>
    </div>
  )
}
