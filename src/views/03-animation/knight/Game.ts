import Phaser from 'phaser'
import config from './config'
import Player from './Player'

export default class Game extends Phaser.Scene {
  private ground: Phaser.Physics.Arcade.StaticGroup
  private player: Player
  constructor() {
    super('game')
  }

  create() {
    // 背景
    this.add.image(0, 0, config.bg.key).setOrigin(0)
    this.ground = this.physics.add.staticGroup()
    for (let i = 0; i < 15; i++) {
      this.ground.create(i * 64, 536 + 32, config.titles.key, 1)
    }

    // player
    this.player = new Player(this, 300,400)

    this.physics.add.collider(this.player, this.ground)
  }
  update(time: number, delta: number): void {
      this.player.update()
  }
  
}
