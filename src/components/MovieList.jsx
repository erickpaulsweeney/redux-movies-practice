import React, { useEffect } from "react";
import MovieCard from "./ui/MovieCard";
import { fetchMovies, changePage } from "../slices/moviesSlice";
import { useSelector, useDispatch } from "react-redux";

export default function MovieList(props) {
    const { movies, page } = useSelector((state) => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies(page));
        // eslint-disable-next-line
    }, [page]);

    return (
        <div className="list-container">
            {movies.length === 0 ? (
                <h1>loading...</h1>
            ) : (
                movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                    />
                ))
            )}
            <div className="buttons-div">
                <button className="page-button" onClick={() => page > 1 && dispatch(changePage(-1))}>Prev</button>
                <button className="page-button" onClick={() => page < 1000 && dispatch(changePage(1))}>Next</button>
            </div>
        </div>
    );
}
