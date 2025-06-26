# 如何优化pixi大规模渲染动态sprite

情景描述，pixi的stage里存在大量可移动的sprite，通过websockt持续推送轨迹，实时更新位置，
当sprite超过一定数量，则页面掉帧严重。
``` javascript
const container = new Container()

for (let i = 0; i < 10000; i++) {
  const bunny = new Sprite(texture)
  container.addChild(bunny)
}
```
