import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/products'

export default function ProductPage() {
  const { id } = useParams()

  const [product, setProduct] = useState<any>(null)

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
      <h1>{product.name}</h1>

      <img
        src={`https://ampgjtiuisqkjanopwmz.supabase.co/storage/v1/object/public/Myndir/${product.image_url}`}
        alt={product.name}
        className="product-image"
      />

      <p>Price: ${product.prize}</p>

      <p>{product.Description}</p>

      <p>Date: {product.trip_date}</p>

      <p>{product.description}</p>
    </div>
  )
}