import { useEffect, useState } from 'react'
import { supabase } from '../../services/supabase'

useEffect(() => {
  async function getProducts() {
    const { data, error } = await supabase
      .from('products')
      .select('*')

    console.log(data)
  }

  getProducts()
}, [])