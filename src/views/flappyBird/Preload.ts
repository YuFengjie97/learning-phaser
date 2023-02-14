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

    this.load.multiatlas(config.textures.key, getUrl('flappyBird/img/flappy.json'), getUrl('flappyBird/img/'))

    this.load.spritesheet(
      config.birdRed.static,
      getUrl('flappyBird/anim/bird-red-sprite.png'),
      {
        frameWidth: 34,
        frameHeight: 24,
      }
    )
    this.load.spritesheet(
      config.ground.static,
      getUrl('flappyBird/anim/ground-sprite.png'),
      {
        frameWidth: 336,
        frameHeight: 112,
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
