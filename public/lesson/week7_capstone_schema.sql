-- Week 7 capstone: profiles + entries with per-user Row Level Security.
-- Run in Supabase SQL Editor in the SAME project where you created `notes` for Week 6.
-- Enable Email auth in Supabase Dashboard before testing sign-up.

-- Profiles: one row per user (name from sign-up; email lives in auth.users)
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  name text not null,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "profiles_select_own"
  on public.profiles
  for select
  using (auth.uid() = id);

create policy "profiles_insert_own"
  on public.profiles
  for insert
  with check (auth.uid() = id);

create policy "profiles_update_own"
  on public.profiles
  for update
  using (auth.uid() = id);

-- Entries: what each signed-in user tracks (rename concept in your app UI)
create table if not exists public.entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  content text not null,
  created_at timestamptz not null default now()
);

alter table public.entries enable row level security;

create policy "entries_select_own"
  on public.entries
  for select
  using (auth.uid() = user_id);

create policy "entries_insert_own"
  on public.entries
  for insert
  with check (auth.uid() = user_id);

create policy "entries_update_own"
  on public.entries
  for update
  using (auth.uid() = user_id);

create policy "entries_delete_own"
  on public.entries
  for delete
  using (auth.uid() = user_id);
