import { Physics, Scene, Input } from 'phaser'
import config from './config'

const {
  idle,
  attack,
  attack2,
  crouch,
  crouchWalk,
  crouchAttack,
  dash,
  death,
  fall,
  hit,
  jump,
  jumpFallInBetween,
  roll,
  run,
  slide,
  slideFull,
  slideTransitionEnd,
  slideTransitionStart,
  turnAround,
  wallClimb,
  wallHang,
  wallSlide,
} = config.player.animation

type Anim = {
  key: string
  start: number
  end: number
}

export default class Player extends Physics.Arcade.Sprite {
  private isCrouch: boolean
  private speed: number = 300
  private keyJ: Input.Keyboard.Key
  private keyK: Input.Keyboard.Key
  private keyL: Input.Keyboard.Key
  private keyU: Input.Keyboard.Key
  private keyI: Input.Keyboard.Key
  private keyO: Input.Keyboard.Key
  private keyS: Input.Keyboard.Key
  private keyA: Input.Keyboard.Key
  private keyW: Input.Keyboard.Key
  private keyD: Input.Keyboard.Key
  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, idle.key)
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.setScale(3)
    this.getBody().setCollideWorldBounds(true)
    this.getBody().setGravityY(300)

    this.regisKeys()
    this.regisAnims()
    this.anims.play(idle.key, true)
    if (this.keyS.isUp) {
      this.anims.play(idle.key, true)
    }
    this.releaseKey()
  }

  createAnim(anim: Anim) {
    this.scene.anims.create({
      key: anim.key,
      frames: this.scene.anims.generateFrameNames(anim.key, {
        start: anim.start,
        end: anim.end,
      }),
      frameRate: 15,
    })
  }
  // 这里不知道是不是phaser3类型的问题,直接修改this.body不能正确判断类型
  getBody() {
    return this.body as Phaser.Physics.Arcade.Body
  }
  releaseKey(){
    this.keyS.on('up', () => this.idle())
    this.keyA.on('up', () => this.idle())
    this.keyD.on('up', () => this.idle())
  }
  update() {
    this.getBody().setVelocityX(0)
    if (this.keyS.isDown) {
      this.anims.play(crouch.key, true)
    }
    
    if (this.keyA.isDown) {
      this.body.velocity.x = -this.speed
      if (this.keyS.isDown) {
        this.isAllowNextAnim() && this.anims.play(crouchWalk.key, true)
      } else {
        this.isAllowNextAnim() && this.anims.play(run.key, true)
      }
    }
    if (this.keyD.isDown) {
      this.body.velocity.x = this.speed
      if (this.keyS.isDown) {
        this.isAllowNextAnim() && this.anims.play(crouchWalk.key, true)
      } else {
        this.isAllowNextAnim() && this.anims.play(run.key, true)
      }
    }
  }
  // 是否允许播放下个动画
  isAllowNextAnim() {
    const currentAnimName = this.anims.getName()
    const arr = [idle.key, crouch.key]
    if (arr.includes(currentAnimName)) return true
    return !this.anims.isPlaying
  }
  regisKeys() {
    this.keyJ = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.J)
    this.keyK = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.K)
    this.keyL = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.L)
    this.keyU = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.U)
    this.keyI = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.I)
    this.keyO = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.O)
    this.keyW = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.W)
    this.keyA = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.A)
    this.keyS = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.S)
    this.keyD = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.D)
  }
  regisAnims() {
    this.createAnim(idle)
    this.createAnim(attack)
    this.createAnim(attack2)
    this.createAnim(crouch)
    this.createAnim(crouchWalk)
    this.createAnim(crouchAttack)
    this.createAnim(dash)
    this.createAnim(death)
    this.createAnim(fall)
    this.createAnim(hit)
    this.createAnim(jump)
    this.createAnim(jumpFallInBetween)
    this.createAnim(roll)
    this.createAnim(run)
    this.createAnim(slide)
    this.createAnim(slideFull)
    this.createAnim(slideTransitionEnd)
    this.createAnim(slideTransitionStart)
    this.createAnim(turnAround)
    this.createAnim(wallClimb)
    this.createAnim(wallHang)
    this.createAnim(wallSlide)
  }
  attack() {
    this.anims.play(attack.key, true)
  }
  attack2() {
    this.anims.play(attack2.key, true)
  }
  crouchAttack() {
    this.anims.play(crouchAttack.key, true)
  }
  idle() {
    this.anims.play(idle.key, true)
  }
}
