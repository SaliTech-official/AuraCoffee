import { useState } from 'react'
import Header from './components/Header'
import Filter from './components/Filter'
import Products from './components/Products'

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
    </div>
  )
}

export default App
