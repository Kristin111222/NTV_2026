import { useEffect, useState } from 'react'
import { getProducts } from './services/products'

function App() {

  const [products, setProducts] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState(0)

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts()
      setProducts(data || [])
    }

    loadProducts()
  }, [])

  const filteredProducts =
    selectedCategory === 0
      ? products
      : products.filter(
          (product) => product.category_id === selectedCategory
        )

  return (
    <div className="page-container">

<header className="navbar">

  <button className="menu-button">
    ☰
  </button>

  <h2>Explore Vestmannaeyjar</h2>

</header>

      <div className="category-buttons">

        <button onClick={() => setSelectedCategory(0)}>
          All
        </button>

        <button onClick={() => setSelectedCategory(1)}>
          Adventure Tours
        </button>

        <button onClick={() => setSelectedCategory(2)}>
          Northern Lights Tours
        </button>

        <button onClick={() => setSelectedCategory(3)}>
          Museums & Culture
        </button>

      </div>

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

              <p className="price">${product.prize}</p>

              <p className="date">{product.trip_date}</p>

              <button>Book Tour</button>
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default App