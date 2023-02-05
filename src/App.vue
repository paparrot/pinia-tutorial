<template>
  <main>
    <header class="header">
      <img src="/logo.svg" alt="Logo" class="header-logo">
      <h2>My favourite movies</h2>
    </header>
    <div class="tabs">
      <button
          @click="setTab(1)"
          :class="['btn', {'btn_green': movieStore.activeTab === 1}]"
      >
        Search
      </button>
      <button
          @click="setTab(2)"
          :class="['btn', {'btn_green': movieStore.activeTab === 2}]"
      >
        Favourite
      </button>
    </div>
    <div class="search" v-if="movieStore.activeTab === 1">
      Search
    </div>
    <div class="movies" v-else>
      <h3>Watched movies (total: {{ movieStore.watchedMovies.length }})</h3>
      <Movie
          v-for="movie of movieStore.watchedMovies"
          :key="movie.id"
          :movie="movie"
      />
      <h3>All Movies (total: {{ movieStore.totalCountMovies }})</h3>
      <Movie
          v-for="movie of movieStore.movies"
          :key="movie.id"
          :movie="movie"
      />
    </div>
  </main>
</template>

<script setup>
import {useMovieStore} from "./stores/MovieStore.js";
import Movie from "./components/Movie.vue";

const setTab = (id) => {
  movieStore.setActiveTab(id);
}

const movieStore = useMovieStore();
</script>

<style lang="css">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.header-logo {
  max-width: 50px;
  margin-right: 10px;
}

.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
}

.btn:hover {
  opacity: 0.7;
}

.btn_green {
  background: #37df5c;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>