<template>
  <h2>NIE MA TAKIEJ STRONY</h2>
  <div class="img-container">
    <img class="not-found-img" src="../assets/404.jpg" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h2{
  color: tomato;
  font-size: 3rem;
}
  .img-container{
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .not-found-img{
    width: 100%;
    height: auto;
  }
</style>