import MoviesList from './components/MoviesList';
import './App.css';
import { useState, useEffect, useCallback } from 'react';
import Addmovie from '../src/components/AddMovie'

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);



  const addMovieHandler = async (movie) => {

    const res = await fetch('https://react-http-7865c-default-rtdb.firebaseio.com/movies.json',
      {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    // console.log(res);
    const data = await res.json()
    console.log(data);

  }

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const res = await fetch('https://react-http-7865c-default-rtdb.firebaseio.com/movies.json');
      if (!res.ok)
        throw new Error('$404 error');
      const data = await res.json();
      const loadedMovies = [];
      for (let key in data) {
        loadedMovies.push({ id: key, title: data[key].title, openingText: data[key].openingText, releaseDate: data[key].releaseDate });

      }

      setMovies(loadedMovies)

    }
    catch (error) {
      setError(error.message)
    }

    setIsLoading(false)

  }, [])

  useEffect(() => {

    fetchMovieHandler()

  }, [fetchMovieHandler])

  let content = <p>Found no movies</p>
  if (movies.length > 0)
    content = < MoviesList movies={movies} />
  if (error)
    content = <p>s{error}</p>
  if (isLoading) {
    content = <p>Loading...</p>
  }

  return (
    <>

      <section><Addmovie onAddMovie={addMovieHandler} /></section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section> {content}</section>
    </>
  );
}

export default App;
