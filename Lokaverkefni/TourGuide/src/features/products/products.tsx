import { useEffect } from 'react'
import { supabase } from '../../services/supabase'

useEffect(() => {
  async function getProducts() {
    const { data } = await supabase
      .from('products')
      .select('*')

    console.log(data)
  }

  getProducts()
}, [])