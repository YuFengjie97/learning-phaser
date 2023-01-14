import Phaser from "phaser";
import { config } from "./config";

type numsKey = keyof typeof config.nums.static

export default class Game extends Phaser.Scene {
  score = 0
  gameOver = false
  gameStart = false
  bg: Phaser.GameObjects.Image
  ground: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
  startMenu: Phaser.GameObjects.Image
  gameOverInfo: Phaser.GameObjects.Image
  restart: Phaser.GameObjects.Image
  player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
  pipesGroup: Phaser.GameObjects.Group
  gapsGroup: Phaser.GameObjects.Group
  scoreGroup: Phaser.Physics.Arcade.StaticGroup
  nextPipe = 0
  upButton: Phaser.Input.Keyboard.Key
  soundHit: Phaser.Sound.BaseSound
  soundDie: Phaser.Sound.BaseSound
  soundSwoosh: Phaser.Sound.BaseSound
  soundWing: Phaser.Sound.BaseSound
  soundPoint: Phaser.Sound.BaseSound
  constructor() {
    super('Game')
  }

  create() {
    const { width, height } = config.scene
    this.bg = this.add
      .image(0, 0, config.bg.static)
      .setOrigin(0, 0)
      .setInteractive()
      .on('pointerdown', () => {
        if(!this.gameStart) return
        this.flap()
      })

    // 添加地面
    this.ground = this.physics.add.sprite(width / 2, 500, config.ground.static)
    this.ground.setCollideWorldBounds(true)
    this.ground.setDepth(10)

    // 注册动画
    this.anims.create({
      key: config.ground.animate.moving,
      frames: this.anims.generateFrameNumbers(config.ground.static, {
        start: 0,
        end: 2,
      }),
      frameRate: 15,
      repeat: -1,
    })
    this.anims.create({
      key: config.ground.animate.stop,
      frames: [
        {
          key: config.ground.static,
          frame: 0,
        },
      ],
      frameRate: 20,
    })
    this.anims.create({
      key: config.birdRed.animate.flap,
      frames: this.anims.generateFrameNumbers(config.birdRed.static, {
        start: 0,
        end: 2,
      }),
      frameRate: 10,
      repeat: -1,
    })
    this.anims.create({
      key: config.birdRed.animate.stop,
      frames: [
        {
          key: config.birdRed.static,
          frame: 1,
        },
      ],
      frameRate: 20,
    })

    // 管道
    this.pipesGroup = this.physics.add.group()
    // 得分碰撞检测group
    this.gapsGroup = this.physics.add.group()
    // 分数
    this.scoreGroup = this.physics.add.staticGroup()
    this.scoreGroup.setDepth(30)
    //添加开始提示
    this.startMenu = this.add.image(
      width / 2,
      height / 2,
      config.startMenu.static
    )
    this.startMenu.setDepth(30)
    this.startMenu.setInteractive().on('pointerdown', () => {
      this.start()
    })
    this.startMenu.visible = false

    // 添加gameover提示
    this.gameOverInfo = this.add.image(width / 2, 200, config.gameOver.static)
    this.gameOverInfo.visible = false
    this.restart = this.add
      .image(width / 2, 300, config.restart.static)
      .setInteractive()
      .on('pointerdown', () => {
        this.reStart()
      })
    this.restart.visible = false
    this.gameOverInfo.setDepth(30)
    this.restart.setDepth(30)

    this.upButton = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    )

    this.soundDie = this.sound.add(config.audio.die)
    this.soundHit = this.sound.add(config.audio.hit)
    this.soundWing = this.sound.add(config.audio.wing)
    this.soundSwoosh = this.sound.add(config.audio.swoosh)
    this.soundPoint = this.sound.add(config.audio.point)

