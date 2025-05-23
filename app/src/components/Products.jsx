import React from 'react'
import ProductBox from './ProductBox'

export default function Products({ activeFilter = "Hot Drinks" }) {
  const products = [
    {
        id: 1,
        title: "Espresso",
        description: "Ground coffee, hot water",
        price: "0.71$",
        category: "HotDrinks",
        image: "/products/Espresso.jpg"
    },
    {
        id: 2,
        title: "Cappuccino",
        description: "Espresso, steamed milk, milk foam",
        price: "0.83$",
        category: "HotDrinks",
        image: "/products/Cappuccino.jpg"
    },
    {
        id: 3,
        title: "Latte",
        description: "Espresso, steamed milk, thin milk foam layer",
        price: "0.90$",
        category: "HotDrinks",
        image: "/products/Latte.jpg"
    },
    {
        id: 4,
        title: "Mocha",
        description: "Espresso, chocolate syrup, milk, milk foam",
        price: "0.95$",
        category: "HotDrinks",
        image: "/products/Mocha.jpg"
    },
    {
        id: 5,
        title: "Hot Chocolate",
        description: "Chocolate, milk, sugar, vanilla",
        price: "0.83$",
        category: "HotDrinks",
        image: "/products/HotChocolate.jpg"
    },
    {
        id: 6,
        title: "Black Coffee",
        description: "Brewed coffee or moka",
        price: "0.67$",
        category: "HotDrinks",
        image: "/products/BlackCoffee.jpg"
    },
    {
        id: 7,
        title: "Tea",
        description: "Dried tea leaves, hot water",
        price: "0.60$",
        category: "HotDrinks",
        image: "/products/Tea.jpg"
    },
    {
        id: 8,
        title: "Green Tea",
        description: "Green tea leaves, hot water",
        price: "0.67$",
        category: "HotDrinks",
        image: "/products/GreenTea.jpg"
    },
    {
        id: 9,
        title: "Caramel Coffee",
        description: "Espresso, milk, caramel",
        price: "1.00$",
        category: "HotDrinks",
        image: "/products/CaramelCoffee.jpg"
    },
    {
        id: 10,
        title: "Macchiato",
        description: "Espresso, a small amount of milk foam",
        price: "0.86$",
        category: "HotDrinks",
        image: "/products/Macchiato.jpg"
    },
  ]

  // تبدیل عنوان فیلتر به فرمت مناسب برای مقایسه
  const getFilterCategory = (filterTitle) => {
    if (!filterTitle) return "HotDrinks" // مقدار پیش‌فرض
    return filterTitle.replace(/\s+/g, '')
  }

  // فیلتر کردن محصولات بر اساس دسته‌بندی انتخاب شده
  const filteredProducts = products.filter(product => 
    product.category === getFilterCategory(activeFilter)
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductBox key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
