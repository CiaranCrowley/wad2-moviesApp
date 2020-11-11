import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {UpcomingMoviesContext} from '../contexts/upcomingMoviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const UpcomingMovies = () => {
  const context = useContext(UpcomingMoviesContext);
  const movies = context.movies.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};

export default UpcomingMovies;


// import React, { useState, useEffect } from "react";
// import StubAPI from "../api/stubAPI";
// import PageTemplate from '../components/templateMovieListPage'
// import {getUpcomingMovies} from "../api/tmdb-api";

// const UpcomingMovies = () => {
//   const [movies, setMovies] = useState([]);
//   useEffect(() => {
//     getUpcomingMovies().then(movies => {
//       setMovies(movies);
//     });
//   }, []);

//   const addToFavorites = movieId => {
//     setMovies(movies => {
//       const index = movies.map(m => m.id).indexOf(movieId);
//       StubAPI.add(movies[index]);
//       let newMoviesState = [...movies]
//       newMoviesState.splice(index, 1);
//       return newMoviesState;
//     });
//   };

//   return (
//     <PageTemplate
//       title='Upcoming Movies'
//       movies={movies}
//       buttonHandler={addToFavorites}
//     />
// );

// };
// export default UpcomingMovies;

