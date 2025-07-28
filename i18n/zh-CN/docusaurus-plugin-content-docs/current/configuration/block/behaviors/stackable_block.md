---
title: 🥪 可堆叠方块
id: stackable_block
---

| 属性名称 | 属性类型 | 是否必需 |
|---|---|---|
| CUSTOM | int | 是 |

**可堆叠方块**允许您使用指定的物品来堆叠此方块，将其转换为数量更多的形式。

```yml
blocks:
  default:pebble:
    behavior:
      type: stackable_block
      property: pebble  # 数量的属性名称
      items:
        - default:pebble
      sounds:
        stack: minecraft:block.stone.fall
```

![](/img/stackable_block.png)
