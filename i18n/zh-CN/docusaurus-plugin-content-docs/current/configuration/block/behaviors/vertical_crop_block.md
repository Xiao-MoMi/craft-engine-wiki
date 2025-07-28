---
title: 🎍 垂直作物方块
id: vertical_crop_block
---

| 属性名称 | 属性类型 | 是否必需 |
|---|---|---|
| age | int | 是 |

**垂直作物方块**是一种随时间向上/向下生长的方块。

```yml
blocks:
  default:flame_cane:
    behaviors:
      - type: vertical_crop_block
        max-height: 4
        grow-speed: 0.333
        direction: down  # up/down
      - type: hanging_block
        stackable: true
        delay: 1
```

![](/img/vertical_crop_block.png)
