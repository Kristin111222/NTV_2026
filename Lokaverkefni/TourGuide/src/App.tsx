import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import { getProducts } from './services/products'

import CategoryButtons from './components/Buttons/CategoryButtons'
import NavbarButtons from './components/Buttons/IconButtons'
import BookTourButton from './components/Buttons/BookTourButton'

import ProductInfo from './components/ProductInfo'

import Login from './pages/LoginPage'
import ProductPage from './pages/ProductPage'

import CartPage from './pages/CartPage'
import { useCart } from './features/cart/context/CartContext'
import CheckoutPage from './pages/CheckoutPage'
import ConfirmationPage from './pages/ConfirmationPage'

import './App.css'

function App() {
  const [products, setProducts] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [search, setSearch] = useState('')

  const { addToCart } = useCart()

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts()
      setProducts(data || [])
    }

    loadProducts()
  }, [])

  const filteredProducts = products.filter((product) => {
  const matchesCategory =
    selectedCategory === 0 ||
    product.category_id === selectedCategory

  const matchesSearch = product.name
    .toLowerCase()
    .includes(search.toLowerCase())

  return matchesCategory && matchesSearch
})

const sortedProducts = [...filteredProducts].sort((a, b) => {
  if (a.id === 1) return -1
  if (b.id === 1) return 1
  return 0
})

return (
  <div
    style={{
      backgroundColor: '#2f2f2f',
      color: 'white',
      minHeight: '100vh',
    }}
  >
    <NavbarButtons />

    <Routes>
      <Route
        path="/"
        element={
          <div className="page-container">
            <div className="hero-section">
              <h1>Explore Vestmannaeyjar</h1>
            </div>

            <CategoryButtons
              setSelectedCategory={setSelectedCategory}
            />

            <input
              type="text"
              placeholder="Search tours..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />

            <div className="products-grid">
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="product-card"
                >
                  <Link
                    to={`/products/${product.id}`}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    <ProductInfo product={product} />
                  </Link>

                  <BookTourButton
                    onClick={() => {
                      addToCart(product)
                      alert('You have booked the tour!')
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        }
      />

      <Route
        path="/products/:id"
        element={<ProductPage />}
      />

      <Route
        path="/cart"
        element={<CartPage />}
      />

      <Route
  path="/checkout"
  element={<CheckoutPage />}
/>

<Route
  path="/confirmation"
  element={<ConfirmationPage />}
/>

      <Route
        path="/login"
        element={<Login />}
        
      />
    </Routes>
  </div>
)

  return (
     <div
    style={{
      backgroundColor: '#2f2f2f',
      color: 'white',
      minHeight: '100vh',
    }}
  >
      <NavbarButtons />

      <Routes>
        <Route
          path="/"
          element={
            <div className="page-container">
              <div className="hero-section">
                <h1>Explore Vestmannaeyjar</h1>
              </div>

              <CategoryButtons
                setSelectedCategory={setSelectedCategory}
              />

              <input
                type="text"
                placeholder="Search tours..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
              />

              <div className="products-grid">
                {sortedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="product-card"
                  >
                    <Link
                      to={`/products/${product.id}`} 
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      <ProductInfo product={product} />
                    </Link>

                    <BookTourButton
  onClick={() => {
    addToCart(product)
    alert("You have booked the tour!")
  }}
/>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        <Route
          path="/products/:id"
          element={<ProductPage />}
        />

        <Route
          path="/cart"
          element={<CartPage />}
        />

        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
        </div>
    
  )
}

export default App