<template>
  <div class="viewCon" ref="con"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import Phaser from 'phaser'
import { config } from './config'
import Preload from './Preload'
import Game from './Game'

const con = ref<HTMLElement>()

onMounted(() => {
  const { width, height } = config.scene
  const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent: con.value,
    width,
    height,
    backgroundColor: 0xff0000,
    scene: [Preload, Game],
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
          y: config.scene.gravity,
        },
        debug: false,
      },
    },
  })
  const { innerWidth, innerHeight } = window
  if (innerWidth < innerHeight) {
    game.canvas.style.cssText = `width: ${innerWidth}px; height: ${innerHeight}px; margin: 0 auto`
  } else {
    let w = (width / height) * innerHeight
    game.canvas.style.cssText = `width: ${w}px; height: ${innerHeight}px; margin: 0 auto`
  }
})
</script>

<style lang="less" scoped>
.viewCon {
}
</style>
