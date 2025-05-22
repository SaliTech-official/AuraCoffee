import React, { useState } from 'react'
import FilterBox from './FilterBox'
import HotDrinkIC from '../../public/logos/HotDrinks.svg'
import HotDrinkActiveIC from '../../public/logos/HotDrinksActive.svg'
import ColdDrinkIC from '../../public/logos/ColdDrinks.svg'
import ColdDrinkActiveIC from '../../public/logos/ColdDrinksActive.svg'
import IceCreamIC from '../../public/logos/IceCream.svg'
import IceCreamActiveIC from '../../public/logos/IceCreamActive.svg'
import IcePackIC from '../../public/logos/IcePacks.svg'
import IcePackActiveIC from '../../public/logos/IcePacksActive.svg'
import ShakesIC from '../../public/logos/Shakes.svg'
import ShakesActiveIC from '../../public/logos/ShakesActive.svg'
import PancakeIC from '../../public/logos/Pancakes.svg'
import PancakeActiveIC from '../../public/logos/PancakesActive.svg'
import CakeIC from '../../public/logos/Cakes.svg'
import CakeActiveIC from '../../public/logos/CakesActive.svg'

export default function Filter() {
  const [filters, setFilters] = useState([
    {
      id: 1,
      title: "Hot Drinks",
      icon: HotDrinkIC,
      activeIcon: HotDrinkActiveIC,
      isActive: true
    },
    {
      id: 2,
      title: "Cold Drinks",
      icon: ColdDrinkIC,
      activeIcon: ColdDrinkActiveIC,
      isActive: false
    },
    {
      id: 3,
      title: "Ice Cream",
      icon: IceCreamIC,
      activeIcon: IceCreamActiveIC,
      isActive: false
    },
    {
      id: 4,
      title: "Ice Packs",
      icon: IcePackIC,
      activeIcon: IcePackActiveIC,
      isActive: false
    },
    {
      id: 5,
      title: "Shakes",
      icon: ShakesIC,
      activeIcon: ShakesActiveIC,
      isActive: false
    },
    {
      id: 6,
      title: "Pancakes",
      icon: PancakeIC,
      activeIcon: PancakeActiveIC,
      isActive: false
    },
    {
      id: 7,
      title: "Cakes",
      icon: CakeIC,
      activeIcon: CakeActiveIC,
      isActive: false
    }
  ])

  const handleFilterClick = (filterId) => {
    setFilters(filters.map(filter => ({
      ...filter,
      isActive: filter.id === filterId
    })))
  }

  return (
    <div className='w-full px-4 md:px-6 lg:px-8'>
      <div className='w-full flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 py-4 md:py-6 overflow-x-auto scrollbar-hide touch-pan-x snap-x snap-mandatory'>
        {filters.map((filter) => (
          <div key={filter.id} className='snap-start flex-shrink-0'>
            <FilterBox
              icon={filter.icon}
              activeIcon={filter.activeIcon}
              title={filter.title}
              isActive={filter.isActive}
              onClick={() => handleFilterClick(filter.id)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
