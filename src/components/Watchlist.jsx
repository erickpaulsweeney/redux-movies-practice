import React from "react";
import MovieCard from "./ui/MovieCard";

export default function Watchlist(props) {
    return (
        <div className="list-container">
            {props.watchlist.length === 0 && <h1>No movies to watch yet...</h1>}
            {props.watchlist.map((movie) => (
                <MovieCard key={movie.id} movie={movie} handleAdd={props.handleAdd} />
            ))}
        </div>
    );
}
