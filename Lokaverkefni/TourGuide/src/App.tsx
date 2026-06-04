import { useState } from 'react'
import { getProducts } from './services/products'
import CategoryButtons from '../src/components/Buttons/CategoryButtons'
import Navbar from '../src/components/Navbar'
import NavbarButtons from '../src/components/Buttons/IconButtons'
import { useQuery } from '@tanstack/react-query'


function App() {


  const [selectedCategory, setSelectedCategory] = useState(0)
  const [search, setSearch] = useState("")

  const { data: products = [], isLoading } = useQuery({
  queryKey: ['products'],
  queryFn: getProducts,
})





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
  </>
)
}

export default App