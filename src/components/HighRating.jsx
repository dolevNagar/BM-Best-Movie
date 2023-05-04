import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function HighRating(props) {
  const movieName = useParams();
  const nav = useNavigate();

  useEffect(() => {
    if (movieName) {
      const movie = props.movie.find(selectedMovie => selectedMovie.name == movieName);
      if (movie) {
        props.setIndex(props.movie.indexOf(movie));
      }
    }
  }, [movieName, props.movie]);

  const choseMovie = (movie) => {
    props.setIndex(props.movie.indexOf(props.movie.find(selectedMovie => selectedMovie.name == movie)));
  }

  const movieOfChoice = (movie) => {
    choseMovie(movie.name);
    nav(`/homepage/${movie.name}`);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>High Rating</h1>
      {props.topMovies.map(movie => (
        <button onClick={() => movieOfChoice(movie)} key={movie.name} className='movieBTN' style={{ backgroundImage: `url(${movie.image})` }}>
          {movie.name}
        </button>
      ))}
    </div>
  )
}
