<template>
  <div class="viewCon" ref="con"></div>
</template>

<script lang="ts" setup>
import Phaser from 'phaser'
import { onMounted, ref } from 'vue'
import { getUrl } from '@/utils'

const con = ref<HTMLElement>()
let screanWidth: number
let screanHeight: number

onMounted(() => {
  const { width, height } = con.value?.getBoundingClientRect()!
  screanWidth = width
  screanHeight = height
  const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent: con.value,
    width,
    height,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 },
      },
    },
    scene: {
      preload,
      create,
    },
  })
})

function preload(this: Phaser.Scene) {
  this.load.image('sky', getUrl('01-helloworld/space3.png'))
  this.load.image('logo', getUrl('01-helloworld/phaser3-logo.png'))
  this.load.image('red', getUrl('01-helloworld/red.png'))
}

function create(this: Phaser.Scene) {
  const bg = this.add.image(screanWidth / 2, screanHeight / 2, 'sky')
  bg.displayWidth = screanWidth
  bg.displayHeight = screanHeight
  
  const particles = this.add.particles('red')
  const emitter = particles.createEmitter({
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: 'ADD',
  })
  const logo = this.physics.add.image(400, 100, 'logo')
  logo.setVelocity(100, 200)
  logo.setBounce(1, 1)
  logo.setCollideWorldBounds(true)

  emitter.startFollow(logo)
}
</script>

<style lang="less" scoped>
.viewCon {
}
</style>
