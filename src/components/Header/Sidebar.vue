<template lang="html">
  <aside class="sidebar" v-show="show" v-bind:class="{slide: slide}">
    <div class="wrapMain">
        <div class="sidebarHeader">
          <div class="sidebarLogo">
            <a href=""><img src="@/assets/logo big.png" alt="logo"></a>
            <h1>Mooogle </h1>
          </div>
        </div>
        <div class="menyWrap">
          <ul>
            <router-link :to="{ name: 'Films', params: {} }" tag="li" class="iconn1">
              <img class="icon1" src="@/assets/icon1-mobile360.png" alt="logo">
              <img class="icon2" src="@/assets/icon1-mobile480.png" alt="logo">Фильмы</router-link>
                <ul>
                  <router-link :to="{ name: 'subcategory1', params: {} }" tag="li" class="subcategory1">Подкатегория 1</router-link>
                  <router-link :to="{ name: 'subcategory2', params: {} }" tag="li" class="subcategory1">Подкатегория 2</router-link>
                  <router-link :to="{ name: 'subcategory3', params: {} }" tag="li" class="subcategory1">Подкатегория 3</router-link>
                  <router-link :to="{ name: 'subcategory4', params: {} }" tag="li" class="subcategory1">Подкатегория 4</router-link>
                </ul>
            <router-link :to="{ name: 'Series', params: {} }" tag="li"  class="iconn2">
              <img class="icon1" src="@/assets/icon2-mobile360.png" alt="logo">
              <img class="icon2" src="@/assets/icon2-mobile480.png" alt="logo">Сериалы</router-link>
                  <router-link :to="{ name: 'subcategory1', params: {} }" tag="li" class="subcategory2">Подкатегория 1</router-link>
                  <router-link :to="{ name: 'subcategory2', params: {} }" tag="li" class="subcategory2">Подкатегория 2</router-link>
                  <router-link :to="{ name: 'subcategory3', params: {} }" tag="li" class="subcategory2">Подкатегория 3</router-link>
            <router-link :to="{ name: 'Favorites', params: {} }" tag="li"  class="iconn3">
              <img class="icon1" src="@/assets/icon3-mobile360.png" alt="logo">
              <img class="icon2" src="@/assets/icon3-mobile480.png" alt="logo">Избранное</router-link>
          </ul>
        </div>
    </div>
    <!-- <div class="overlay" @click="show = !show"></div> -->
    <div class="overlay" @click="changeShow"></div>
  </aside>
</template>

<script>

export default {
  name: 'Sidebar',
  props: ['show'],
  data() {
    return {
      slide: true,
    }
  },
  methods: {
    changeShow() {
      this.$emit('changeShow', this.show);
      this.show = !this.show;
    }
  }
}
</script>

<style lang="css">

  .sidebarWrapper{
    width: 100%;
  }

  .wrapMain{
    background-color: #fff;
    width: 304px;
    height: 100%;
    z-index: 1;
    box-shadow:  12px 0px 22px rgba(0,0,0,0.23);
        padding-top: 300px;
  }
  .sidebar {
    position: fixed;
    display: flex;
    width: 100%;
    top: 65px;
    left: 0;
    bottom: 0;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    align-items: stretch;
    z-index: 100;
  }

    .menyWrap{
          margin-left: 9px;
    }
    .overlay{
      flex: 1;
      /* background: red;
      opacity: 0.5; */
    }

    .sidebarHeader{
    background-color: #77c1bb;
    width: 257px;
    height: 144px;
    margin-top: -343px;
    /* position: absolute */
    display: none;
  }

   .sidebarLogo{
     display: none;
   }
  .icon1{
    padding-right: 34px;
  }
  .iconn1{
    margin-top: -290px;
  }

  .iconn2{
    padding: 27px 0 27px 0;
  }

  .iconn1, .iconn2, .iconn3{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: #372c48;
  }

  .subcategory1{
    padding-left: 60px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 12px;
    color: #372c48;
  }

  .subcategory2{
    display: none;
    padding-left: 77px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    color: #372c48;
  }
  .slide-transition {
    transition: all 1.s cubic-bezier(.65, .05, .36, 1);
  }

  .slide-enter, .slide-leave {
    left: -100%;
  }

  ul{
    margin-left: 16px;
  }

  li{
    padding-top: 11px;
    cursor: pointer;
  }

  li:hover{
    color: #77c1bb;
  }

   .icon2{
    display: none;
  }

  @media screen and (min-width : 360px) {

     /* .sidebar{
       width: 304px;
     } */

     ul {
    margin-left: 22px;
    }
     .icon1{
      display: none;
    }

    .icon2{
    display: inline-block;
    padding-right: 43px;
    }

    .iconn1, .iconn2, .iconn3{
    font-size: 17.5px;
  }

  .subcategory1{
    font-size: 15px;
  }

  @media screen and (min-width : 960px) {

    .wrapMain{
    width: 257px;
    padding-top: 0;
  }

  .sidebar {
    top: 0;
    }

    .sidebarHeader{
    margin-top: 0px;
    display: block;
  }
     .sidebarLogo{
    padding-top: 21px;
    margin-left: 38px;
     display: block;
  }

  .sidebarLogo h1{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
  }

  .menyWrap{
    margin-top: 309px;
  }
    ul {
    margin-left: 16px;
    margin-right: 30px;
  }

  li {
    padding-top: 9px;
  }

  .iconn2 {
    padding: 27px 0 12px 0;
  }

  .subcategory2{
    display: block;
  }
  .subcategory1, .subcategory2 {
    font-size: 10px;
  }


  .iconn1, .iconn2, .iconn3{
    font-size: 13px;
  }

  .iconn1{
    margin-bottom: 10px;
  }

  .icon2{
    display: none;
    }

  .icon1{
    display: inline-block;
  }
  }

  }
</style>
