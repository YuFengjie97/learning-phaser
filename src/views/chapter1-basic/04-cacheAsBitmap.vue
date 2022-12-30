<template>
  <div class="pixiCon" ref="pixiCon"></div>
</template>

<script lang="ts" setup>
/**
 * cacheAsBitmap缓存位图，为复杂静态显示对象提供性能优势
 * monster.json是对monster.png材质的位置说明，
 * 在回调中可以直接调用，通过json里的key名，
 * 这个回调就好像形成了一个域，通过图片key名直接访问到
 * 
 */
import { onMounted, ref } from 'vue'
import * as PIXI from 'pixi.js'
import monstersJson from '@/assets/img/texture/monsters/monsters.json?url'

const { random, sin, cos, PI } = Math

const pixiCon = ref<HTMLElement>()
let app: PIXI.Application
let spriteCon: PIXI.Container
const aliensNum = 100
const aliens: PIXI.Sprite[] = []
const alienFrames = [
  'eggHead.png',
  'flowerTop.png',
  'helmlok.png',
  'skully.png',
]

onMounted(() => {
  initApp()
  app.stop()
  initSprite()
  app.start()
  animate()
})

let scaleStep = 0
let rotateStep = 0
let rotateStep2 = 0
let isSpriteRotate = true
function animate() {
  app.ticker.add(() => {
    // spriteCon的旋转与缩放
    scaleStep += 0.01
    rotateStep += 0.01
    spriteCon.rotation = rotateStep
    spriteCon.scale.set(sin(scaleStep))

    if (isSpriteRotate) rotateStep2 += 0.1
    // sprite的旋转
    aliens.forEach((a) => {
      a.rotation = rotateStep2
    })
  })
}

function handleClick(){
  // isSpriteRotate = !isSpriteRotate
  spriteCon.cacheAsBitmap = !spriteCon.cacheAsBitmap
}

function initSprite() {
  spriteCon = new PIXI.Container()
  spriteCon.position.x = app.screen.width / 2
  spriteCon.position.y = app.screen.height / 2
  app.stage.addChild(spriteCon)
  PIXI.Assets.load(monstersJson).then(function () {
    for (let i = 0; i < aliensNum; i++) {
      const frameName = alienFrames[i % 4]
      const alien = PIXI.Sprite.from(frameName)
      alien.tint = random() * 0xffffff
      alien.x = random() * 800 - 400
      alien.y = random() * 800 - 400
      alien.anchor.x = 0.5
      alien.anchor.y = 0.5
      aliens.push(alien)
      spriteCon.addChild(alien)
    }
  })
}

function initApp() {
  const { width, height } = pixiCon.value?.getBoundingClientRect()!
  app = new PIXI.Application({ width, height, backgroundAlpha: 0 })
  pixiCon.value!.appendChild(app.view as HTMLCanvasElement)
  app.stage.interactive = true // 允许app交互

  app.stage.on('pointertap', handleClick)
}
</script>
