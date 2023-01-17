<template>
  <div class='viewCon' ref="con">
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref} from 'vue';
import config from './config';
import Game from './Game'
import Preload from './Preload';

const con = ref<HTMLElement>()

onMounted(()=>{
  const { width, height, gravity } = config.scene
  new Phaser.Game({
    type: Phaser.AUTO,
    parent: con.value,
    canvasStyle: `margin: 0 auto`,
    width,
    height,
    backgroundColor: '#ff0000',
    scene: [Preload, Game],
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
          y: gravity, // 默认重力，不同sprite可以单独设置
        },
        debug: false,
      },
    },
  })
})

</script>

<style lang='less' scoped>
.viewCon{
}
</style>