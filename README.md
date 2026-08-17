# Three-Tile 示例集合

基于 Three.js 的 3D 瓦片地图示例集合，包含两个独立的示例项目。

## 项目结构

```
demo/
├── index.html                 # 示例集合入口页
├── three-layer-examples/      # 三维图层示例（Vue3 + Element Plus）
└── three-terrain/             # 三维地形生成器（Vue3 + three.js）
```

## 示例项目

### [Three Layer Examples](https://sxguojf.github.io/demo/three-layer-examples/)

- 技术栈：Vue3 + Element Plus
- 功能：三维地形图交互界面，支持图层切换、地形控制、多种数据源展示。

### [Three Terrain](https://sxguojf.github.io/demo/three-terrain/)

- 技术栈：Vue3 + three.js
- 功能：框选地图范围，下载卫星影像与 LERC 高程瓦片，生成可交互三维地形，并支持模型与纹理导出。

## 运行方式

直接通过静态服务器访问 `index.html` 入口页，即可查看示例列表并进入各示例项目。