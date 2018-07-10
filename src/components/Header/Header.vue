<template lang="html">
  <div class="header">
    <div class="head">
      <button class="header_btn" @click="show = !show">
        <ion-icon name="menu">---</ion-icon>
        </button>

      <Sidebar :show="show" v-show="show" @changeShow="show = !show"></Sidebar>

      <div class="find">
        <a href="" class="line">
          <img src="../../assets/logo.png" alt ="#">Mooogle</a>
        <a class="right">
          <img src="../../assets/loop.png" alt ="#">
          <input class="search" placeholder="Search"
            v-model="searchValue"
            @keyup.enter="func">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
//import Search from '@/components/Header/Search.vue'
import Sidebar from './Sidebar.vue'

export default {
  name: 'Header',
  components: {
    //Search,
    Sidebar
  },
  data() {
    return {
      show: false,
      searchValue: '',
      results: [],
    }
  },
  props: ['func'],
  methods: {
    goToSearchResults() {
      // this.$router.push({name: 'SearchResults', params: { searchValue: this.searchValue }});
      // this.$router.push({name: 'SearchResults'});
      // this.getSearchResults();
      // this.searchValue = '';
    },


  }
}
</script>

<style lang="css" scoped>
  .head {
    /* position: fixed; */
    /* z-index: 2; */
    /* width: 100%; */
    height: 65px;
    background-color: #77c1bb;
    user-select: none;
  }

  .header_btn {
   background-color: transparent;
   border: 0;
   width: 40px;
   height: 40px;
   font-size: 30px;
   outline: none;
   color: #372c47;
   cursor: pointer;
   border-radius: 50%;
   transition: all .3s ease-in-out;
       margin: 13px 19px 0 13px;
 }


  .find {
       margin-top: -32px;
    margin-left: 44px;
    padding-bottom: 2px;
    display: flex;
  }

  .line {
    color: #3f3f57;
    margin: 100px auto;
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: none;
  }

  img{
    padding-right: 8px;
  }
  .search {
    border: none;
    outline: none;
    background-color: #77c1bb;
    border-bottom: 1.5px solid #5b7f88;
    text-decoration: none;
    width:110px;
    color: #3f3f57;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .right {
    margin-left: inherit;
    float: right;
  }

  @media screen and (min-width : 768px){

  .line {
    margin-top: -7px;
    margin-left: 60px;
    display: inline;
  }

  .find {
    width: 86%;
    margin-left: 12px;
    margin-right:7px;
  }

  .icon-inner, svg {
    margin-top: 3px;
}

  .right[data-v-70fccefc] {
      margin-top: -1px;
      margin-right: -71px;
  }

  }

</style>
