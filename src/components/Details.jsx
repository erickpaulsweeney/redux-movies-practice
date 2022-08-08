import React from "react";
import { useEffect } from "react";
import { BASE_URL } from "./ui/MovieCard";
import { fetchDetails } from "../slices/moviesSlice";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToWatchList } from "../slices/moviesSlice";

export default function Details(props) {
    const { id } = useParams();
    const { selected } = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDetails(id));
        // eslint-disable-next-line
    }, []);

    return (
        <div className="details-container">
            {selected === null ? (
                <h2 className="center">Loading...</h2>
            ) : (
                <>
                    <div className="left">
                        <img
                            src={BASE_URL + selected.poster_path}
                            alt={selected.title}
                            className="movie-poster"
                        />
                    </div>
                    <div className="right">
                        <h1 className="title">{selected.original_title}</h1>
                        <p className="desc">{selected.overview}</p>
                        <p className="release-date">
                            Release Date: {selected.release_date}
                        </p>
                        <button onClick={() => dispatch(addToWatchList(selected))}>Add to Watchlist</button>
                    </div>
                </>
            )}
        </div>
    );
}
