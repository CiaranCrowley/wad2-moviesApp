import { useEffect, useState } from "react";
import {getUpcomingMovies} from '../api/tmdb-api'

const useUpcomingMovies = id => {
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        getUpcomingMovies(id).then(movie => {
            setMovie(movie);
    });
  }, [id]);
  return [movie, setMovie];
};

export default useUpcomingMovies