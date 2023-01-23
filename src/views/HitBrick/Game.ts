import { Scene } from 'phaser'
import { Flap } from './Flap'
import { config } from './config'
import { Brick } from './Brick'
import { Ball } from './Ball'

const { width, height } = config.scene

export class Game extends Scene {
  flap: Flap
  brickGroup: any
  scoreText: Phaser.GameObjects.Text
  score: number = 0
  soundShot: Phaser.Sound.BaseSound
  soundHitBrick: Phaser.Sound.BaseSound
  soundHitBrick2: Phaser.Sound.BaseSound
  soundHitFlap: Phaser.Sound.BaseSound

  soundBegin: Phaser.Sound.BaseSound
  soundLose: Phaser.Sound.BaseSound
  soundWin: Phaser.Sound.BaseSound
  constructor() {
    super('game')
  }
  preload(){
    this.soundShot = this.sound.add('soundShot')
    this.soundHitBrick = this.sound.add('soundHitBrick')
    this.soundHitBrick2 = this.sound.add('soundHitBrick2')
    this.soundHitFlap = this.sound.add('soundHitFlap')

    this.soundBegin = this.sound.add('soundBegin')
    this.soundLose = this.sound.add('soundLose')
    this.soundWin = this.sound.add('soundWin')
  }
  create() {
    this.flap = new Flap(this, width / 2, height - 100)
    this.physics.world.setBoundsCollision(true, true, true, false)
    const frames = [
      { brickDefault: 'brick/blue', brickDestroyed: 'brick/blue2' },
      { brickDefault: 'brick/green', brickDestroyed: 'brick/green2' },
      { brickDefault: 'brick/purple', brickDestroyed: 'brick/purple2' },
      { brickDefault: 'brick/red', brickDestroyed: 'brick/red2' },
    ]
    const { widthReal, heightReal } = Brick
    const brickRows = 4
    const brickCols = 10
    const gapTop = 80
    const gapLeft = (width - brickCols * widthReal) / 2

    for (let i = 0; i < brickRows; i++) {
      for (let j = 0; j < brickCols; j++) {
        const { brickDefault, brickDestroyed } = frames[i]
        const brick = new Brick(
          this,
          gapLeft + widthReal / 2 + widthReal * j,
          gapTop + heightReal / 2 + heightReal * i,
          brickDefault,
          brickDestroyed
        )
        brick.setImmovable()
        this.physics.add.collider(
          this.flap.ball,
          brick,
          this.ballHitBrick as ArcadePhysicsCallback
        )
      }
    }

    this.scoreText = this.add.text(0, 0, 'Score: 0', {
      fontSize: '28px',
      color: '#fff',
    })
    this.soundBegin.play()
  }
  ballHitBrick = (ball: Ball, brick: Brick) => {
    if (!brick.isDestroy) {
      brick.handleDestroyed()
      this.soundHitBrick.play()
    } else {
      brick.handleRemove()
      this.soundHitBrick2.play()
      this.updateScore()
    }
  }
  updateScore() {
    this.score++
    this.scoreText.setText(`Score: ${this.score}`)
  }
  update() {
    this.flap.update()
  }
}
