import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'SETTU_URL_HÉR'
const supabaseKey = 'SETTU_ANON_KEY_HÉR'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)