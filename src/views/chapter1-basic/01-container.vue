<template>
  <div class="pixiCon" ref="pixiCon"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import * as PIXI from 'pixi.js'

import bunnyImg from '@/assets/img/texture/bunny.png'

const pixiCon = ref<HTMLElement>()

let app: PIXI.Application
let container: PIXI.Container

onMounted(() => {
  initApp()
  initContainer()
  initSprite()
  setContainer()
  animate()
})

function animate() {
  app.ticker.add((delta) => {
    container.rotation -= 0.01 * delta
  })
}

function initApp() {
  const { width, height } = pixiCon.value?.getBoundingClientRect()!
  app = new PIXI.Application({ background: '#1099bb', width, height })
  pixiCon.value!.appendChild(app.view as HTMLCanvasElement)
}

function initContainer() {
  container = new PIXI.Container()
  app.stage.addChild(container)
}
const texture = PIXI.Texture.from(bunnyImg)
function initSprite() {
  for (let i = 0; i < 25; i++) {
    const bunny = new PIXI.Sprite(texture)
    bunny.anchor.set(0.5)
    bunny.x = (i % 5) * 40
    bunny.y = Math.floor(i / 5) * 40
    container.addChild(bunny)
  }
}
function setContainer() {
  container.x = app.screen.width / 2
  container.y = app.screen.height / 2
  container.pivot.x = container.width / 2
  container.pivot.y = container.height / 2
}
</script>
