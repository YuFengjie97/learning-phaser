var p=Object.defineProperty;var c=(t,e,s)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var r=(t,e,s)=>(c(t,typeof e!="symbol"?e+"":e,s),s);import{P as i}from"./phaser-c68e28a0.js";import{g as a}from"./public-97fb009b.js";import{d as _,r as d,o as k,c as f,a as m,_ as g}from"./index-fefb0e5f.js";const h=_({__name:"60fpsWalk",setup(t){const e=d();k(()=>{new i.Game({type:i.AUTO,parent:e.value,width:800,height:600,backgroundColor:16711680,scene:s})});class s extends i.Scene{constructor(){super("Game");r(this,"bg");r(this,"trees")}preload(){this.load.atlas("walker",a("03-60fpsWalk/walker.png"),a("03-60fpsWalk/walker.json")),this.load.image("sky",a("03-60fpsWalk/sky.png")),this.load.image("trees",a("03-60fpsWalk/trees.png"))}create(){this.bg=this.add.tileSprite(0,38,800,296,"sky").setOrigin(0,0),this.trees=this.add.tileSprite(0,280,800,320,"trees").setOrigin(0,0);const l={key:"walk",frames:"walker",frameRate:60,repeat:-1};this.anims.create(l),this.add.sprite(400,484,"walker","frame_0000").play("walk")}update(){this.bg.tilePositionX-=2,this.trees.tilePositionX-=6}}return(o,n)=>(m(),f("div",{class:"viewCon",ref_key:"con",ref:e},null,512))}});const x=g(h,[["__scopeId","data-v-5741e782"]]);export{x as default};