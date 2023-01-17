import { getUrl } from '@/utils'
import Phaser from 'phaser'
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
    this.loadPlayerSheet(attack2)
    this.loadPlayerSheet(crouch)
    this.loadPlayerSheet(crouchWalk)
    this.loadPlayerSheet(crouchAttack)
    this.loadPlayerSheet(dash)
    this.loadPlayerSheet(death)
    this.loadPlayerSheet(fall)
    this.loadPlayerSheet(hit)
    this.loadPlayerSheet(jump)
    this.loadPlayerSheet(jumpFallInBetween)
    this.loadPlayerSheet(roll)
    this.loadPlayerSheet(run)
    this.loadPlayerSheet(slide)
    this.loadPlayerSheet(slideFull)
    this.loadPlayerSheet(slideTransitionEnd)
    this.loadPlayerSheet(slideTransitionStart)
    this.loadPlayerSheet(turnAround)
    this.loadPlayerSheet(wallClimb)
    this.loadPlayerSheet(wallHang)
    this.loadPlayerSheet(wallSlide)
  }

  create() {
    this.scene.start('game')
  }
}
