import { Physics, Scene } from 'phaser'

export class Ball extends Physics.Arcade.Sprite {
  scaleBase: number = 0.3
  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, 'titles', 'ball')
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.setScale(this.scaleBase)
    this.setCollideWorldBounds(true)
    this.setBounce(1)
  }
}
