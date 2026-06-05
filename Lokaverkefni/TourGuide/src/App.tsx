import { useEffect, useState } from 'react'


import { getProducts } from './services/products'
import CategoryButtons from './components/Buttons/CategoryButtons'
import Navbar from './components/Navbar'
import NavbarButtons from './components/Buttons/IconButtons'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './pages/LoginPage'
import ProductPage from './pages/ProductPage'

function App() {
  const [products, setProducts] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [search, setSearch] = useState('')

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

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())

    return matchesCategory && matchesSearch
  })

 return (
  <Routes>

    <Route
      path="/"
      element={
        <>
          <NavbarButtons />

          <div className="page-container">
            <Navbar />

            <div className="hero-section">
              <h1>Explore Vestmannaeyjar</h1>
            </div>

            <CategoryButtons
              selectedCategory={selectedCategory}
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
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <div className="product-card">
                    <img
                      src={`https://ampgjtiuisqkjanopwmz.supabase.co/storage/v1/object/public/Myndir/${product.image_url}`}
                      alt={product.name}
                      className="product-image"
                    />

                    <div className="product-info">
                      <h2>{product.name}</h2>

                      <p className="price">
                        ${product.prize}
                      </p>

                      <p className="date">
                        {product.trip_date}
                      </p>

                      <button>
                        Book Tour
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      }
    />

    <Route
      path="/products/:id"
      element={<ProductPage />}
    />

    <Route
      path="/login"
      element={<Login />}
    />

  </Routes>
)
}

export default App