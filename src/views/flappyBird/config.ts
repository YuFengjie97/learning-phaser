export const config = {
  textures: {
    key: 'flappyBird'
  },
  audio: {
    die: 'die',
    hit: 'hit',
    point: 'point',
    swoosh: 'swoosh',
    wing: 'wing'
  },
  scene: {
    width: 288,
    height: 512,
    gravity: 600,
  },
  player: {
    prePos: { x: 60, y: 300 },
    flapSpeed: 200,
  },
  bg: {
    static: 'background-day.png',
  },
  startMenu: {
    static: 'message-initial.png',
  },
  gameOver: {
    static: 'gameover.png',
  },
  restart: {
    static: 'restart-button.png',
  },
  pipe: {
    // 管道图片分辨率，加载素材后，是按照图片默认分辨率显示大小
    height: 320,
    width: 52,
    speed: -100,
    gap: 140,
    timeGap: 130, // 时间单位
    top: {
      static: 'pipe-green-top.png',
    },
    bottom: {
      static: 'pipe-green-bottom.png',
    },
  },
  ground: {
    static: 'ground',
    animate: {
      moving: 'groundMoving',
      stop: 'groundStop',
    },
  },
  birdRed: {
    static: 'birdRed',
    animate: {
      flap: 'birdRedFlap',
      stop: 'birdRedStop',
    },
  },
  nums: {
    widht: 24,
    height: 36,
    static: {
      num0: 'number0.png',
      num1: 'number1.png',
      num2: 'number2.png',
      num3: 'number3.png',
      num4: 'number4.png',
      num5: 'number5.png',
      num6: 'number6.png',
      num7: 'number7.png',
      num8: 'number8.png',
      num9: 'number9.png',
    }
  },
}

type numsKey =
  | 'num0'
  | 'num1'
  | 'num2'
  | 'num3'
  | 'num4'
  | 'num5'
  | 'num6'
  | 'num7'
  | 'num8'
  | 'num9'
