import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import PageTemplate from "../components/templateMovieListPage";
import UpcomingMovies from "../components/upcomingMovies"
import useUpcomingMovies  from "../hooks/useUpcomingMovies";
import MovieDetails from "../components/movieDetails";


const UpcomingMoviesPage = props => {
  const { id } = props.match.params;
  const [movie] = useUpcomingMovies(id)  // NEW
  return (
    <>
    {movie ? (
      <>
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
        </PageTemplate>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/reviews`}
          render={props => <UpcomingMovies movie={movie} {...props} />}
        />
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};

export default withRouter(UpcomingMoviesPage);