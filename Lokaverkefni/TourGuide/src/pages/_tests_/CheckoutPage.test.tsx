import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import CheckoutPage from '../CheckoutPage'

const mockNavigate = vi.fn()

vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}))

describe('CheckoutPage', () => {
  it('navigates to confirmation page when form is submitted', () => {
    render(<CheckoutPage />)

    fireEvent.click(
      screen.getByRole('button', { name: /pay/i })
    )

    expect(mockNavigate).toHaveBeenCalledWith('/confirmation')
  })
})