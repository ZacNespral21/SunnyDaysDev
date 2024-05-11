import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL_DEV
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY_DEV
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY
// const supabaseServiceRole = process.env.REACT_APP_SUPABASE_SERVICE_ROLE

if(!supabaseUrl){
  console.log('!')
  console.log(process.env.REACT_APP_SUPABASE_ANON_KEY)
}

const supaBase = createClient(supabaseUrl, supabaseAnonKey);

// @ts-ignore
export default supaBase;