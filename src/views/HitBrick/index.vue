<template>
  <div class="viewCon" ref="con"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Game } from 'phaser'
import { Preload } from './Preload'
import { Game as MainGame } from './Game'
import { config } from './config'

const con = ref<HTMLElement>()

function initGame() {
  const { width, height } = config.scene
  const game = new Game({
    width,
    height,
    type: Phaser.AUTO,
    parent: con.value,
    canvasStyle: `margin: 0 auto`,
    scene: [Preload, MainGame],
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
      },
    },
  })
}

onMounted(() => {
  initGame()
})
</script>

<style lang="less" scoped>
.viewCon {
}
</style>
