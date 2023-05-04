import './App.css';
import { HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header'
import HomePage from './components/HomePage';
import HighRating from './components/HighRating';
import pokemon from './Pokemon.jpeg';
import digimon from './Digimon.webp'
import spiderman from './Spiderman.jpg'
import YuGiOh from './Yu-Gi-Oh.jpg'
import avengers from './Avengers.jpg'
import ironman from './IronMan.jpg'

function App() {
  const [index, setIndex] = useState(0);
  const [movie, setMovie] = useState([
    {
      name: "Pokemon",
      description: "pokemon movie",
      image: pokemon,
      grading: 5,
      grades: [5]
    },
    {
      name: "Digimon",
      description: "digimon movie",
      image: digimon,
      grading: 5,
      grades: [5]
    },
    {
      name: "Spiderman",
      description: "spiderman movie",
      image: spiderman,
      grading: 5,
      grades: [5]
    },
    {
      name: "Yu-Gi-Oh",
      description: "yu-gi-oh movie",
      image: YuGiOh,
      grading: 5,
      grades: [5]
    },
    {
      name: "Avengers",
      description: "avengers movie",
      image: avengers,
      grading: 5,
      grades: [5]
    }
  ])
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const sortedMovies = [...movie].sort((a, b) => b.grading - a.grading);
    setTopMovies(sortedMovies.slice(0, 3));
  }, [topMovies]);

  return (
    <div>
      <Header />
      <HashRouter>
        <HighRating
          topMovies={topMovies}
          movie={movie}
          setTopMovies={setTopMovies}
          setIndex={setIndex}
        />
        <Routes>
          <Route path="/" element={<Navigate to={"/homepage/:movieName"} />} />
          <Route path='/homepage/:movieName' element={
            <HomePage
              movie={movie}
              index={index}
              setIndex={setIndex}
            />
          } />
        </Routes>
      </HashRouter>
    </div>
  );
}
export default App;
