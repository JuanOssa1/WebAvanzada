import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import MovieList from '../pages/MovieList'
import NotFound from '../pages/NotFound'

const routes = (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/movies" element={<MovieList owner="Juan"/>}/>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    </Router>
)

export default routes