    this.prepareGame()
  }
  update() {
    if (!this.gameStart || this.gameOver) return
    if (this.player.angle < 90) {
      this.player.angle += 1
    }
    if (Phaser.Input.Keyboard.JustDown(this.upButton)) {
      this.flap()
    }
    this.updatePipes()
  }
  start() {
    this.player.body.allowGravity = true
    this.gameStart = true
    this.startMenu.visible = false
  }
  reStart() {
    this.physics.resume()
    this.pipesGroup.clear(true, true)
    this.gapsGroup.clear(true, true)

    this.gameOver = false
    this.gameStart = false
    this.score = 0
    this.gameOverInfo.visible = false
    this.restart.visible = false

    this.player.destroy()
    this.prepareGame()
  }

  prepareGame() {
    this.startMenu.visible = true
    this.ground.anims.play(config.ground.animate.moving, true)

    // 初始化player
    this.player = this.physics.add.sprite(
      config.player.prePos.x,
      config.player.prePos.y,
      config.birdRed.static
    )

    this.player.setCollideWorldBounds(true)
    this.player.anims.play(config.birdRed.animate.flap, true)
    this.player.body.allowGravity = false

    // 初始化碰撞检测
    // prettier-ignore
    this.physics.add.collider(this.player,this.ground,this.hitBird,undefined,this)
    // prettier-ignore
    this.physics.add.collider(this.player,this.pipesGroup,this.hitBird,undefined,this)
    // prettier-ignore
    this.physics.add.overlap(this.player, this.gapsGroup, this.updateScore,undefined,this)

    // 初始化分数
    this.updateScoreBoard()
  }

  flap() {
    if (this.gameOver) return
    this.soundWing.play()
    this.player.setVelocityY(-config.player.flapSpeed)
    this.player.angle = -15
  }
  createPipe() {
    const { width: sceneWidth } = config.scene
    const {
      width: pipeWidth,
      height: pipeHeight,
      gap: pipeGap,
      speed: pipeSpeed,
    } = config.pipe
    // 管道位置是以素材中心点为基准放置
    const pipeTopY = Phaser.Math.Between(
      -pipeHeight / 2 + 40,
      pipeHeight / 2 - 40
    )
    const pipeTop = this.pipesGroup.create(
      sceneWidth + pipeWidth / 2,
      pipeTopY,
      config.pipe.top.static
    ) as any
    pipeTop.body.allowGravity = false
    pipeTop.body.setVelocityX(config.pipe.speed)

    const pipeBottom = this.pipesGroup.create(
      sceneWidth + pipeWidth / 2,
      pipeTopY + config.pipe.height + pipeGap,
      config.pipe.bottom.static
    )
    pipeBottom.body.allowGravity = false
    pipeBottom.body.setVelocityX(pipeSpeed)

    // prettier-ignore
    const gap = this.add
      .line(sceneWidth + pipeWidth,pipeTopY + pipeHeight / 2,0,0,0,pipeGap,0xff0000)
      .setOrigin(0, 0) as any
    this.gapsGroup.add(gap)
    gap.body.allowGravity = false
    gap.body.setVelocityX(config.pipe.speed)
    gap.visible = false
  }
  updatePipes() {
    this.pipesGroup.children.iterate(function (child: any) {
      if (!child) return
      if (child.x < -50) {
        child.destroy()
      }
    })
    this.gapsGroup.children.iterate(function (child: any) {
      if (!child) return
      if (child.x < -50) {
        child.destroy()
      }
    })
    this.nextPipe++
    if (this.nextPipe % config.pipe.timeGap === 0) {
      this.createPipe()
      this.soundSwoosh.play()
    }
  }

  hitBird() {
    console.log('gameover')
    this.soundHit.play()
    this.soundDie.play()
    this.physics.pause()
    this.gameOver = true
    this.ground.anims.play(config.ground.animate.stop, true)
    this.player.anims.play(config.birdRed.animate.stop, true)

    this.gameOverInfo.visible = true
    this.restart.visible = true
  }
  updateScore(player: any, gap: any) {
    gap.destroy()
    this.soundPoint.play()
    this.score++
    this.updateScoreBoard()
  }
  updateScoreBoard() {
    this.scoreGroup.clear(true, true)

    const numWidth = config.nums.widht
    const scoreStr = this.score.toString()
    const len = scoreStr.length
    let startPos = config.scene.width / 2 - (len * numWidth) / 2

    for (let i = 0; i < len; i++) {
      const k = `num${scoreStr[i]}` as numsKey
      // prettier-ignore
      const n = this.scoreGroup.create(startPos + numWidth * i ,30, config.nums.static[k])
      n.setDepth(30)
    }
  }
}