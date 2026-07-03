import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
  console.log("Testing fetch...");
  const { data: fetch, error: fetchErr } = await supabase.from('rsvps').select('*');
  console.log("Fetch Error:", fetchErr);
  console.log("Fetch Data:", fetch);

  console.log("\nTesting insert...");
  const { data: insert, error: insertErr } = await supabase.from('rsvps').insert([
    { name: 'Test', attendance: 'hadir', message: 'Test message' }
  ]).select();
  console.log("Insert Error:", insertErr);
  console.log("Insert Data:", insert);
}

test();
