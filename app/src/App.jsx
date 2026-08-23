import { useState } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Products from "./components/Products";
import { CreditBar } from "./components/CreditBar";

function App() {
  const [activeFilter, setActiveFilter] = useState("Hot Drinks");

  const handleFilterChange = (filterTitle) => {
    setActiveFilter(filterTitle);
  };

  return (
    <div>
      <Header />
      <Filter onFilterChange={handleFilterChange} />
      <Products activeFilter={activeFilter} />
      <CreditBar />
    </div>
  );
}

export default App;
