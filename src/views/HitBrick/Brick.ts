import { Physics, Scene } from 'phaser'
import { config } from './config'
const {
  brick: { width, height },
} = config

export class Brick extends Physics.Arcade.Sprite {
  static scaleBase = 0.2
  isDestroy = false
  static widthReal: number = width * Brick.scaleBase
  static heightReal: number = height * Brick.scaleBase
  // frame是默认完整样子,frame2是毁坏样子
  frameDefault: string
  frameDestroyed: string
  constructor(
    scene: Scene,
    x: number,
    y: number,
    frame: string,
    frame2: string
  ) {
    super(scene, x, y, 'titles', frame)
    this.frameDefault = frame
    this.frameDestroyed = frame2
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.setScale(Brick.scaleBase)
  }

  // 小球碰撞砖块后,切换毁坏纹理
  handleDestroyed(){
    this.isDestroy = true
    this.setTexture('titles', this.frameDestroyed)
  }
  // 毁坏后再次被碰撞,remove
  handleRemove(){
    this.disableBody(true, true);
  }
}
