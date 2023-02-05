import {defineStore} from "pinia";
import {useMovieStore} from "./MovieStore.js";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_ENDPOINT = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

export const useSearchStore = defineStore('searchStore', {
    state: () => ({
        movies: [],
        loader: false,
    }),
    actions: {
        async getMovies(search) {
            this.loader = true;
            const res = await fetch(`${API_ENDPOINT}${search}`)
            const data = await res.json();
            this.movies = data.results;
            this.loader = false;
        },
        addToUserMovies(movie) {
            const movieStore = useMovieStore();
            movieStore.movies.push({
                ...movie,
                isWatched: false,
            })
            this.movies = this.movies.filter(item => item.id !== movie.id)
        }
    }
})
