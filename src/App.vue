<template lang="html">
  <div id="app">
    <!-- Для проверки работы Vue Cli -->
    <component :is="layout">
      <router-view :layout.sync="layout"/>
    </component>
    <!-- Раскомитить по мере заполенения файлов -->
    <!-- <Header></Header> -->
    <!-- <Main></Main> -->
    <!-- <Footer></Footer> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// Раскомитить по мере заполенения файлов
// import Header from './components/Header/Header.vue';
// import Main from '@/components/Main/Main.vue'
// import Footer from '@/components/Footer/Footer.vue'

  export default {
    name: 'App',
    data() {
      return {
        layout: `div`,
      };
    },

  }
</script>

<style lang="scss">
// Reset CSS
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
	text-decoration: none;
}
// other style
body {
  background: #fff;
}
</style>
