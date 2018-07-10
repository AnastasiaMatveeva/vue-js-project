<template lang="html">
  <div class="LayoutDefault">
    <Header :func="getSearchResults"></Header>
    <main class="LayoutDefault__main">
      <slot/>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header/Header.vue';
import Footer from '../components/Footer/Footer.vue';

export default {
  name: 'LayoutDefault',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      films: []
    }
  },
  methods: {
    getSearchResults(e) {
      fetch(`https://api.themoviedb.org/3/search/multi?api_key=624f7df45767c9a0ff7b6bf3107182d5&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
      .then(response => response.json())
      .then(response => {
        this.films = response.results.filter(item => item.media_type === 'tv' || item.media_type === 'movie');
        console.log(this.films);
        this.$router.push({name: 'SearchResults'});
      })
      .catch(error => {
        console.error("Error: ", error);
      })
    }
  }
}
</script>

<style lang="css">
</style>
