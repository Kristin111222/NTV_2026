import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import CartPage from '../CartPage'

vi.mock('react-router-dom', () => ({
  Link: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}))

vi.mock('../../features/cart/context/CartContext', () => ({
  useCart: () => ({
    cart: [
      {
        id: 1,
        name: 'New Lava Tour',
        prize: 10000,
        quantity: 2,
      },
    ],
    increaseQuantity: vi.fn(),
    decreaseQuantity: vi.fn(),
    removeFromCart: vi.fn(),
  }),
})) 

describe('CartPage', () => {
  it('renders product in cart', () => {
    render(<CartPage />) 

   expect(screen.getByText('New Lava Tour')).toBeDefined()
expect(screen.getByText('Heildarverð: 20000 kr.')).toBeDefined()
  })
})