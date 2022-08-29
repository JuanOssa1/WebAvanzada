import { useState } from 'react'
import MovieList from './pages/MovieList'
import './App.css'

function App() {
  const [username, setUsername] = useState("Juan")

  return (
    <div className="App">
      <MovieList owner={username}></MovieList>
    </div>
  )
}

export default App
