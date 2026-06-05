import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/products'
import ProductInfo from '../components/ProductInfo'

export default function ProductPage() {
  const { id } = useParams()

  const [product, setProduct] = useState<any>(null)
  

const [cart, setCart] = useState<any[]>([])

function addToCart(product: any) {
  setCart((prev) => [...prev, product])
}

  useEffect(() => {
    async function loadProduct() {
      if (!id) return

      const data = await getProductById(id)
      setProduct(data)
    }

    loadProduct()
  }, [id])

  if (!product) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="page-container">
    
<ProductInfo product={product} />
     

     <button onClick={() => alert("Tour added to cart!")}>
  Book Tour
</button>
<pre>
  {JSON.stringify(cart, null, 2)}
</pre>
    </div>
  )
}