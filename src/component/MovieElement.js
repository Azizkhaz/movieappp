import React from 'react'

const MovieElement = ({movie,removeMovie}) => {
  return (
    <li onClick={()=>removeMovie(movie.id)}  >
      <button  onClick={()=>removeMovie(movie.id)}   >X</button>
    <img
      src={movie.PosterURL}
      alt=""
      className="cover"
    />
    <p className="title">{movie.Title}</p>
    <p className="genre">{movie.Rate}</p>
  </li>
  )
}

export default MovieElement