import { useEffect, useState } from 'react'

useEffect(() => {
  async function getProducts() {
    const { data, error } = await supabase
      .from('products')
      .select('*')

    console.log(data)
  }

  getProducts()
}, [])