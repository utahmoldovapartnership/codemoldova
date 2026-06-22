-- Week 6 lab: open demo table for learning read + write in React.
-- Run in Supabase SQL Editor after creating the `notes` table in Table Editor.
-- Table columns: id (uuid, default gen_random_uuid()), text (text), created_at (timestamptz, default now())

alter table public.notes enable row level security;

-- Wednesday: allow anyone to read (class demo only — not for production apps)
create policy "notes_select_demo"
  on public.notes
  for select
  using (true);

-- Thursday: allow anyone to insert (class demo only)
create policy "notes_insert_demo"
  on public.notes
  for insert
  with check (true);

-- Optional Thursday medium tier: allow delete
-- create policy "notes_delete_demo"
--   on public.notes
--   for delete
--   using (true);
