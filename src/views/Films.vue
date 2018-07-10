<template lang="html">
  <div class="film-wrapper">
    <NavMenu></NavMenu>
    <div class="films">
      <FilmCard v-for="film in films"
        :title="film.title"
        :releaseDate="film.releaseDate.slice(0,4)"
        :img="film.img"
        :id="film.id"
        :typeTV="typeTV">
      </FilmCard>
    </div>
    <Pagination></Pagination>
  </div>
</template>

<script>
const imgUrl = 'https://image.tmdb.org/t/p/w500';

import LayoutDefault from '../layouts/LayoutDefault.vue';
import FilmCard from '../components/Main/FilmCard.vue';
import NavMenu from '../components/Main/NavMenu.vue';
import Pagination from '../components/Main/Pagination.vue';

export default {
  name: 'Films',
  components: {
    FilmCard,
    NavMenu,
    Pagination
  },
  data() {
    return{
      films: [],
      typeTV: 'movie',
    }
  },
  created() {
    this.$emit(`update:layout`, LayoutDefault);
    this.getFilms();
  },
  methods: {
    getFilms() {
      fetch('https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=624f7df45767c9a0ff7b6bf3107182d5')
      .then(response => response.json())
      .then(response => {
          this.films = response.results.reduce((accFilms, film) => accFilms.concat(
            {
              id: film.id,
              title: film.original_title || film.original_name,
              img: `${imgUrl}${film.backdrop_path}`,
              releaseDate: film.release_date || film.first_air_date,
            }), [])
          })
      .catch(error => {console.error("Error: ", error);})
    }
  }
}
</script>

<style lang="css">
.film-wrapper {
  width: 100%;
  /* padding: 64px 0 0; */
  /* margin: 64px 0 0; */
}

.films {
  margin: 24px auto;
  box-sizing: border-box;
}

.film-card {
  margin: 0.5rem auto;
  height: 11rem;
  background-size: cover;
  position: relative;
}

.film-card_title {
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  position: absolute;
  user-select: none;
  bottom: 10px;
  left: 10px;
  font-size: 16px;
  color: #fff;
}

@media screen and (min-width: 360px) and (max-width: 480px) {
  .film-card {
    height: 12rem;
    width: 95%;
  }
}

@media screen and (min-width: 481px) and (max-width: 767px) {
  .film-card {
    height: 15rem;
    width: 95%;
  }
}

@media screen and (min-width: 768px) and (max-width: 960px) {
  .films {
    display: flex;
    flex-wrap: wrap;
    width: 768px;
    font-size: 18px;
  }

  .film-card {
    height: 12rem;
    width: 45%;
  }

  .film-card_title {
    font-size: 18px;
  }
}

@media screen and (min-width: 961px) and (max-width: 1023px) {
  .films {
    display: flex;
    flex-wrap: wrap;
    width: 768px;
    font-size: 18px;
  }

  .film-card {
    margin: 1rem;
    height: 12rem;
    width: 45%;
  }

  .film-card_title {
    font-size: 18px;
  }
}

@media screen and (min-width: 1024px) {
  .films {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 1024px;
    font-size: 18px;
  }

  .film-card {
    margin-top: 10px;
    height: 16rem;
    width: 48%;
  }

  .film-card_title {
    font-size: 18px;
  }
}
</style>
