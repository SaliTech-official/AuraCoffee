import { useState } from 'react'
import Header from './components/Header'
import Filter from './components/Filter'
import Products from './components/Products'
import { GreenEmeraldSignature } from '@salitech-official/green-emerald-signature';
import '@salitech-official/green-emerald-signature/dist/style.css';
function App() {
  const [activeFilter, setActiveFilter] = useState("Hot Drinks")

  const handleFilterChange = (filterTitle) => {
    setActiveFilter(filterTitle)
  }

  return (
    <div>
      <Header />
      <Filter onFilterChange={handleFilterChange} />
      <Products activeFilter={activeFilter} />
      <GreenEmeraldSignature lang='en' link='https://instagram.com/greenemerald.studio/'/>
    </div>
  )
}

export default App
