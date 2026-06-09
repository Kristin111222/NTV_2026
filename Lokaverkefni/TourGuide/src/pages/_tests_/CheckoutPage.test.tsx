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

    const payButton = screen.getByRole('button', {
      name: /pay/i,
    })

    fireEvent.click(payButton)

    expect(mockNavigate).toHaveBeenCalledWith('/confirmation')
  })

  it('renders all form fields', () => {
    render(<CheckoutPage />)

   expect(screen.getAllByPlaceholderText('Full Name')).toHaveLength(1)
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Card Number')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Expiry Date')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('CVV')).toBeInTheDocument()
  })
})