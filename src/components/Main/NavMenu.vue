<template lang="html">
  <div class="nav-menu">
    <router-link class="link-to" active-class="active" :to="{ name: 'Films', params: {} }">фильмы</router-link>
    <router-link class="link-to" active-class="active" :to="{ name: 'Series', params: {} }">сериалы</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavMenu'
}
</script>

<style lang="css" scoped>
.nav-menu {
  width: 100%;
  height: 34px;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.8);
  border-top: none;
  background: #fff;
}

.link-to {
  margin: 0 5px;
  width: 90px;
  color: #000;
  line-height: 32px;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
}

.link-to:hover {
  color: #77c1bb;
}

.router-link-active,
.router-link-exact-active {
  color: #77c1bb;
  border-bottom: 2px solid #000;
}
</style>
