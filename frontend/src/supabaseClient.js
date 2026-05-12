import { createClient } from '@supabase/supabase-js'

const supabaseUrl =
'https://txkqmhhqswbehdbrlhni.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4a3FtaGhxc3diZWhkYnJsaG5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzMTkxMzMsImV4cCI6MjA5Mzg5NTEzM30.RRTponG5ZcxvPWJ3Ib9gl8QWOwzYhjG1_wSiz7Hkahw'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);