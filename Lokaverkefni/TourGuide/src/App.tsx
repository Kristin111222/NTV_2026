import { useEffect, useState } from 'react'
import { getProducts } from './services/products'

function App() {

  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts()
      setProducts(data || [])
    }

    loadProducts()
  }, [])

  return (
    <div>
      <h1>My Store</h1>

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App