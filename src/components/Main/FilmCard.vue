<template lang="html">
  <div class="film-card"
      :style="{ backgroundImage: 'url(' + img + ')' }"
      @click="toFilm">

    <h3 class="film-card_title">{{title}} ({{releaseDate}})</h3>
  </div>
</template>

<script>
export default {
  name: 'FilmCard',
  props: ['id', 'title', 'img', 'releaseDate', 'typeTV'],
  methods: {
    toFilm() {
      this.$router.push({name: 'FilmInfo', params: { id: this.id, typeTV: this.typeTV}});
      localStorage.setItem('id', this.id);
      localStorage.setItem('typeTV', this.typeTV);
    }
  }
}
</script>

<style lang="css">
.film-card:hover {
  cursor: pointer;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.9);
}

.film-card_title {
  text-shadow: 0px 0px 4px #000;
}
</style>
