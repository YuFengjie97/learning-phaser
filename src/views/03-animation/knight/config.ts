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
        end: 9,
      },
      attack: {
        url:'knight/sprite/_Attack.png',
        key: 'attack',
        start: 0,
        end: 3
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
      jump: {
        url:'knight/sprite/_Jump.png',
        key: 'jump',
        start: 0,
        end: 2
      },
      run: {
        url:'knight/sprite/_Run.png',
        key: 'run',
        start: 0,
        end: 9
      },
    }
  }
}
export default config