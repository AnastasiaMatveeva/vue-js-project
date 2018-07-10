<template lang="html">
  <div class="search-results">
    <h1>Результаты поиска</h1>
    <FilmCard v-for="film in films"
      :title="film.title"
      :releaseDate="film.releaseDate"
      :img="film.img"
      :id="film.id">
    </FilmCard>
  </div>

</template>

<script>

import LayoutDefault from '../layouts/LayoutDefault.vue';
import FilmCard from '../components/Main/FilmCard.vue';

export default {
  name: 'SearchResults',
  
  components: {
    FilmCard,
  },
  data() {
    return {
      films: this.$parent.films,
    }
  },
  created() {
    this.$emit(`update:layout`, LayoutDefault);
  },

}
</script>

<style lang="css">
</style>
