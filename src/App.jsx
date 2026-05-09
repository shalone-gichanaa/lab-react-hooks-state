import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false)

  // Cart state
  const [cart, setCart] = useState([])

  // Category filter state
  const [category, setCategory] = useState("all")

  return (
  <div>
    <h1>🛒 Shopping App</h1>

    <p>
      Welcome! Your task is to implement filtering, cart management, and dark
      mode.
    </p>

    <DarkModeToggle
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />

    <label>Filter by Category: </label>

    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="all">All</option>
      <option value="Fruits">Fruits</option>
      <option value="Dairy">Dairy</option>
    </select>

    <ProductList
      cart={cart}
      setCart={setCart}
      category={category}
    />

    <Cart cart={cart} />
  </div>
)
}

export default App
