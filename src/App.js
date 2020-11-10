import React, { useState } from 'react'
import Movie from './movie'
import Former from './form'
import MovieList from './MovieList'
const App = () => {
  const [movies, setMovies] = useState([{rating: "10", name: "demon slayer", src: "https://m.media-amazon.com/images/M/MV5BODA2MWY3ZWQtZGQ2Ni00Njc4LWE5NTItYTFkMmJkMzM1ZDYzXkEyXkFqcGdeQXVyODEyMDIxNDY@._V1_.jpg"}])

  return(
    <div className={"parent"}>
      <MovieList movies={movies}/>
      <Former setMovies={setMovies}/>
    </div>
  );
}
export default App;