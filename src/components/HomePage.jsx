import React from 'react';
import Movie from './Movie';
import AllMovie from './AllMovie';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function HomePage(props) {
  const movieName = useParams();

  useEffect(() => {
    if (movieName) {
      const movie = props.movie.find(selectedMovie => selectedMovie.name == movieName);
      if (movie) {
        props.setIndex(props.movie.indexOf(movie));
      }
    }
  }, [movieName, props.movie]);

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Movie
          movie={props.movie}
          index={props.index}
          setIndex={props.setIndex}
        />
        <AllMovie
          movie={props.movie}
          index={props.index}
          setIndex={props.setIndex}
        />
      </div>
    </div>
  );
}
