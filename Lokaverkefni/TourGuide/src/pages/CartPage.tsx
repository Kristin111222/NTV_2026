type CartPageProps = {
  cart: any[]
}

export default function CartPage({ cart }: CartPageProps) {
  return (
    <div>
      <h1>Karfan</h1>

      {cart.length === 0 ? (
        <p>Karfan er tóm</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.prize} kr.</p>
          </div>
        ))
      )}
    </div>
  )
}