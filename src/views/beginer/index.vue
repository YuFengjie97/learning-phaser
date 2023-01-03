<template>
  <div class="viewCon" ref="con"></div>
</template>

<script lang="ts" setup>
import Phaser from 'phaser'
import { onMounted, ref } from 'vue'
import bombUrl from '@/assets/02-beginer/bomb.png?url'
import dudeUrl from '@/assets/02-beginer/dude.png?url'
import platformUrl from '@/assets/02-beginer/platform.png?url'
import skyUrl from '@/assets/02-beginer/sky.png?url'
import starUrl from '@/assets/02-beginer/star.png?url'

const con = ref<HTMLElement>()
let scene: Phaser.Scene

let gameOver = false
let sky: Phaser.GameObjects.Image
let platforms: Phaser.Physics.Arcade.StaticGroup
let player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
let stars: Phaser.Physics.Arcade.Group
let bombs: Phaser.Physics.Arcade.Group
let cursors: Phaser.Types.Input.Keyboard.CursorKeys
let score = 0
let scoreText: Phaser.GameObjects.Text

onMounted(() => {
  const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent: con.value,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false,
      },
    },
    scene: {
      preload,
      create,
      update,
    },
  })
})
function preload(this: Phaser.Scene) {
  scene = this
  scene.load.image('sky', skyUrl)
  scene.load.image('ground', platformUrl)
  scene.load.image('star', starUrl)
  scene.load.image('bomb', bombUrl)
  scene.load.spritesheet('dude', dudeUrl, {
    frameWidth: 32,
    frameHeight: 48,
  })
}
function create() {
  initSky()
  initScoreText()
  initPlatforms()
  initPlayer()
  initStars()
  initBombs()
  initCollider()
  initControl()
}
function update(this: Phaser.Scene) {
  if (cursors.left.isDown) {
    player.setVelocityX(-160)
    player.anims.play('left', true)
  } else if (cursors.right.isDown) {
    player.setVelocityX(160)
    player.anims.play('right', true)
  } else {
    player.setVelocityX(0)
    player.anims.play('turn')
  }

  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-530)
  }
}

function initScoreText() {
  scoreText = scene.add.text(16, 16, 'score: 0', {
    fontSize: '32px',
    color: '#000',
  })
}
function initSky() {
  sky = scene.add.image(400, 300, 'sky')
}
function initPlatforms() {
  platforms = scene.physics.add.staticGroup()
  platforms.create(400, 568, 'ground').setScale(2).refreshBody()
  platforms.create(600, 400, 'ground')
  platforms.create(50, 250, 'ground')
  platforms.create(750, 220, 'ground')
}
function initPlayer() {
  player = scene.physics.add.sprite(100, 450, 'dude')
  player.setBounce(0.2)
  player.setCollideWorldBounds(true)
  scene.anims.create({
    key: 'left',
    frames: scene.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1,
  })
  scene.anims.create({
    key: 'turn',
    frames: [{ key: 'dude', frame: 4 }],
    frameRate: 20,
  })
  scene.anims.create({
    key: 'right',
    frames: scene.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1,
  })
  player.body.setGravityY(300)
}
function initStars() {
  stars = scene.physics.add.group({
    key: 'star',
    repeat: 11,
    setXY: { x: 12, y: 0, stepX: 70 },
  })

  stars.children.iterate(function (child: Phaser.GameObjects.GameObject) {
    // 看文档猜的是这个类型
    ;(child as Phaser.Physics.Arcade.Sprite).setBounceY(
      Phaser.Math.FloatBetween(0.4, 0.8)
    )
  })
}
function initCollider() {
  scene.physics.add.collider(stars, platforms)
  scene.physics.add.collider(player, platforms)
  scene.physics.add.overlap(player, stars, collectStar, undefined, scene)
}
function initBombs() {
  bombs = scene.physics.add.group()
  scene.physics.add.collider(bombs, platforms)
  scene.physics.add.collider(player, bombs, hitBomb, undefined, scene)
}

function hitBomb(player: any, bomb: any) {
  scene.physics.pause()
  player.setTint(0xff0000)
  player.anims.play('turn')
  gameOver = true
}

function collectStar(player: any, star: any) {
  star.disableBody(true, true)
  score += 10
  scoreText.setText('Score: ' + score)

  if (stars.countActive(true) === 0) {
    stars.children.iterate(function (child: any) {
      child.enableBody(true, child.x, 0, true, true)
    })

    const x =
      player.x < 400
        ? Phaser.Math.Between(400, 800)
        : Phaser.Math.Between(0, 400)

    const bomb = bombs.create(x, 16, 'bomb')
    bomb.setBounce(1)
    bomb.setCollideWorldBounds(true)
    bomb.setVelocity(Phaser.Math.Between(-200, 200), 20)
  }
}

function initControl() {
  cursors = scene.input.keyboard.createCursorKeys()
}
</script>

<style lang="less" scoped>
.viewCon {
}
</style>
