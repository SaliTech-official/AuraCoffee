import React from 'react'
import logo from '../../public/logos/Logo.svg'
import pattern from '../../public/Patern/CoffeeArt.svg'

export default function Header() {
  return (
    <div className='fixed top-0 left-0 right-0 w-full h-[60px] md:h-[80px] lg:h-[100px] bg-brown text-cream flex items-center justify-between px-6 md:px-12 lg:px-[70px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.15)] z-50'>
        <div className='min-w-[140px] md:min-w-[160px] lg:min-w-[200px] flex items-center justify-center'>
            <img src={logo} alt="logo" className='w-8 h-8 md:w-9 lg:w-10 md:h-9 lg:h-10 mr-2' />
            <h1 className='text-lg md:text-xl lg:text-2xl font-bold font-heading whitespace-nowrap'>Aura Coffee</h1>
        </div>
        <div className='hidden md:flex flex-1 items-center justify-center'>
            <img 
                src={pattern} 
                alt="coffee bean" 
                className='coffee-bean w-[250px] md:w-[300px] lg:w-[400px] h-[120px] md:h-[150px] lg:h-[200px]' 
            />
        </div>
        <h1 className='min-w-[80px] md:min-w-[140px] lg:min-w-[200px] text-xl md:text-2xl lg:text-3xl font-bold font-heading text-center whitespace-nowrap'>Menu</h1>
    </div>
  )
}
