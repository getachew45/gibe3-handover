import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://aggxeaxapxvdnleenkvk.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
const supabaseClient =
supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);
let { data: gibe3-handover-db, error } = await supabase
  .from('gibe3-handover-db')
  .select('*')
  let { data: gibe3-handover-db, error } = await supabase
  .from('gibe3-handover-db')
  .select('some_column,other_column')
  let { data: gibe3-handover-db, error } = await supabase
  .from('gibe3-handover-db')
  .select(`
    some_column,
    other_table (
      foreign_key
    )
  `)
  let { data: gibe3-handover-db, error } = await supabase
  .from('gibe3-handover-db')
  .select('*')
  .range(0, 9)
  let { data: gibe3-handover-db, error } = await supabase
  .from('gibe3-handover-db')
  .select("*")

  // Filters
  .eq('column', 'Equal to')
  .gt('column', 'Greater than')
  .lt('column', 'Less than')
  .gte('column', 'Greater than or equal to')
  .lte('column', 'Less than or equal to')
  .like('column', '%CaseSensitive%')
  .ilike('column', '%CaseInsensitive%')
  .is('column', null)
  .in('column', ['Array', 'Values'])
  .neq('column', 'Not equal to')

  // Arrays
  .contains('array_column', ['array', 'contains'])
  .containedBy('array_column', ['contained', 'by'])

  // Logical operators
  .not('column', 'like', 'Negate filter')
  .or('some_column.eq.Some value, other_column.eq.Other value')
  const { data, error } = await supabase
  .from('gibe3-handover-db')
  .insert([
    { some_column: 'someValue', other_column: 'otherValue' },
  ])
  .select()
  const { data, error } = await supabase
  .from('gibe3-handover-db')
  .insert([
    { some_column: 'someValue' },
    { some_column: 'otherValue' },
  ])
  .select()
  const { data, error } = await supabase
  .from('gibe3-handover-db')
  .upsert({ some_column: 'someValue' })
  .select()
  const { data, error } = await supabase
  .from('gibe3-handover-db')
  .update({ other_column: 'otherValue' })
  .eq('some_column', 'someValue')
  .select()
  const { error } = await supabase
  .from('gibe3-handover-db')
  .delete()
  .eq('some_column', 'someValue')
  const channels = supabase.channel('custom-all-channel')
  .on(
    'postgres_changes',
    { event: '*', schema: 'public', table: 'gibe3-handover-db' },
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()
  const channels = supabase.channel('custom-insert-channel')
  .on(
    'postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'gibe3-handover-db' },
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()
  const channels = supabase.channel('custom-update-channel')
  .on(
    'postgres_changes',
    { event: 'UPDATE', schema: 'public', table: 'gibe3-handover-db' },
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()
  const channels = supabase.channel('custom-delete-channel')
  .on(
    'postgres_changes',
    { event: 'DELETE', schema: 'public', table: 'gibe3-handover-db' },
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()
  const channels = supabase.channel('custom-filter-channel')
  .on(
    'postgres_changes',
    { event: '*', schema: 'public', table: 'gibe3-handover-db', filter: 'some_column=eq.some_value' },
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()
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