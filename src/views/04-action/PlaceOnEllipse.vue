<template>
  <div class="viewCon" ref="con"></div>
</template>

<script lang="ts" setup>
/**
 * Actions，将一组具有x，y属性的obj按照某个几何体信息排布，
 * 第一个参数可以是个包含了多个obj的arr，第二个参数是几何体，
 * 
 * 使用tween对几何体顶点位置的更新
 * 
 * update中不断通过几何体位置，通过action来更新精灵位置
 */
import { onMounted, ref } from 'vue'
import Phaser from 'phaser'

import { getUrl } from '@/utils';

const con = ref<HTMLElement>()
onMounted(() => {
  new Phaser.Game({
    type: Phaser.AUTO,
    parent: con.value,
    width: 800,
    height: 600,
    backgroundColor: 0x444444,
    scene: [Scene],
  })
})

class Scene extends Phaser.Scene {
  private ellipse: Phaser.Geom.Ellipse
  private group: Phaser.GameObjects.Group
  constructor() {
    super('game')
  }
  preload() {
    this.load.image('ball', getUrl('ball.png'))
  }
  create() {
    this.ellipse = new Phaser.Geom.Ellipse(400, 300, 200, 500)
    // group函数重载真多，config对象需要断言
    this.group = this.add.group({ key: 'ball', frameQuantity: 48 } as Phaser.Types.GameObjects.Group.GroupCreateConfig)
    Phaser.Actions.PlaceOnEllipse(this.group.getChildren(), this.ellipse)
    this.tweens.add({
      targets: this.ellipse,
      width: 700,
      height: 100,
      delay: 1000,
      duration: 2000,
      ease: 'Sine.easeInOut',
      repeat: -1,
      yoyo: true
    })

  }
  update() {
    Phaser.Actions.PlaceOnEllipse(this.group.getChildren(),this.ellipse)
  }
}
</script>

<style lang="less" scoped>
.viewCon {
}
</style>
