<script setup lang="ts">
</script>

<template>
  <div class="home">
    <RouterLink to="/helloworld">helloworld</RouterLink>
    <RouterLink to="/beginer">beginer</RouterLink>

    <h1>basic</h1>
    <RouterLink to="/00-basic/TextButton">TextButton</RouterLink>

    <h1>animation</h1>
    <RouterLink to="/03-animation/60fpsWalk">60fpsWalk</RouterLink>

    <h1>action</h1>
    <RouterLink to="/04-action/PlaceOnEllipse">PlaceOnEllipse</RouterLink>

    <h1>audio</h1>
    <RouterLink to="/05-audio/AudioSprite">audioSprite</RouterLink>

  </div>
  
</template>

<style lang="less" scoped>
.home{
  padding: 1rem 10rem 2rem 10rem;
  display: flex;
  flex-flow: column nowrap;
  @media screen and (max-width: 576px) {
    padding: 1rem;
  }

  h1{
    padding: 2rem 0rem;
  }
  a{
    padding: 0.3rem 0;
    padding-left: 2rem;
    display: inline-block;
    font-size: 1.2rem;
    color: rgb(132, 132, 132);
    transition: .3s;
    &:link{}
    &:hover{
      color: #fff;
    }
    &:visited{}
    &:active{}
  }
}
</style>
