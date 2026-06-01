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
    <div>
      <h1>Tour Guide</h1>

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
    src={product.image_url}
    alt={product.name}
    className="product-image"
  />

  <h2>{product.name}</h2>

  <p>${product.prize}</p>

  <p>{product.trip_date}</p>

  <button>Add to cart</button>

</div>
        ))}

      </div>
    </div>
  )
}

export default App