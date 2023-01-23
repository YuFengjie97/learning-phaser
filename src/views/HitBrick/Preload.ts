import { Scene } from 'phaser'
import { getUrl } from '@/utils'

export class Preload extends Scene {
  constructor() {
    super('preload')
  }
  preload() {
    this.load.atlasXML({
      key: 'titles',
      textureURL: getUrl('hitBrick/Breakout_Tile_Free.png'),
      atlasURL: getUrl('hitBrick/Breakout_Tile_Free.xml'),
    })
    this.load.audio('soundShot',getUrl('hitBrick/audio/shot.ogg'))
    this.load.audio('soundHitBrick',getUrl('hitBrick/audio/hitBrick.ogg'))
    this.load.audio('soundHitBrick2',getUrl('hitBrick/audio/hitBrick2.ogg'))
    this.load.audio('soundHitFlap',getUrl('hitBrick/audio/hitFlap.ogg'))

    this.load.audio('soundBegin',getUrl('hitBrick/audio/begin.ogg'))
    this.load.audio('soundLose',getUrl('hitBrick/audio/you_lose.ogg'))
    this.load.audio('soundWin',getUrl('hitBrick/audio/you_win.ogg'))
  }
  create() {
    this.scene.start('game')
  }
}
