<template lang="html">
  <div class = "footer">
    <ul>
      <li>
        <div class="block__social-media">
          <a href="https://www.facebook.com" target="_blank"><img src="../../assets/facebook.png" alt ="#"></a>
          <a href="https://www.youtube.com" target="_blank"><img src="../../assets/you.png" alt = "#"></a>
          <a href="https://www.googleplus.com" target="_blank"><img src="../../assets/Goo.png" alt ="#"></a>
          <a href="https://www.instagram.com" target="_blank"><img src="../../assets/inst.png" alt ="#"></a>
        </div>
          </li>
    <li>
      <ul class = "add">
          <li> Главная </li>
          <li> Контакты </li>
          <li> Правообладателям </li>
        </ul>
      </li>
    </ul>
    </div>
  
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="css" scoped>
  .footer {
/* position: absolute; */
    bottom: 0px;
    width: 100%;
    height: 86px;
    left: 0px;
    background-color: #77c1bb;
    vertical-align: top;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-family: 'Roboto regular', sans-serif;
}

  li {
    display: inline;
    word-spacing: 22px;
    color: #506c76;
    font-size: 14px;
}

  .block__social-media {
    vertical-align: middle;
    text-align: center;
    word-spacing: 50px;
    margin-bottom: 18px;
    margin-top: 15px;
}

  a {
    text-decoration: none;
    padding-right:20px;
}

  .add {
    margin-bottom: 15px;
    padding-left: 0px;
}

</style>
