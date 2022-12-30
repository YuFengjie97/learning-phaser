<template>
  <div class="pixiCon" ref="pixiCon"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import * as PIXI from 'pixi.js'

import bunnyImg from '@/assets/img/texture/bunny.png'

const pixiCon = ref<HTMLElement>()

let app: PIXI.Application
const bunny = PIXI.Sprite.from(bunnyImg);

onMounted(() => {
  initApp()
  initSprite()
  animate()
})

function animate() {
  app.ticker.add((delta) => {
    bunny.rotation -= 0.1 * delta
  })
}

function initApp() {
  const { width, height } = pixiCon.value?.getBoundingClientRect()!
  app = new PIXI.Application({ width, height, backgroundAlpha:0 })
  pixiCon.value!.appendChild(app.view as HTMLCanvasElement)
}

function initSprite() {
  bunny.x = app.screen.width / 2
  bunny.y = app.screen.height / 2
  bunny.anchor.set(0.5)
  app.stage.addChild(bunny)
}
</script>

<style lang="less" scoped>
.viewCon {
  height: 100%;
  width: 100%;
  // overflow: hidden;
}
</style>
