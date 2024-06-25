import './App.css';
import MovieAdd from './component/MovieAdd.js';
import MovieList from './component/MovieList';
import MovieSearch from './component/MovieSearch';
import AsideMovie from './component/AsideMovie'
import {movies} from "./data"
import { useState } from 'react';
import './App.css'
import TopBar from './component/TopBar';
import Footer from './component/Footer';
import TitleBar from './component/TitleBar';
function App() {

  const [movieList,setMovieList]=useState(movies)

  const [searchTitle,setSearchTitle]=useState('')
  console.log('movieList',movieList)


const removeMovie=(idM)=>{
setMovieList(
  movieList.filter((el)=> el.id !== idM)
)
}

const addMovie=(newMovie)=>{
  setMovieList([...movieList,newMovie])
}


  return (
    <div className="App">


<>
  <div className="window-margin">
    <div className="window">
    <AsideMovie/>
      <div className="main" role="main">
      <TopBar/>
             <div className="movie-list">
         <TitleBar/>
          
         <MovieSearch  setSearchTitle={setSearchTitle}   /> 

<MovieList removeMovie={removeMovie}  movieList={movieList}  searchTitle={searchTitle}   />

<MovieAdd  addMovie={addMovie}   /> 

 <Footer/>
        </div>
     

      </div>


 


   
    </div>
   
  </div>
</>

    </div>
  );
}

export default App;