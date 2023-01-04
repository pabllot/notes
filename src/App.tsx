import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { Routes, Route, Navigate } from 'react-router-dom'
import NewNote from "./NewNote"
import { useLocalStorage } from "./useLocalStorage"

export type Note = {
  id: string
} & NoteData

export type RawNote = {
  id: string
}

export type RawNoteData = {
  title: string
  markdown: string
  tagIds: string[]
}

export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}

export type Tag = {
  id: string
  label: string
}

const App = () => {
  const [notes, setNotes] = useLocalStorage<RawNote>("NOTES", [])
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])
  return (
    <Container className="my-4">
      <Routes>
        <Route path='/' element={<h1>Hoccups Poccus</h1>} />
        <Route path='/new' element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>show id</h1>} />        
          <Route path="edit" element={<h1>edit</h1>} />        
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  )
}

export default App