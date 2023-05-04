import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AllMovie(props) {
  const nav = useNavigate();
  const choseMovie = (movie) => {
    props.setIndex(props.movie.indexOf(props.movie.find(selectedMovie => selectedMovie.name == movie)));
  }

  const movieOfChoice = (movie) => {
    choseMovie(movie.name);
    nav(`/homepage/${movie.name}`);
  }

  return (
    <div>
      <h1>All Movies</h1>
      <div id='allNovieDiv' style={{ display: 'flex', flexDirection: 'column' }}>
        {props.movie.map((movie) => (
          <button key={movie.name} onClick={() => movieOfChoice(movie)} className='movieBTN' style={{ backgroundImage: `url(${movie.image})` }}>
            {movie.name}
          </button>
        ))}
      </div>
    </div>
  )
}
