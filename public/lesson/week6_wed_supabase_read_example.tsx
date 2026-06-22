// Reference only — Week 6 Wednesday NotesList pattern.
// Copy ideas into your app; use AI to adapt to your file structure.

'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
)

type Note = { id: string; text: string; created_at: string }

export default function NotesList() {
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      setLoading(true)
      setError(null)
      const { data, error: fetchError } = await supabase
        .from('notes')
        .select('*')
        .order('created_at', { ascending: false })

      if (fetchError) setError(fetchError.message)
      else setNotes(data ?? [])
      setLoading(false)
    }
    load()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  if (notes.length === 0) return <p>No notes yet</p>

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>{note.text}</li>
      ))}
    </ul>
  )
}
