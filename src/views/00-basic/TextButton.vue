<template>
  <div class="viewCon" ref="con"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import Phaser from 'phaser'

const con = ref<HTMLElement>()
onMounted(() => {
  new Phaser.Game({
    type: Phaser.AUTO,
    parent: con.value,
    width: 800,
    height: 600,
    backgroundColor: 0xff0000,
    scene: [Scene],
  })
})

class Scene extends Phaser.Scene {
  constructor() {
    super('game')
  }
  preload() {}
  create() {}
  update() {}
}
</script>

<style lang="less" scoped>
.viewCon {
}
</style>
