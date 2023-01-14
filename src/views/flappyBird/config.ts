export const config = {
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
    static: 'bgDay',
  },
  startMenu: {
    static: 'startMenu',
  },
  gameOver: {
    static: 'gameOver',
  },
  restart: {
    static: 'restart',
  },
  pipe: {
    // 管道图片分辨率，加载素材后，是按照图片默认分辨率显示大小
    height: 320,
    width: 52,
    speed: -100,
    gap: 140,
    timeGap: 130, // 时间单位
    top: {
      static: 'pipeTop',
    },
    bottom: {
      static: 'pipeBottom',
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
      num0: 'num0',
      num1: 'num1',
      num2: 'num2',
      num3: 'num3',
      num4: 'num4',
      num5: 'num5',
      num6: 'num6',
      num7: 'num7',
      num8: 'num8',
      num9: 'num9',
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
