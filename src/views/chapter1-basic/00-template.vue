<template>
  <div class="pixiCon" ref="pixiCon"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import * as PIXI from 'pixi.js'

const { random, sin, cos, PI } = Math

const pixiCon = ref<HTMLElement>()
let app: PIXI.Application

initSprite()
onMounted(() => {
  initApp()
  animate()
})

function animate() {
  app.ticker.add(() => {})
}
function initSprite(){}
function initApp() {
  const { width, height } = pixiCon.value?.getBoundingClientRect()!
  app = new PIXI.Application({ width, height, backgroundAlpha: 0 })
  pixiCon.value!.appendChild(app.view as HTMLCanvasElement)
}
</script>
