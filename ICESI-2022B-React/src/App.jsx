import { useState } from 'react'
import MovieList from './pages/MovieList'
import './App.css'
import routes from './config/routes'

function App() {
  const [username, setUsername] = useState("Juan")

  return (
    <div className="App">
      {routes}
    </div>
  )
}

export default App
