import {defineStore} from "pinia";
import {ref} from 'vue';
import {useMovieStore} from "./MovieStore.js";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_ENDPOINT = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

// Option API
// export const useSearchStore = defineStore('searchStore', {
//     state: () => ({
//         movies: [],
//         loader: false,
//     }),
//     actions: {
//         async getMovies(search) {
//             this.loader = true;
//             const res = await fetch(`${API_ENDPOINT}${search}`)
//             const data = await res.json();
//             this.movies = data.results;
//             this.loader = false;
//         },
//         addToUserMovies(movie) {
//             const movieStore = useMovieStore();
//             movieStore.movies.push({
//                 ...movie,
//                 isWatched: false,
//             })
//             this.movies = this.movies.filter(item => item.id !== movie.id)
//         }
//     }
// })

// Composition API
export const useSearchStore = defineStore('searchStore', () => {
    const loader = ref(false);
    const movies = ref([]);
    const movieStore = useMovieStore();

    const getMovies = async (search) => {
        loader.value = true;
        const res = await fetch(`${API_ENDPOINT}${search}`)
        const data = await res.json();
        movies.value = data.results;
        loader.value = false;
    }

    const addToUserMovies = (movie) => {
        movieStore.movies.push({
            ...movie,
            isWatched: false,
        })
        movies.value = movies.value.filter(item => item.id !== movie.id)
    }

    return {
        loader,
        movies,
        getMovies,
        addToUserMovies
    }
})