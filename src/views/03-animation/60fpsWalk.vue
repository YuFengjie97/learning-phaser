<template>
  <div class="viewCon" ref="con"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import Phaser from 'phaser'

import { getUrl } from '@/utils'

const con = ref<HTMLElement>()

onMounted(() => {
  new Phaser.Game({
    type: Phaser.AUTO,
    parent: con.value,
    width: 800,
    height: 600,
    backgroundColor: 0xff0000,
    scene: Scene,
  })
})

class Scene extends Phaser.Scene {
  private bg: Phaser.GameObjects.TileSprite | undefined = undefined
  private trees: Phaser.GameObjects.TileSprite | undefined = undefined
  constructor() {
    super('Game')
  }
  preload() {
    this.load.atlas('walker', getUrl('03-60fpsWalk/walker.png'), getUrl('03-60fpsWalk/walker.json'))
    this.load.image('sky', getUrl('03-60fpsWalk/sky.png'))
    this.load.image('trees', getUrl('03-60fpsWalk/trees.png'))
  }
  create() {
    this.bg = this.add.tileSprite(0, 38, 800, 296, 'sky').setOrigin(0, 0)
    this.trees = this.add.tileSprite(0, 280, 800, 320, 'trees').setOrigin(0, 0)

    const animConfig = {
      key: 'walk',
      frames: 'walker',
      frameRate: 60,
      repeat: -1,
    }
    this.anims.create(animConfig)
    const sprite = this.add.sprite(400, 484, 'walker', 'frame_0000')
    sprite.play('walk')
  }
  update() {
    this.bg!.tilePositionX -= 2
    this.trees!.tilePositionX -= 6
  }
}
</script>

<style lang="less" scoped>
.viewCon {
}
</style>
