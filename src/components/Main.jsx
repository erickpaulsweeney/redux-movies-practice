import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Details from "./Details";
import Layout from "./Layout";
import MovieList from "./MovieList";
import Watchlist from "./Watchlist";

export default function Main() {
    const { watchlist } = useSelector(state => state.movies);

    return (
        <div className="main-container">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route
                        index
                        element={<MovieList />}
                    />
                    <Route
                        path="watchlist"
                        element={<Watchlist watchlist={watchlist} />}
                    />
                    <Route
                        path="details/:id"
                        element={<Details />}
                    />
                </Route>
            </Routes>
        </div>
    );
}
