type ProductInfoProps = {
  product: any
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <>

      <h1>{product.name}</h1>

      <img
        src={`https://ampgjtiuisqkjanopwmz.supabase.co/storage/v1/object/public/Myndir/${product.image_url}`}
        alt={product.name}
        className="product-image"
      />
      <p>Verð: {product.prize} kr.</p>

      <p>{product.Description}</p>

      <p>Date: {product.trip_date}</p>

      <p>{product.description}</p>
    </>
  )
}