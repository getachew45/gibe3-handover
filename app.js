import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://aggxeaxapxvdnleenkvk.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
const supabaseClient =
supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);
const saveBtn =
document.getElementById("saveBtn");
saveBtn.addEventListener(
"click",
async () => {
alert("Save button works");

});
<button id="saveBtn"> 
save Report
</button>