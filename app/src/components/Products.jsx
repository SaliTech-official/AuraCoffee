import React, { useState, useEffect } from 'react'
import ProductBox from './ProductBox'
import LoadingScreen from './LoadingScreen'

export default function Products({ activeFilter = "Hot Drinks" }) {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedImages, setLoadedImages] = useState({})

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
    // Cold Drinks
    {
        id: 11,
        title: "Iced Coffee",
        description: "Brewed coffee, ice, milk (optional)",
        price: "0.71$",
        category: "ColdDrinks",
        image: "/products/IcedCoffee.jpg"
    },
    {
        id: 12,
        title: "Iced Latte",
        description: "Espresso, cold milk, ice",
        price: "0.83$",
        category: "ColdDrinks",
        image: "/products/IcedLatte.jpg"
    },
    {
        id: 13,
        title: "Iced Mocha",
        description: "Espresso, chocolate syrup, milk, ice",
        price: "0.95$",
        category: "ColdDrinks",
        image: "/products/IcedMocha.jpg"
    },
    {
        id: 14,
        title: "Iced Caramel Macchiato",
        description: "Espresso, caramel syrup, ice, milk, vanilla",
        price: "1.00$",
        category: "ColdDrinks",
        image: "/products/IcedCaramelMacchiato.jpg"
    },
    {
        id: 15,
        title: "Ice Caramel",
        description: "Caramel syrup, ice, milk or cream",
        price: "0.90$",
        category: "ColdDrinks",
        image: "/products/IceCaramel.jpg"
    },
    {
        id: 16,
        title: "Lemonade",
        description: "Lemon juice, sugar, water, ice",
        price: "0.60$",
        category: "ColdDrinks",
        image: "/products/Lemonade.jpg"
    },
    {
        id: 17,
        title: "Fruit Smoothie",
        description: "Mixed fruits, yogurt, ice, honey",
        price: "1.10$",
        category: "ColdDrinks",
        image: "/products/FruitSmoothie.jpg"
    },
    {
        id: 18,
        title: "Sparkling Lemon Water",
        description: "Sparkling water, lemon slices, mint",
        price: "0.70$",
        category: "ColdDrinks",
        image: "/products/SparklingLemonWater.jpg"
    },
    {
        id: 19,
        title: "Iced Green Tea",
        description: "Green tea, ice, lemon",
        price: "0.67$",
        category: "ColdDrinks",
        image: "/products/IcedGreenTea.jpg"
    },
    {
        id: 20,
        title: "Iced Coconut Coffee",
        description: "Espresso, coconut milk, ice",
        price: "1.00$",
        category: "ColdDrinks",
        image: "/products/IcedCoconutCoffee.jpg"
    },
    // Ice Cream Products
    {
        id: 21,
        title: "Vanilla Ice Cream",
        description: "Milk, cream, sugar, vanilla extract",
        price: "0.95$",
        category: "IceCream",
        image: "/products/VanillaIceCream.jpg"
    },
    {
        id: 22,
        title: "Chocolate Ice Cream",
        description: "Milk, cream, sugar, cocoa powder",
        price: "0.95$",
        category: "IceCream",
        image: "/products/ChocolateIceCream.jpg"
    },
    {
        id: 23,
        title: "Strawberry Ice Cream",
        description: "Milk, cream, sugar, fresh strawberries",
        price: "0.95$",
        category: "IceCream",
        image: "/products/StrawberryIceCream.jpg"
    },
    {
        id: 24,
        title: "Mango Ice Cream",
        description: "Milk, cream, sugar, mango puree",
        price: "1.00$",
        category: "IceCream",
        image: "/products/MangoIceCream.jpg"
    },
    {
        id: 25,
        title: "Pistachio Ice Cream",
        description: "Milk, cream, sugar, ground pistachios",
        price: "1.00$",
        category: "IceCream",
        image: "/products/PistachioIceCream.jpg"
    },
    {
        id: 26,
        title: "Cookies & Cream",
        description: "Milk, cream, sugar, crushed cookies",
        price: "1.10$",
        category: "IceCream",
        image: "/products/Cookies&Cream.jpg"
    },
    {
        id: 27,
        title: "Melon Ice Cream",
        description: "Melon, milk, cream, sugar",
        price: "1.00$",
        category: "IceCream",
        image: "/products/MelonIceCream.jpg"
    },
    {
        id: 28,
        title: "Black Mulberry Ice Cream",
        description: "Mulberry, milk, cream, sugar",
        price: "1.00$",
        category: "IceCream",
        image: "/products/BlackMulberryIceCream.jpg"
    },
    {
        id: 29,
        title: "Double Chocolate Ice Cream",
        description: "Milk, cream, sugar, cocoa, chocolate chunks",
        price: "1.10$",
        category: "IceCream",
        image: "/products/DoubleChocolateIceCream.jpg"
    },
    {
        id: 30,
        title: "Mixed Nut Ice Cream",
        description: "Milk, cream, sugar, mixed nuts, dried fruits, honey",
        price: "1.10$",
        category: "IceCream",
        image: "/products/MixedNutIceCream.jpg"
    },
    // Shakes Products
    {
        id: 31,
        title: "Chocolate Shake",
        description: "Milk, ice cream, chocolate syrup",
        price: "3.00$",
        category: "Shakes",
        image: "/products/ChocolateShake.jpg"
    },
    {
        id: 32,
        title: "Vanilla Shake",
        description: "Milk, vanilla ice cream",
        price: "3.00$",
        category: "Shakes",
        image: "/products/VanillaShake.jpg"
    },
    {
        id: 33,
        title: "Strawberry Shake",
        description: "Milk, strawberry ice cream",
        price: "3.00$",
        category: "Shakes",
        image: "/products/StrawberryShake.jpg"
    },
    {
        id: 34,
        title: "Banana Shake",
        description: "Milk, bananas",
        price: "3.00$",
        category: "Shakes",
        image: "/products/BananaShake.jpg"
    },
    {
        id: 35,
        title: "Mango Shake",
        description: "Mango, milk",
        price: "3.00$",
        category: "Shakes",
        image: "/products/MangoShake.jpg"
    },
    {
        id: 36,
        title: "Cookies & Cream Shake",
        description: "Milk, ice cream, crushed cookies",
        price: "3.20$",
        category: "Shakes",
        image: "/products/Cookies&CreamShake.jpg"
    },
    {
        id: 37,
        title: "OREO Shake",
        description: "Milk, Oreo cookies",
        price: "3.20$",
        category: "Shakes",
        image: "/products/OREOShake.jpg"
    },
    {
        id: 38,
        title: "Caramel Shake",
        description: "Milk, caramel syrup",
        price: "3.20$",
        category: "Shakes",
        image: "/products/CaramelShake.jpg"
    },
    {
        id: 39,
        title: "Coffee Shake",
        description: "Coffee, milk",
        price: "3.00$",
        category: "Shakes",
        image: "/products/CoffeeShake.jpg"
    },
    {
        id: 40,
        title: "Peanut Butter Shake",
        description: "Milk, peanut butter",
        price: "3.20$",
        category: "Shakes",
        image: "/products/PeanutButterShake.jpg"
    },
    // Pancakes Products
    {
        id: 41,
        title: "Classic Pancake",
        description: "Flour, eggs, milk, baking powder",
        price: "4.00$",
        category: "Pancakes",
        image: "/products/ClassicPancake.jpg"
    },
    {
        id: 42,
        title: "Chocolate Pancake",
        description: "Flour, cocoa powder, eggs, milk",
        price: "4.50$",
        category: "Pancakes",
        image: "/products/ChocolatePancake.jpg"
    },
    {
        id: 43,
        title: "Banana Pancake",
        description: "Flour, bananas, eggs, milk",
        price: "4.50$",
        category: "Pancakes",
        image: "/products/BananaPancake.jpg"
    },
    {
        id: 44,
        title: "Blueberry Pancake",
        description: "Flour, blueberries, eggs, milk",
        price: "4.50$",
        category: "Pancakes",
        image: "/products/BlueberryPancake.jpg"
    },
    {
        id: 45,
        title: "Nutella Pancake",
        description: "Flour, Nutella, eggs, milk",
        price: "5.00$",
        category: "Pancakes",
        image: "/products/NutellaPancake.jpg"
    },
    {
        id: 46,
        title: "Strawberry Pancake",
        description: "Flour, strawberries, eggs, milk",
        price: "4.50$",
        category: "Pancakes",
        image: "/products/StrawberryPancake.jpg"
    },
    {
        id: 47,
        title: "Lemon Pancake",
        description: "Flour, lemon zest, eggs, milk",
        price: "4.50$",
        category: "Pancakes",
        image: "/products/LemonPancake.jpg"
    },
    // Cakes Products
    {
        id: 48,
        title: "Chocolate Cake",
        description: "Flour, cocoa powder, sugar, eggs, butter, baking powder",
        price: "15.00$",
        category: "Cakes",
        image: "/products/ChocolateCake.jpg"
    },
    {
        id: 49,
        title: "Vanilla Cake",
        description: "Flour, sugar, eggs, butter, vanilla extract, baking powder",
        price: "14.00$",
        category: "Cakes",
        image: "/products/VanillaCake.jpg"
    },
    {
        id: 50,
        title: "Red Velvet",
        description: "Flour, cocoa powder, buttermilk, vinegar, sugar, eggs, red food coloring",
        price: "16.00$",
        category: "Cakes",
        image: "/products/RedVelvet.jpg"
    },
    {
        id: 51,
        title: "Carrot Cake",
        description: "Flour, grated carrots, sugar, eggs, oil, cinnamon, baking powder",
        price: "15.00$",
        category: "Cakes",
        image: "/products/CarrotCake.jpg"
    },
    {
        id: 52,
        title: "Cheesecake",
        description: "Cream cheese, sugar, eggs, graham cracker crust, vanilla",
        price: "17.00$",
        category: "Cakes",
        image: "/products/Cheesecake.jpg"
    },
    {
        id: 53,
        title: "Lemon Cake",
        description: "Flour, sugar, eggs, butter, lemon zest, lemon juice",
        price: "14.00$",
        category: "Cakes",
        image: "/products/LemonCake.jpg"
    },
    {
        id: 54,
        title: "Tiramisu Cake",
        description: "Ladyfingers, mascarpone, coffee, cocoa powder, eggs, sugar",
        price: "18.00$",
        category: "Cakes",
        image: "/products/TiramisuCake.jpg"
    }
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

  useEffect(() => {
    setIsLoading(true)
    const imagePromises = filteredProducts.map(product => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = product.image
        img.onload = () => {
          setLoadedImages(prev => ({ ...prev, [product.id]: true }))
          resolve()
        }
        img.onerror = reject
      })
    })

    Promise.all(imagePromises)
      .then(() => {
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error loading images:', error)
        setIsLoading(false)
      })
  }, [activeFilter])

  if (isLoading) {
    return <LoadingScreen />
  }

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
