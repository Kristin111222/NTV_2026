import { useEffect } from 'react'
import { getProducts } from './services/products'

function App() {

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts()
      console.log(data)
    }

    loadProducts()
  }, [])

  return (
    <h1>Tour Guide</h1>
  )
}

export default App