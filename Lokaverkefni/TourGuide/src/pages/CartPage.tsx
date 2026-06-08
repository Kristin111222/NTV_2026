import { useCart } from '../features/cart/context/CartContext'


export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart()

  const totalPrice = cart.reduce(
    (total, item) => total + item.prize * item.quantity,
    0
  )

  return (
    <div>
      <h1>Karfan</h1>

      {cart.length === 0 ? (
        <p>Karfan er tóm</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>

              <p>Verð: {item.prize} kr.</p>

              <div>
                <button
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>

                <span> {item.quantity} </span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>

              <p>
                Samtals: {item.prize * item.quantity} kr.
              </p>

              <button
                onClick={() => removeFromCart(item.id)}
              >
                Fjarlægja
              </button>

              <hr />
            </div>
          ))}

          <h2>Heildarverð: {totalPrice} kr.</h2>
        </>
      )}
    </div>
  )
}