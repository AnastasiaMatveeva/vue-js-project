import Vue from 'vue'
import Router from 'vue-router'

import Films from './views/Films.vue'
import Series from './views/Series.vue'
import FilmInfo from './components/Main/FilmInfo.vue'
import SearchResults from './views/SearchResults.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // дефолтная страница при откыртии сайта
      path: '/',
      name: 'Films',
      component: Films
    },
    {
      // страница с отображением сериалов
      path: '/series',
      name: 'Series',
      component: Series
    },
    {
      // страница с подробным описанием фильма по клику на Блок Фильма
      path: '/info',
      name: 'FilmInfo',
      component: FilmInfo
    },
    {
      // страница с результатами поиска
      path: '/search-results',
      name: 'SearchResults',
      component: SearchResults
    }
  ]
})
