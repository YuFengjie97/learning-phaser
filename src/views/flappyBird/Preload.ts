import Phaser from 'phaser'
import { getUrl } from '@/utils/index'
import { config } from './config'

export default class Preload extends Phaser.Scene {
  constructor() {
    super('Preload')
  }
  preload() {
    const { width, height } = config.scene
    const progressBar = this.add.graphics()
    const progressBox = this.add.graphics()
    progressBox.fillStyle(0x222222, 0.8)
    progressBox.fillRect(20, 270, 248, 50)
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        color: '#ffffff',
      },
    })
    loadingText.setOrigin(0.5, 0.5)
    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 + 40,
      text: '0%',
      style: {
        font: '18px monospace',
        color: '#ffffff',
      },
    })
    percentText.setOrigin(0.5, 0.5)
    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 80,
      text: '',
      style: {
          font: '18px monospace',
          color: '#ffffff'
      }
  });
  assetText.setOrigin(0.5, 0.5);
    // 加载事件监听
    this.load.on('progress', function (val: any) {
      progressBar.clear()
      progressBar.fillStyle(0xffffff, 1)
      progressBar.fillRect(30, 280, 228 * val, 30)
      percentText.setText((val * 100).toFixed(0) + '%')
    })
    this.load.on('fileprogress', function (val: any) {
      assetText.setText('Loading asset: ' + val.key);
    })
    this.load.on('complete', function (val: any) {
      console.log('complete')
      progressBar.destroy()
      progressBox.destroy()
    })

    this.load.image(
      config.bg.static,
      getUrl('flappyBird/sprites/background-day.png')
    )
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
    this.load.image(
      config.gameOver.static,
      getUrl('flappyBird/sprites/gameover.png')
    )
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
    this.load.image(
      config.nums.static.num0,
      getUrl('flappyBird/sprites/number0.png')
    )
    this.load.image(
      config.nums.static.num1,
      getUrl('flappyBird/sprites/number1.png')
    )
    this.load.image(
      config.nums.static.num2,
      getUrl('flappyBird/sprites/number2.png')
    )
    this.load.image(
      config.nums.static.num3,
      getUrl('flappyBird/sprites/number3.png')
    )
    this.load.image(
      config.nums.static.num4,
      getUrl('flappyBird/sprites/number4.png')
    )
    this.load.image(
      config.nums.static.num5,
      getUrl('flappyBird/sprites/number5.png')
    )
    this.load.image(
      config.nums.static.num6,
      getUrl('flappyBird/sprites/number6.png')
    )
    this.load.image(
      config.nums.static.num7,
      getUrl('flappyBird/sprites/number7.png')
    )
    this.load.image(
      config.nums.static.num8,
      getUrl('flappyBird/sprites/number8.png')
    )
    this.load.image(
      config.nums.static.num9,
      getUrl('flappyBird/sprites/number9.png')
    )
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
  }
  create() {
    this.scene.start('Game')
  }
}
