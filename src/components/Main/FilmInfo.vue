<template lang="html">
  <div class="film">
    <div class="img-block">
      <img class="img" :src="posterPath" alt="IMAGE">
      <h2 class="heading first-title">{{title}}</h2>
    </div>
    <div class="film-info">
      <h2 class="heading second-title">{{title}}</h2>
      <ul class="film-info-list">
        <li class="film-info-item">
          <p class="list-heading">страна</p>
          <p class="list-content">{{country}}</p>
        </li>
        <li class="film-info-item">
          <p class="list-heading">слоган</p>
          <p class="list-content">{{tagline}}</p>
        </li>
        <li class="film-info-item">
          <p class="list-heading">режиссер</p>
          <p class="list-content">-</p>
        </li>
        <li class="film-info-item">
          <p class="list-heading">сценарий</p>
          <p class="list-content">-</p>
        </li>
        <li class="film-info-item">
          <p class="list-heading">жанр</p>
          <p class="list-content">-</p>
        </li>
        <li class="film-info-item">
          <p class="list-heading">год</p>
          <p class="list-content">{{releaseDate.slice(0,4)}}</p>
        </li>
      </ul>
      <h2 class="heading about-film">Про фильм</h2>
      <p class="film-info-description">{{overview}}</p>
    </div>
  </div>
</template>

<script>

const imgUrl = 'https://image.tmdb.org/t/p/w780';

// import EventBus from '../../event-bus.js';
import LayoutDefault from '../../layouts/LayoutDefault.vue';

export default {
  name: 'FilmInfo',

  data() {
    return {
      id: parseInt(this.$route.params.id || localStorage.getItem('id')),
      typeTV: this.$route.params.typeTV || localStorage.getItem('typeTV'),
      title: '',
      overview: '',
      posterPath: '',
      img: '',
      tagline: '',
      country: '',
      releaseDate: ''
    }
  },
  created() {
    this.$emit(`update:layout`, LayoutDefault);
    this.getFilmInfo();
  },
  methods: {
    getFilmInfo() {
      fetch(`https://api.themoviedb.org/3/${this.typeTV}/${this.id}?api_key=624f7df45767c9a0ff7b6bf3107182d5&language=en-US`)
      .then(response => response.json())
      .then(response => {
        this.title = response.title || response.name;
        this.overview = response.overview;
        this.posterPath = `${imgUrl}${response.poster_path}`;
        this.img = `${imgUrl}${response.backdrop_path}`;
        this.tagline = response.tagline || '-',
        this.country = response.origin_country ? response.origin_country[0] : response.production_countries[0]['name'],
        this.releaseDate = response.release_date || response.first_air_date
      })
      .catch(error => {console.error("Error: ", error);})
    }
  }
}
</script>

<style lang="css" scoped>
.film {
  min-width: 320px;
  max-width: 480px;
  margin: 0 auto;
  padding: 24px 13px;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}

.heading {
  font-size: 20px;
  font-weight: 500;
}

.img-block {
  height: auto;
  user-select: none;
  margin-bottom: 25px;
  position: relative;
  z-index: 0;
}

.img {
  width: 100%;
  height: auto;
}

.first-title {
  color: #fff;
  position: absolute;
  bottom: 10px;
  left: 10px;
}

.film-info {
  display: flex;
  flex-direction: column;
}

.second-title {
  color: #000;
}

.film-info-list {
  margin: 0 0 20px;
  display: flex;
  user-select: none;
  flex-direction: column;
}

.list-heading {
  width: 90px;
}

.film-info-item {
  padding: 6px 0 6px 20px;
  margin: 0;
  display: flex;
  box-sizing: border-box;
}

.film-info-item:nth-child(2n+1) {
  background: #addad6;
}

.about-film {
  user-select: none;
}

.film-info-description {
  line-height: 1.4;
}

@media screen and (min-width: 0px) {
  .second-title {
    display: none;
  }

  .about-film {
    display: none;
    margin: 0 0 12px;
  }
}

@media screen and (min-width: 480px) {
  .list-heading {
    width: 120px;
  }
}

@media screen and (min-width: 768px) {
  .film {
    max-width: 1024px;
    padding: 24px 30px;
    font-size: 18px;
    flex-direction: row;
  }

  .img-block {
    flex-basis: 34%;
    height: auto;
    margin: 0 20px 0 0;
  }

  .img {
    width: 100%;
    height: auto;
  }

  .first-title {
    display: none;
  }

  .second-title {
    margin: 0 0 25px 0;
    display: inherit;
  }

  .film-info-list {
    margin: 0 0 25px;
    display: inherit;
  }

  .film-info {
    flex-basis: 66%;
  }

  .about-film {
    display: inherit;
  }
}

@media screen and (min-width: 1024px) {
  /* .film {
    font-size: 18px;
  } */
}
</style>
