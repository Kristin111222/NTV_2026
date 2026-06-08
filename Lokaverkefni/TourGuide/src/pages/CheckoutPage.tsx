import { useNavigate } from 'react-router-dom'


export default function CheckoutPage() {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/confirmation')
  }

  return (
    <div>
      <h1>Payment Details</h1>

      <form
        className="checkout-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Full Name"
          required
        />

        <input
          type="email"
          placeholder="Email"
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          required
        />

        <input
          type="text"
          placeholder="Card Number"
          required
        />

        <input
          type="text"
          placeholder="Expiry Date"
          required
        />

        <input
          type="text"
          placeholder="CVV"
          required
        />

        <button type="submit">
          Pay
        </button>
      </form>
    </div>
  )
}