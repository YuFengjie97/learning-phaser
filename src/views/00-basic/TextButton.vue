<template>
  <div class="viewCon" ref="con"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import Phaser from 'phaser'
import TextButton from './TextButton'

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
  count: number = 0
  text: Phaser.GameObjects.Text
  bt: TextButton
  constructor() {
    super('game')
  }
  preload() {}
  create() {
    this.text = this.add.text(100, 200, 'cccc', {
      color: '#fff',
    })
    this.bt = new TextButton(this, 100, 100, 'Click Me', () => {
      this.updateText()
    })
    this.add.existing(this.bt)
  }
  update() {}
  updateText() {
    this.text.setText(`click count: ${++this.count}`)
  }
}
</script>

<style lang="less" scoped>
.viewCon {
}
</style>
