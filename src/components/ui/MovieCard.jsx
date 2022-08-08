import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToWatchList, removeFromWatchList } from "../../slices/moviesSlice";

const BASE_URL = "https://image.tmdb.org/t/p/original/";

export default function MovieCard(props) {
    const { movie } = props;
    const { watchlist } = useSelector(state => state.movies)
    const dispatch = useDispatch();
    const flag = watchlist.findIndex(item => item.id === movie.id);
    
    return (
        <div key={movie.id} className="card">
            <div className="image-container">
                <img
                    src={BASE_URL + movie.poster_path}
                    alt=""
                    className="poster"
                />
            </div>
            <h1 className="title">{movie.original_title}</h1>
            <p className="desc">{movie.overview.substring(0, 100) + "..."}</p>
            <p className="release">{movie.release_date}</p>
            <div className="card-actions">
                <button onClick={() => flag === -1 ? dispatch(addToWatchList(movie)) : dispatch(removeFromWatchList(movie))}>{flag === -1 ? 'Add To Watchlist' : 'Remove from Watchlist'}</button>
                <Link to={"/details/" + movie.id}>
                    <button>View Details</button>
                </Link>
            </div>
        </div>
    );
}

export { BASE_URL };
