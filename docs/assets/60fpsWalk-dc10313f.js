var w=Object.defineProperty;var n=(j,I,i)=>I in j?w(j,I,{enumerable:!0,configurable:!0,writable:!0,value:i}):j[I]=i;var o=(j,I,i)=>(n(j,typeof I!="symbol"?I+"":I,i),i);import{P as C}from"./phaser-c68e28a0.js";import{d as y,r as l,o as c,c as g,a as m,_ as Z}from"./index-57b0e78d.js";const M="/learning-phaser/assets/trees-26b94495.png",d="/learning-phaser/assets/sky-c139c634.png",S="/learning-phaser/assets/walker-839d31fe.png",O="data:application/json;base64,eyJmcmFtZXMiOiB7CgoiZnJhbWVfMDAwMCI6CnsKCSJmcmFtZSI6IHsieCI6ODU0LCJ5IjoxNjMsInciOjIwNiwiaCI6MTU3fSwKCSJyb3RhdGVkIjogZmFsc2UsCgkidHJpbW1lZCI6IHRydWUsCgkic3ByaXRlU291cmNlU2l6ZSI6IHsieCI6MSwieSI6MiwidyI6MjA2LCJoIjoxNTd9LAoJInNvdXJjZVNpemUiOiB7InciOjIxOCwiaCI6MTU5fSwKCSJwaXZvdCI6IHsieCI6MC41LCJ5IjowLjV9Cn0sCiJmcmFtZV8wMDAxIjoKewoJImZyYW1lIjogeyJ4Ijo2NDUsInkiOjE2MywidyI6MjA3LCJoIjoxNTd9LAoJInJvdGF0ZWQiOiBmYWxzZSwKCSJ0cmltbWVkIjogdHJ1ZSwKCSJzcHJpdGVTb3VyY2VTaXplIjogeyJ4IjowLCJ5IjoyLCJ3IjoyMDcsImgiOjE1N30sCgkic291cmNlU2l6ZSI6IHsidyI6MjE4LCJoIjoxNTl9LAoJInBpdm90IjogeyJ4IjowLjUsInkiOjAuNX0KfSwKImZyYW1lXzAwMDIiOgp7CgkiZnJhbWUiOiB7IngiOjg1NywieSI6MiwidyI6MjA0LCJoIjoxNTd9LAoJInJvdGF0ZWQiOiBmYWxzZSwKCSJ0cmltbWVkIjogdHJ1ZSwKCSJzcHJpdGVTb3VyY2VTaXplIjogeyJ4IjozLCJ5IjoyLCJ3IjoyMDQsImgiOjE1N30sCgkic291cmNlU2l6ZSI6IHsidyI6MjE4LCJoIjoxNTl9LAoJInBpdm90IjogeyJ4IjowLjUsInkiOjAuNX0KfSwKImZyYW1lXzAwMDMiOgp7CgkiZnJhbWUiOiB7IngiOjQzOCwieSI6MTYyLCJ3IjoyMDUsImgiOjE1OH0sCgkicm90YXRlZCI6IGZhbHNlLAoJInRyaW1tZWQiOiB0cnVlLAoJInNwcml0ZVNvdXJjZVNpemUiOiB7IngiOjcsInkiOjEsInciOjIwNSwiaCI6MTU4fSwKCSJzb3VyY2VTaXplIjogeyJ3IjoyMTgsImgiOjE1OX0sCgkicGl2b3QiOiB7IngiOjAuNSwieSI6MC41fQp9LAoiZnJhbWVfMDAwNCI6CnsKCSJmcmFtZSI6IHsieCI6MiwieSI6MiwidyI6MjE4LCJoIjoxNTl9LAoJInJvdGF0ZWQiOiBmYWxzZSwKCSJ0cmltbWVkIjogZmFsc2UsCgkic3ByaXRlU291cmNlU2l6ZSI6IHsieCI6MCwieSI6MCwidyI6MjE4LCJoIjoxNTl9LAoJInNvdXJjZVNpemUiOiB7InciOjIxOCwiaCI6MTU5fSwKCSJwaXZvdCI6IHsieCI6MC41LCJ5IjowLjV9Cn0sCiJmcmFtZV8wMDA1IjoKewoJImZyYW1lIjogeyJ4IjoyLCJ5IjozMjIsInciOjIxMywiaCI6MTU5fSwKCSJyb3RhdGVkIjogZmFsc2UsCgkidHJpbW1lZCI6IHRydWUsCgkic3ByaXRlU291cmNlU2l6ZSI6IHsieCI6NSwieSI6MCwidyI6MjEzLCJoIjoxNTl9LAoJInNvdXJjZVNpemUiOiB7InciOjIxOCwiaCI6MTU5fSwKCSJwaXZvdCI6IHsieCI6MC41LCJ5IjowLjV9Cn0sCiJmcmFtZV8wMDA2IjoKewoJImZyYW1lIjogeyJ4IjoyMjIsInkiOjE2MiwidyI6MjE0LCJoIjoxNTh9LAoJInJvdGF0ZWQiOiBmYWxzZSwKCSJ0cmltbWVkIjogdHJ1ZSwKCSJzcHJpdGVTb3VyY2VTaXplIjogeyJ4Ijo0LCJ5IjoxLCJ3IjoyMTQsImgiOjE1OH0sCgkic291cmNlU2l6ZSI6IHsidyI6MjE4LCJoIjoxNTl9LAoJInBpdm90IjogeyJ4IjowLjUsInkiOjAuNX0KfSwKImZyYW1lXzAwMDciOgp7CgkiZnJhbWUiOiB7IngiOjIsInkiOjE2MywidyI6MjE2LCJoIjoxNTd9LAoJInJvdGF0ZWQiOiBmYWxzZSwKCSJ0cmltbWVkIjogdHJ1ZSwKCSJzcHJpdGVTb3VyY2VTaXplIjogeyJ4IjoyLCJ5IjoyLCJ3IjoyMTYsImgiOjE1N30sCgkic291cmNlU2l6ZSI6IHsidyI6MjE4LCJoIjoxNTl9LAoJInBpdm90IjogeyJ4IjowLjUsInkiOjAuNX0KfSwKImZyYW1lXzAwMDgiOgp7CgkiZnJhbWUiOiB7IngiOjY0NSwieSI6MzIyLCJ3IjoyMDcsImgiOjE1N30sCgkicm90YXRlZCI6IGZhbHNlLAoJInRyaW1tZWQiOiB0cnVlLAoJInNwcml0ZVNvdXJjZVNpemUiOiB7IngiOjAsInkiOjIsInciOjIwNywiaCI6MTU3fSwKCSJzb3VyY2VTaXplIjogeyJ3IjoyMTgsImgiOjE1OX0sCgkicGl2b3QiOiB7IngiOjAuNSwieSI6MC41fQp9LAoiZnJhbWVfMDAwOSI6CnsKCSJmcmFtZSI6IHsieCI6ODU0LCJ5IjozMjIsInciOjIwNiwiaCI6MTU3fSwKCSJyb3RhdGVkIjogZmFsc2UsCgkidHJpbW1lZCI6IHRydWUsCgkic3ByaXRlU291cmNlU2l6ZSI6IHsieCI6MywieSI6MiwidyI6MjA2LCJoIjoxNTd9LAoJInNvdXJjZVNpemUiOiB7InciOjIxOCwiaCI6MTU5fSwKCSJwaXZvdCI6IHsieCI6MC41LCJ5IjowLjV9Cn0sCiJmcmFtZV8wMDEwIjoKewoJImZyYW1lIjogeyJ4Ijo0MzksInkiOjIsInciOjIwNywiaCI6MTU4fSwKCSJyb3RhdGVkIjogZmFsc2UsCgkidHJpbW1lZCI6IHRydWUsCgkic3ByaXRlU291cmNlU2l6ZSI6IHsieCI6NywieSI6MSwidyI6MjA3LCJoIjoxNTh9LAoJInNvdXJjZVNpemUiOiB7InciOjIxOCwiaCI6MTU5fSwKCSJwaXZvdCI6IHsieCI6MC41LCJ5IjowLjV9Cn0sCiJmcmFtZV8wMDExIjoKewoJImZyYW1lIjogeyJ4Ijo2NDgsInkiOjIsInciOjIwNywiaCI6MTU5fSwKCSJyb3RhdGVkIjogZmFsc2UsCgkidHJpbW1lZCI6IHRydWUsCgkic3ByaXRlU291cmNlU2l6ZSI6IHsieCI6MTEsInkiOjAsInciOjIwNywiaCI6MTU5fSwKCSJzb3VyY2VTaXplIjogeyJ3IjoyMTgsImgiOjE1OX0sCgkicGl2b3QiOiB7IngiOjAuNSwieSI6MC41fQp9LAoiZnJhbWVfMDAxMiI6CnsKCSJmcmFtZSI6IHsieCI6NDMyLCJ5IjozMjIsInciOjIxMSwiaCI6MTU5fSwKCSJyb3RhdGVkIjogZmFsc2UsCgkidHJpbW1lZCI6IHRydWUsCgkic3ByaXRlU291cmNlU2l6ZSI6IHsieCI6NywieSI6MCwidyI6MjExLCJoIjoxNTl9LAoJInNvdXJjZVNpemUiOiB7InciOjIxOCwiaCI6MTU5fSwKCSJwaXZvdCI6IHsieCI6MC41LCJ5IjowLjV9Cn0sCiJmcmFtZV8wMDEzIjoKewoJImZyYW1lIjogeyJ4IjoyMTcsInkiOjMyMiwidyI6MjEzLCJoIjoxNTl9LAoJInJvdGF0ZWQiOiBmYWxzZSwKCSJ0cmltbWVkIjogdHJ1ZSwKCSJzcHJpdGVTb3VyY2VTaXplIjogeyJ4Ijo1LCJ5IjowLCJ3IjoyMTMsImgiOjE1OX0sCgkic291cmNlU2l6ZSI6IHsidyI6MjE4LCJoIjoxNTl9LAoJInBpdm90IjogeyJ4IjowLjUsInkiOjAuNX0KfSwKImZyYW1lXzAwMTQiOgp7CgkiZnJhbWUiOiB7IngiOjIyMiwieSI6MiwidyI6MjE1LCJoIjoxNTh9LAoJInJvdGF0ZWQiOiBmYWxzZSwKCSJ0cmltbWVkIjogdHJ1ZSwKCSJzcHJpdGVTb3VyY2VTaXplIjogeyJ4IjozLCJ5IjoxLCJ3IjoyMTUsImgiOjE1OH0sCgkic291cmNlU2l6ZSI6IHsidyI6MjE4LCJoIjoxNTl9LAoJInBpdm90IjogeyJ4IjowLjUsInkiOjAuNX0KfSwKImZyYW1lXzAwMTUiOgp7CgkiZnJhbWUiOiB7IngiOjg1NCwieSI6MTYzLCJ3IjoyMDYsImgiOjE1N30sCgkicm90YXRlZCI6IGZhbHNlLAoJInRyaW1tZWQiOiB0cnVlLAoJInNwcml0ZVNvdXJjZVNpemUiOiB7IngiOjAsInkiOjIsInciOjIwNiwiaCI6MTU3fSwKCSJzb3VyY2VTaXplIjogeyJ3IjoyMTgsImgiOjE1OX0sCgkicGl2b3QiOiB7IngiOjAuNSwieSI6MC41fQp9fSwKIm1ldGEiOiB7CgkiYXBwIjogImh0dHA6Ly93d3cuY29kZWFuZHdlYi5jb20vdGV4dHVyZXBhY2tlciIsCgkidmVyc2lvbiI6ICIxLjAiLAoJImltYWdlIjogIndhbGtlci5wbmciLAoJImZvcm1hdCI6ICJSR0JBODg4OCIsCgkic2l6ZSI6IHsidyI6MTA2MywiaCI6NDgzfSwKCSJzY2FsZSI6ICIxIiwKCSJzbWFydHVwZGF0ZSI6ICIkVGV4dHVyZVBhY2tlcjpTbWFydFVwZGF0ZTowMGRhNWYyZGRhOTU5ZWIwMzBhMjQ3ZmY5N2E0NjBkZTo1ZWEyNWQ2ZjIyYjFhNTk5Mzg5ZTcxNDk2NDhhZmE0NzpmODhmZDkzMGMzZWM1MmY1ODVkMGMxYmM2OWY0NTgwYyQiCn0KfQo=",a=y({__name:"60fpsWalk",setup(j){const I=l();c(()=>{new C.Game({type:C.AUTO,parent:I.value,width:800,height:600,backgroundColor:16711680,scene:i})});class i extends C.Scene{constructor(){super("Game");o(this,"bg");o(this,"trees")}preload(){this.load.atlas("walker",S,O),this.load.image("sky",d),this.load.image("trees",M)}create(){this.bg=this.add.tileSprite(0,38,800,296,"sky").setOrigin(0,0),this.trees=this.add.tileSprite(0,280,800,320,"trees").setOrigin(0,0);const e={key:"walk",frames:"walker",frameRate:60,repeat:-1};this.anims.create(e),this.add.sprite(400,484,"walker","frame_0000").play("walk")}update(){this.bg.tilePositionX-=2,this.trees.tilePositionX-=6}}return(s,J)=>(m(),g("div",{class:"viewCon",ref_key:"con",ref:I},null,512))}});const p=Z(a,[["__scopeId","data-v-151d5c47"]]);export{p as default};
