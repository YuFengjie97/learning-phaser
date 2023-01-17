const config = {
  scene: {
    width: 800,
    height: 600,
    gravity: 100
  },
  bg: {
    key: 'bg'
  },
  titles: {
    key: 'titles'
  },
  player: {
    animation: {
      idle: {
        url: 'knight/sprite/_Idle.png',
        key: 'idle',
        start: 0,
        end: 0,
      },
      attack: {
        url:'knight/sprite/_Attack.png',
        key: 'attack',
        start: 0,
        end: 3
      },
      attack2: {
        url:'knight/sprite/_Attack2.png',
        key: 'attack2',
        start: 0,
        end: 5
      },
      attackCombo2hit: {
        url:'',
        key: 'attackCombo2hit',
        start: 0,
        end: 9
      },
      crouch: {
        url:'knight/sprite/_Crouch.png',
        key: 'crouch',
        start: 0,
        end: 0
      },
      crouchWalk: {
        url:'knight/sprite/_CrouchWalk.png',
        key: 'crouchWalk',
        start: 0,
        end: 7
      },
      crouchAttack: {
        url:'knight/sprite/_CrouchAttack.png',
        key: 'crouchAttack',
        start: 0,
        end: 3
      },
      dash: {
        url:'knight/sprite/_Dash.png',
        key: 'dash',
        start: 0,
        end: 1
      },
      death: {
        url:'knight/sprite/_Death.png',
        key: 'death',
        start: 0,
        end: 9
      },
      fall: {
        url:'knight/sprite/_Fall.png',
        key: 'fall',
        start: 0,
        end: 2
      },
      hit: {
        url:'knight/sprite/_Hit.png',
        key: 'hit',
        start: 0,
        end: 0
      },
      jump: {
        url:'knight/sprite/_Jump.png',
        key: 'jump',
        start: 0,
        end: 2
      },
      jumpFallInBetween:{
        url:'knight/sprite/_JumpFallInbetween.png',
        key: 'jumpFallInBetween',
        start: 0,
        end: 1
      },
      roll: {
        url:'knight/sprite/_Roll.png',
        key: 'roll',
        start: 0,
        end: 11
      },
      run: {
        url:'knight/sprite/_Run.png',
        key: 'run',
        start: 0,
        end: 9
      },
      slide: {
        url:'knight/sprite/_Slide.png',
        key: 'side',
        start: 0,
        end: 1
      },
      slideFull: {
        url:'knight/sprite/_SlideFull.png',
        key: 'sideFull',
        start: 0,
        end: 3
      },
      slideTransitionEnd: {
        url:'knight/sprite/_SlideTransitionEnd.png',
        key: 'slideTransitionEnd',
        start: 0,
        end: 0
      },
      slideTransitionStart: {
        url:'knight/sprite/_SlideTransitionStart.png',
        key: 'slideTransitionStart',
        start: 0,
        end: 0
      },
      turnAround: {
        url:'knight/sprite/_TurnAround.png',
        key: 'turnAround',
        start: 0,
        end: 2
      },
      wallClimb: {
        url:'knight/sprite/_WallClimb.png',
        key: 'wallClimb',
        start: 0,
        end: 6
      },
      wallHang: {
        url:'knight/sprite/_WallHang.png',
        key: 'wallHang',
        start: 0,
        end: 0
      },
      wallSlide: {
        url:'knight/sprite/_WallSlide.png',
        key: 'wallSlide',
        start: 0,
        end: 2
      }
    }
  }
}
export default config