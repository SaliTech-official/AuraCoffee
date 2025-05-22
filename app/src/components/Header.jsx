import React from 'react'
import logo from '../../public/logos/Logo.svg'
import pattern from '../../public/Patern/CoffeeArt.svg'

export default function Header() {
  return (
    <div className='w-full h-[100px] bg-brown text-cream flex items-center justify-between px-[70px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.15)]'>
        <div className='w-[200px] flex items-center justify-center'>
            <img src={logo} alt="logo" className='w-10 h-10 mr-2' />
            <h1 className='text-2xl font-bold font-heading'>Aura Coffee</h1>
        </div>
        <div className='flex-1 flex items-center justify-center'>
            <img src={pattern} alt="coffee bean" className='coffee-bean w-[400px] h-[200px]' />
        </div>
        <h1 className='text-3xl font-bold font-heading w-[200px]'>Menu</h1>
    </div>
  )
}
