<template>
  <div class="pixiCon" ref="pixiCon"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import * as PIXI from 'pixi.js'
import {Vector} from 'p5'
import eggHead from '@/assets/img/texture/eggHead.png'

const { random, sin, cos, PI } = Math

const pixiCon = ref<HTMLElement>()
let app: PIXI.Application
const aliens: Alien[] = []
const alienNum = 50

onMounted(() => {
  initApp()
  animate()
  initAliens()
})

function animate() {
  app.ticker.add(() => {
    aliens.forEach(a=>{
      a.update()
    })
  })
}

function initApp() {
  const { width, height } = pixiCon.value?.getBoundingClientRect()!
  app = new PIXI.Application({ width, height, backgroundAlpha: 0 })
  pixiCon.value!.appendChild(app.view as HTMLCanvasElement)
}

class Alien {
  sprite: PIXI.Sprite
  pos: Vector
  speed: Vector
  rotateSpeed: number
  constructor() {
    const s = PIXI.Sprite.from(eggHead)
    this.pos = new Vector(
      random() * app.screen.width,
      random() * app.screen.height
    )
    this.speed = new Vector(random() * 2 - 1, random() * 2 - 1)
    this.rotateSpeed = random()*0.02 + 0.01
    this.sprite = s
    s.anchor.set(0.5)
    s.x = this.pos.x
    s.y = this.pos.y
    s.tint = random() * 0xffffff
    s.scale.set(0.8 + random() * 0.3)
    s.rotation = PI * random()
    app.stage.addChild(s)
  }
  update() {
    this.edge()
    this.move()
    this.rotate()
  }
  move() {
    this.pos.add(this.speed)
    this.sprite.x = this.pos.x
    this.sprite.y = this.pos.y
  }
  rotate(){
    this.sprite.rotation += this.rotateSpeed
  }
  edge() {
    if (this.pos.x <= 0 || this.pos.x >= app.screen.width) {
      this.speed.x *= -1
    }
    if (this.pos.y <= 0 || this.pos.y >= app.screen.height) {
      this.speed.y *= -1
    }
  }
}

function initAliens() {
  for (let i = 0; i < alienNum; i++) {
    const alien = new Alien()
    aliens.push(alien)
  }
}
</script>
