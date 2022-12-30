<script setup lang="ts">
</script>

<template>
  <div class="home">
    <h1>Basic</h1>
    <RouterLink to="/chapter1/01-container">01-container</RouterLink>
    <RouterLink to="/chapter1/02-transparentBackground">02-transparentBackground</RouterLink>
    <RouterLink to="/chapter1/03-tinting">03-tinting</RouterLink>
    <RouterLink to="/chapter1/04-cacheAsBitmap">04-cacheAsBitmap</RouterLink>
    
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
