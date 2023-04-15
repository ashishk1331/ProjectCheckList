import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(' https://ymdiloptwluxxesoawke.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltZGlsb3B0d2x1eHhlc29hd2tlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0MTE0MjMsImV4cCI6MTk5Njk4NzQyM30.z7ByoSLsKb7a78xM1ncqNsAyX0_aMv3nPz0xjGiDeQ0')