import 'phaser'

export default class TextButton extends Phaser.GameObjects.Text {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    text: string,
    // style: Phaser.Types.GameObjects.Text.TextStyle,
    cb: () => void
  ) {
    super(scene, x, y, text, { color: '#0f0' })
    this.setInteractive({ useHandCursor: true }) //允许交互，并hover时鼠标手形展示
      .on('pointerover', () => this.handleHover())
      .on('pointerout', () => this.handleRest())
      .on('pointerdown', () => this.handleActive())
      .on('pointerup', () => {
        this.handleHover()
        cb()
      })
  }

  handleHover() {
    this.setStyle({ color: '#ff0' })
  }
  handleRest() {
    this.setStyle({ color: '#0f0' })
  }
  handleActive() {
    this.setStyle({ color: '#0ff' })
  }
}
