import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<h1>Hoccups Poccus</h1>} />
    </Routes>
  )
}

export default App