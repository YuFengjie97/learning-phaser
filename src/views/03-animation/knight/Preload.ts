import { getUrl } from '@/utils'
import Phaser from 'phaser'
import config from './config'

const {
  idle,
  attack,
  crouch,
  crouchWalk,
  crouchAttack,
  jump,
  run,
} = config.player.animation

type Sheet = {
  key: string,
  url: string
}
export default class Preload extends Phaser.Scene {
  constructor() {
    super('preload')
  }
  preload() {
    this.loadImg()
    this.loadSpritesheet()
  }
  // 加载图片
  loadImg() {
    this.load.image(config.bg.key, getUrl('knight/bg.png'))
  }
  loadPlayerSheet(sheet: Sheet){
    this.load.spritesheet(sheet.key, getUrl(sheet.url),{
      frameWidth: 120,
      frameHeight: 80,
    })
  }
  // 加载精灵图片
  loadSpritesheet() {
    this.load.spritesheet(config.titles.key, getUrl('knight/titles.png'), {
      frameWidth: 64,
      frameHeight: 64,
    })
    this.loadPlayerSheet(idle)
    this.loadPlayerSheet(attack)
    this.loadPlayerSheet(crouch)
    this.loadPlayerSheet(crouchWalk)
    this.loadPlayerSheet(crouchAttack)
    this.loadPlayerSheet(jump)
    this.loadPlayerSheet(run)
  }

  create() {
    this.scene.start('game')
  }
}
