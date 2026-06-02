import { useEffect, useState } from 'react'
import { getProducts } from './services/products'
import CategoryButtons from '../src/components/Buttons/CategoryButtons'

function App() {

  const [products, setProducts] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [search, setSearch] = useState("")

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
    <div className="page-container">

      <header className="navbar">

        <button className="menu-button">
          ☰
        </button>

        <h2>Explore Vestmannaeyjar</h2>

      </header>

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
          <div className="product-card" key={product.id}>

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
        ))}

      </div>

    </div>
  )
}

export default App