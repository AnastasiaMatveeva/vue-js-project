<template lang="html">
  <div class="series-wrapper">
    <NavMenu></NavMenu>
    <div class="series">
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
  name: 'Series',
  components: {
    FilmCard,
    NavMenu,
    Pagination
  },
  data() {
    return{
      films: [],
      typeTV: 'tv',
    }
  },
  created() {
    this.$emit(`update:layout`, LayoutDefault);
    this.getSeries();
  },
  methods: {
    getSeries() {
      fetch('https://api.themoviedb.org/3/tv/popular?api_key=624f7df45767c9a0ff7b6bf3107182d5&language=en-US&page=1')
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

<style lang="css" scoped>
.series {
  margin: 24px auto;
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
  .series {
    display: flex;
    flex-wrap: wrap;
    width: 768px;
  }

  .film-card {
    height: 12rem;
    width: 45%;
  }
}

@media screen and (min-width: 961px) and (max-width: 1023px) {
  .series {
    display: flex;
    flex-wrap: wrap;
    width: 768px;
  }

  .film-card {
    margin: 1rem;
    height: 12rem;
    width: 45%;
  }
}

@media screen and (min-width: 1024px) {
  .series {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width:1024px;
  }

  .film-card {
    margin-top: 10px;
    height: 16rem;
    width: 48%;
  }
}
</style>
