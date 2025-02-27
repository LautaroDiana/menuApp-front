import { useState } from 'react'
import Menu from './components/Menu'
import Element from './components/Element'

const App = () => {

  const data = [
    {
      "id": 1,
      "name": "Espresso",
      "description": "Strong and bold single shot of coffee.",
      "category": "Hot Drinks",
      "price": 2.50
    },
    {
      "id": 2,
      "name": "Cappuccino",
      "description": "Espresso with steamed milk and a frothy top.",
      "category": "Hot Drinks",
      "price": 3.50
    },
    {
      "id": 3,
      "name": "Iced Latte",
      "description": "Chilled espresso with milk over ice.",
      "category": "Cold Drinks",
      "price": 4.00
    },
    {
      "id": 4,
      "name": "Mocha",
      "description": "Espresso with steamed milk and chocolate.",
      "category": "Hot Drinks",
      "price": 4.50
    },
    {
      "id": 5,
      "name": "Lemonade",
      "description": "Freshly squeezed lemonade with a hint of mint.",
      "category": "Cold Drinks",
      "price": 3.00
    },
    {
      "id": 6,
      "name": "Croissant",
      "description": "Buttery and flaky French pastry.",
      "category": "Food",
      "price": 3.25
    },
    {
      "id": 7,
      "name": "Avocado Toast",
      "description": "Sourdough toast with mashed avocado and spices.",
      "category": "Food",
      "price": 5.50
    },
    {
      "id": 8,
      "name": "Chocolate Chip Cookie",
      "description": "Classic cookie with gooey chocolate chips.",
      "category": "Food",
      "price": 2.75
    },
    {
      "id": 9,
      "name": "Fruit Smoothie",
      "description": "A blend of fresh berries, banana, and yogurt.",
      "category": "Cold Drinks",
      "price": 5.00
    },
    {
      "id": 10,
      "name": "Herbal Tea",
      "description": "A calming blend of chamomile and mint.",
      "category": "Hot Drinks",
      "price": 3.00
    }
  ]

  const [displayOneItem, setDisplayOneItem] = useState(false)
  const [elementId, setElementId] = useState(null)

  const handleSelectItem = id => {    
    setDisplayOneItem(true)
    setElementId(id)
  }

  const handleBackToMenu = () => {
    setDisplayOneItem(false)
    setElementId(null)
  }

  return (

    <div>

    <h1>Morning Roast</h1>

    {displayOneItem 
      ? <Element data={data} id={elementId} handleBackToMenu={handleBackToMenu}/> 
      : <Menu data={data} handleSelectItem={handleSelectItem}/>
    }
    
    <footer>Morning Roast – 789 Pine Road, Brooksville. Copyright 2025 - Designed By Lautaro Diana</footer>

    </div>
  )
}

export default App