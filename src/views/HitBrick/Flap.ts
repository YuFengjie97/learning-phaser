import { Physics, Scene, Math as PMath, GameObjects } from 'phaser'
import { config } from './config'
import { Ball } from './Ball'
import { Game } from './Game'

const { width, height } = config.scene
export class Flap extends Physics.Arcade.Sprite {
  ball: Ball
  scaleBase = 0.6
  isShot = false
  gameScene: Game
  constructor(scene: Game, x: number, y: number) {
    super(scene, x, y, 'titles', 'flap/frame0')
    this.gameScene = scene

    // 注册挡板动画,使用atlas的title注册
    this.anims.create({
      key: 'flapAnim',
      frames: this.anims.generateFrameNames('titles', {
        prefix: 'flap/frame',
        start: 0,
        end: 2,
      }),
      frameRate: 8,
      repeat: -1,
    })

    this.play('flapAnim', true)
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.setScale(this.scaleBase)
    this.setImmovable() // 设置不可移动,这样小球与挡板之间的刚体碰撞就不会表现为小球击落挡板,而是挡板固定,反弹小球

    const halfW = (243 * this.scaleBase) / 2
    // 事件监听,挡板根据鼠标水平方向移动
    this.scene.input.on('pointermove', (pointer: PointerEvent) => {
      this.x = PMath.Clamp(pointer.x, halfW, width - halfW) //挡板位置限制
    })
    // 事件监听,小球发射
    this.scene.input.on('pointerup', () => {
      if (this.isShot) return
      const randomVx = Math.random() * 800 - 400
      this.ball.setVelocity(randomVx, -400)
      this.isShot = true
      this.gameScene.soundShot.play()
    })

    this.initBall()
  }
  update() {
    if (!this.isShot) {
      this.ball.x = this.x
    }
    if (this.ball.y > height) {
      console.log('outEdge')
      this.initState()
      this.gameScene.soundLose.play()
    }
  }
  initBall() {
    this.ball = new Ball(this.scene, this.x, this.y - 60)
    this.scene.physics.add.collider(this, this.ball, () => this.ballHitFlap())
  }
  ballHitFlap() {
    this.gameScene.soundHitFlap.play()
    console.log('hit flap')
    let diffX = this.x - this.ball.x
    if (this.ball.x === this.x) {
      this.ball.setVelocityX(Math.random() * 800 - 400)
    } else {
      this.ball.setVelocityX(10 * diffX)
    }
  }
  // 初始化小球与挡板的状态
  initState() {
    this.isShot = false
    this.x = width / 2
    this.ball.x = this.x
    this.ball.y = this.y - 60
    this.ball.setVelocity(0, 0)
  }
}
