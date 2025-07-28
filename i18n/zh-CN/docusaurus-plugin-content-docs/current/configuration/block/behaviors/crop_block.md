---
title: 🌽 作物方块
id: crop_block
---

| 属性名称 | 属性类型 | 是否必需 |
|---|---|---|
| age | int | 是 |

**作物方块**是一种随时间生长的方块。当接收到随机刻时，它有机会进入下一个生长阶段。但是，如果植物缺乏足够的光照，它将停止生长或作为物品掉落。

```yml
blocks:
  default:ender_pearl_flower:
    behavior:
      type: crop_block
      grow-speed: 0.25  # 0~1，随机刻生长的几率
      light-requirement: 9  # 此作物所需的光照
      is-bone-meal-target: true # 默认为 true
      bone-meal-age-bonus:
        type: uniform
        min: 1
        max: 3
```

![](/img/crop_block.png)
