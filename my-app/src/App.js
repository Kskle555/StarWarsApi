import React,{useEffect, useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies] = useState([])
  const [isloading,setisloading] = useState(false);


 async function fetchMoviesHandler(){
   setisloading(true);
   seterror(null);
  
   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
   const data = await response.json();
   

   const transformedMovies = data.results.map((movieData)=>{
     return {
       id: movieData.episode_id,
       title: movieData.title,
       openingText: movieData.opening_crawl,
       releaseDate: movieData.release_date,
       producer : movieData.producer
     };
   })
   setMovies(transformedMovies);
   setisloading(false);
  
 }
  

  return (
    <React.Fragment>  
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isloading&&<MoviesList movies={movies} />}
        {!isloading&& movies.length ===0 && <p>Found no movies...</p>}
        {isloading && <p>Loading....</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
