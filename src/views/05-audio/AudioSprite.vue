<template>
  <div class="viewCon" ref="con"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import Phaser from 'phaser'
import bg from '@/assets/audioSprite/bg.png?url'
import bt from '@/assets/audioSprite/bt.png?url'
import text from '@/assets/audioSprite/nokia16black.png?url'
import textXml from '@/assets/audioSprite/nokia16black.xml?url'
import ogg from '@/assets/audioSprite/fx_mixdown.ogg?url'
import oggJson from '@/assets/audioSprite/fx_mixdown.json?url'

const con = ref<HTMLElement>()
onMounted(() => {
  new Phaser.Game({
    type: Phaser.AUTO,
    parent: con.value,
    width: 800,
    height: 600,
    backgroundColor: 0xff0000,
    scene: [Scene],
    pixelArt: true,
    audio: {
      disableWebAudio: true,
    },
  })
})

class Scene extends Phaser.Scene {
  constructor() {
    super('game')
  }
  preload() {
    this.load.image('title', bg)
    this.load.spritesheet('button', bt, { frameWidth: 80, frameHeight: 20 })
    this.load.bitmapFont('nokia', text, textXml)
    this.load.audioSprite('sfx', oggJson, [ogg])
  }
  create() {
    this.add.image(400, 300, 'title')
    const spritemap = this.cache.json.get('sfx').spritemap
    let i = 0
    for (let spriteName in spritemap) {
      if (spritemap.hasOwnProperty(spriteName)) {
        this.makeButton(spriteName, 680, 115 + i * 40)
        i++
      }
    }

    this.input.on(
      'gameobjectover',
      (pointer: any, button: any) => {
        this.setButtonFrame(button, 0)
      },
      this
    )

    this.input.on(
      'gameobjectout',
      (pointer: any, button: any) => {
        this.setButtonFrame(button, 1)
      },
      this
    )

    this.input.on(
      'gameobjectdown',
      (pointer: any, button: any) => {
        this.sound.playAudioSprite('sfx', button.name)
        this.setButtonFrame(button, 2)
      },
      this
    )

    this.input.on(
      'gameobjectup',
      (pointer: any, button: any) => {
        this.setButtonFrame(button, 0)
      },
      this
    )
  }
  update() {}
  makeButton(name: string, x: number, y: number) {
    const button = this.add.image(x, y, 'button', 1).setInteractive()
    button.name = name
    button.setScale(2, 1.5)
    const text = this.add.bitmapText(x - 40, y - 8, 'nokia', name, 16)
    text.x += (button.width - text.width) / 2
  }
  setButtonFrame(button: any, frame: any) {
    button.frame = button.scene.textures.getFrame('button', frame)
  }
}
</script>

<style lang="less" scoped>
.viewCon {
}
</style>
