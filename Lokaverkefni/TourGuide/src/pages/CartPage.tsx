import { useState } from 'react'

const [cart, setCart] = useState<any[]>([])

function addToCart(product: any) {
  setCart((prev) => [...prev, product])
}