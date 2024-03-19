
import { AddColor } from './Components/AddColor'
import { movie } from './Utils/Constant'
import './App.css'
import { AddMovie } from './Components/AddMovie'
import { useState } from 'react'
import { MovieList } from './Components/MovieList'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes ,Link} from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { Notfound } from './Components/Notfound'
import { MovieDetails } from './Components/MovieDetails'

function App() {
  
  const [movieList,setMovieList]=useState(movie)
  return (
    <>

    <Navbar/>
      <Routes>
        <Route path='/'element={<MovieList movieList={movieList}/>}/>

        <Route path='/addcolor' element={<AddColor/>}/>
        <Route path='/addmovie' element={<AddMovie movieList={movieList} setMovieList={setMovieList}/>}/>
        <Route path='*' element={<Notfound/>}/>
        
        {/* here this id is passed as dynamic value keeps changing i can use this id in movieDetails as params and access this---*see moviedetails */}
        <Route path='/movies/:id' element={<MovieDetails movieList={movieList}/>}/>
      </Routes>


       
      
      
      
    </>
  )
}

export default App
