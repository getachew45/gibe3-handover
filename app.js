const SUPABASE_URL =
"https://aggxeaxapxvdnleenkvk.supabase.co/rest/v1/";
const SUPABASE_KEY =
"YOUR_ANON_PUBLIC_KEY";
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