import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const watchlist = localStorage.getItem('watchList');
const page = localStorage.getItem('pageNum');

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (num) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=9b153f4e40437e115298166e6c1b997c&page=${num}`);
    const data = await response.json();
    return data.results;
})

export const fetchDetails = createAsyncThunk('movies/fetchDetails', async (input) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${input}?api_key=9b153f4e40437e115298166e6c1b997c`);
    const data = await response.json();
    return data;
})

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        watchlist: watchlist ? JSON.parse(watchlist) : [],
        selected: null,
        page: page ? JSON.parse(page) : 1
    },
    reducers: {
        addToWatchList: (state, action) => {
            const flag = state.watchlist.findIndex(item => item.id === action.payload.id);
            if (flag === -1) {
                state.watchlist.push(action.payload);
                localStorage.setItem('watchList', JSON.stringify(state.watchlist));
            }   
        },
        removeFromWatchList: (state, action) => {
            let newList = state.watchlist;
            const target = newList.findIndex(item => item.id === action.payload.id)
            newList.splice(target, 1);
            state.watchlist = newList;
            localStorage.setItem('watchList', JSON.stringify(newList));
        }, 
        changePage: (state, action) => {
            state.page += action.payload;
            localStorage.setItem('pageNum', JSON.stringify(state.page));
        }
    }, 
    extraReducers: {
        [fetchMovies.fulfilled] : (state, action) => {
            state.movies = action.payload;
        }, 
        [fetchDetails.fulfilled] : (state, action) => {
            state.selected = action.payload;
        }
    }
})

export const { addToWatchList, removeFromWatchList, changePage } = moviesSlice.actions;
export default moviesSlice.reducer;