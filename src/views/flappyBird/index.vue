<template>
  <div class="viewCon" ref="con"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import Phaser from 'phaser'
import bgDay from '@/assets/flappyBird/sprites/background-day.png?url'

const con = ref<HTMLElement>()
const width = 288
const height = 512
onMounted(() => {
  new Phaser.Game({
    type: Phaser.AUTO,
    parent: con.value,
    width: 288,
    height: 512,
    backgroundColor: 0xff0000,
    scene: [Scene],
  })
})

class Scene extends Phaser.Scene {
  bg: Phaser.GameObjects.TileSprite
  constructor() {
    super('game')
  }
  preload() {
    this.load.image('bgDay', bgDay)
    this.load.image('bird', )
  }
  create() {
    this.bg = this.add.tileSprite(0,0,width,height, 'bgDay').setOrigin(0,0)
  }
  update() {
    this.bg.tilePositionX += 1
  }
}
</script>

<style lang="less" scoped>
.viewCon {
}
</style>
