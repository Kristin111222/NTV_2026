import { useNavigate } from 'react-router-dom'


export default function CheckoutPage() {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/confirmation')
  }

  return (
    <div className="checkout-container">
    <h1>Payment Details</h1>

    <form
      className="checkout-form"
      onSubmit={handleSubmit}
      style={{
        display: 'grid',
        width: '400px',
        gap: '10px',
      }}
    >
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email" />
      <input type="tel" placeholder="Phone Number" />
      <input type="text" placeholder="Card Number" />
      <input type="text" placeholder="Expiry Date" />
      <input type="text" placeholder="CVV" />

      <button type="submit">Pay</button>
    </form>
  </div>
)
}