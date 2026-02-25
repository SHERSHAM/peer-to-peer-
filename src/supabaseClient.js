import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://gawevaqejpchgmvioufr.supabase.co'
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdhd2V2YXFlanBjaGdtdmlvdWZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5OTIxNTYsImV4cCI6MjA4NzU2ODE1Nn0.x6WlcXG-moJCr-dXP6VsQnb2CVI58AI-fZfM9HH3W-U'

// Reuse the same client across HMR reloads to avoid multiple GoTrueClient instances
const globalRef = /** @type {any} */ (globalThis)
if (!globalRef.__supabase) {
  globalRef.__supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
}

export default globalRef.__supabase
