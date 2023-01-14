import Phaser from "phaser";
import { getUrl } from '@/utils/index'
import { config } from "./config";

export default class Preload extends Phaser.Scene{
  constructor() {
    super('Preload')
  }
  preload() {
    this.load.image(config.bg.static, getUrl('flappyBird/sprites/background-day.png'))
    this.load.spritesheet(
      config.ground.static,
      getUrl('flappyBird/sprites/ground-sprite.png'),
      {
        frameWidth: 336,
        frameHeight: 112,
      }
    )
    this.load.image(
      config.startMenu.static,
      getUrl('flappyBird/sprites/message-initial.png')
    )
    this.load.image(config.gameOver.static, getUrl('flappyBird/sprites/gameover.png'))
    this.load.image(
      config.restart.static,
      getUrl('flappyBird/sprites/restart-button.png')
    )
    this.load.image(
      config.pipe.top.static,
      getUrl('flappyBird/sprites/pipe-green-top.png')
    )
    this.load.image(
      config.pipe.bottom.static,
      getUrl('flappyBird/sprites/pipe-green-bottom.png')
    )
    this.load.image(config.nums.static.num0, getUrl('flappyBird/sprites/number0.png'))
    this.load.image(config.nums.static.num1, getUrl('flappyBird/sprites/number1.png'))
    this.load.image(config.nums.static.num2, getUrl('flappyBird/sprites/number2.png'))
    this.load.image(config.nums.static.num3, getUrl('flappyBird/sprites/number3.png'))
    this.load.image(config.nums.static.num4, getUrl('flappyBird/sprites/number4.png'))
    this.load.image(config.nums.static.num5, getUrl('flappyBird/sprites/number5.png'))
    this.load.image(config.nums.static.num6, getUrl('flappyBird/sprites/number6.png'))
    this.load.image(config.nums.static.num7, getUrl('flappyBird/sprites/number7.png'))
    this.load.image(config.nums.static.num8, getUrl('flappyBird/sprites/number8.png'))
    this.load.image(config.nums.static.num9, getUrl('flappyBird/sprites/number9.png'))
    this.load.spritesheet(
      config.birdRed.static,
      getUrl('flappyBird/sprites/bird-red-sprite.png'),
      {
        frameWidth: 34,
        frameHeight: 24,
      }
    )
    this.load.audio(config.audio.die, [
      getUrl('flappyBird/audio/die.ogg'),
      getUrl('flappyBird/audio/die.wav'),
    ])
    this.load.audio(config.audio.hit, [
      getUrl('flappyBird/audio/hit.ogg'),
      getUrl('flappyBird/audio/hit.wav'),
    ])
    this.load.audio(config.audio.point, [
      getUrl('flappyBird/audio/point.ogg'),
      getUrl('flappyBird/audio/point.wav'),
    ])
    this.load.audio(config.audio.swoosh, [
      getUrl('flappyBird/audio/swoosh.ogg'),
      getUrl('flappyBird/audio/swoosh.wav'),
    ])
    this.load.audio(config.audio.wing, [
      getUrl('flappyBird/audio/wing.ogg'),
      getUrl('flappyBird/audio/wing.wav'),
    ])
    console.log('load down')
  }
  create() {
    this.scene.start('Game')
  }
}