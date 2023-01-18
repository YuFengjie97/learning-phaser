import { Physics, Scene, Input } from 'phaser'
import config from './config'

const { idle, attack, crouch, crouchWalk, crouchAttack, jump, run } =
  config.player.animation

type Anim = {
  key: string
  start: number
  end: number
}
export default class Player extends Physics.Arcade.Sprite {
  private isCrouch: boolean
  private isJump: boolean = false
  private speed: number = 200
  private scaleBase: number = 2
  private keyJ: Input.Keyboard.Key
  private keyK: Input.Keyboard.Key
  private keyS: Input.Keyboard.Key
  private keyA: Input.Keyboard.Key
  private keyW: Input.Keyboard.Key
  private keyD: Input.Keyboard.Key
  private keyShift: Input.Keyboard.Key

  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, idle.key)
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.setScale(this.scaleBase)
    this.getBody().setCollideWorldBounds(true)
    this.getBody().setGravityY(900)

    this.regisKeys()
    this.regisAnims()
    this.idle()

    this.handleKeysByUp()
  }

  // 这里不知道是不是phaser3类型的问题,直接修改this.body不能正确判断类型
  getBody() {
    return this.body as Phaser.Physics.Arcade.Body
  }
  // 分开触发
  handleKeysByUp() {
    this.keyA.on('up', () => {
      if (this.keyS.isDown) {
        this.crouch()
      } else {
        this.idle()
      }
    })
    this.keyD.on('up', () => {
      if (this.keyS.isDown) {
        this.crouch()
      } else {
        this.idle()
      }
    })
    this.keyS.on('up', () => {
      if (this.keyA.isDown || this.keyD.isDown) {
        this.run()
      } else {
        this.idle()
      }
    })
    this.keyShift.on('up', () => {
      this.speed = 200
    })

    this.keyJ.on('up', ()=>{
      if(this.keyS.isDown){
        this.crouchAttack()
      }else{
        this.attack().on('animationcomplete',()=>this.idle())
      }
    })

    this.keyK.on('down',()=>{
      if(!this.isJump){
        this.isJump = true
        this.setVelocityY(-400)
        this.jump()
      }
    })
  }
  // 连续(逐帧)触发
  handleKeysByDown() {
    this.setVelocityX(0)
    const curAnim = this.anims.getName()
    console.log(curAnim)

    if (this.keyShift.isDown) {
      this.speed = 400
    }

    if (this.keyA.isDown) {
      this.setFlipX(true)
      this.setVelocityX(-this.speed)
      if (this.keyS.isUp) {
        curAnim !== run.key && this.run()
      }
    }
    if (this.keyD.isDown) {
      this.setFlipX(false)
      this.setVelocityX(this.speed)
      if (this.keyS.isUp) {
        curAnim !== run.key && this.run()
      }
    }
    if (this.keyS.isDown) {
      if (this.keyA.isDown || this.keyD.isDown) {
        curAnim !== crouchWalk.key && this.crouchWalk()
      } else {
        this.crouch()
      }
    }
  }
  update() {
    this.handleKeysByDown()
    if(this.getBody().velocity.y ===0){
      this.isJump = false
    }
  }
  regisKeys() {
    this.keyJ = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.J)
    this.keyK = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.K)
    this.keyW = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.W)
    this.keyA = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.A)
    this.keyS = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.S)
    this.keyD = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.D)
    this.keyShift = this.scene.input.keyboard.addKey(
      Input.Keyboard.KeyCodes.SHIFT
    )
  }
  createAnim(anim: Anim, repeat: number = 1) {
    this.scene.anims.create({
      key: anim.key,
      frames: this.scene.anims.generateFrameNames(anim.key, {
        start: anim.start,
        end: anim.end,
      }),
      frameRate: 15,
      repeat: repeat,
    })
  }
  regisAnims() {
    this.createAnim(idle, -1)
    this.createAnim(attack)
    this.createAnim(crouch, -1)
    this.createAnim(crouchWalk, -1)
    this.createAnim(crouchAttack)
    this.createAnim(jump)
    this.createAnim(run, -1)
  }
  run() {
    this.anims.play(run.key, true)
  }
  attack() {
    return this.anims.play(attack.key, true)
  }
  crouch() {
    this.anims.play(crouch.key, true)
  }
  crouchAttack() {
    this.anims.play(crouchAttack.key, true)
  }
  crouchWalk() {
    this.anims.play(crouchWalk.key, true)
  }
  idle() {
    this.anims.play(idle.key, true)
  }
  jump() {
    this.anims.play(jump.key, true)
  }
}
