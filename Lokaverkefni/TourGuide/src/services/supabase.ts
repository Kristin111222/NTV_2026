import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ampgjtiuisqkjanopwmz.supabase.co/rest/v1/'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtcGdqdGl1aXNxa2phbm9wd216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3OTM2NjEsImV4cCI6MjA5NTM2OTY2MX0.N-yplTYwQsjUjqbY89wcxocA0dZL_3RhZ7Lm-lkgMQ4'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)