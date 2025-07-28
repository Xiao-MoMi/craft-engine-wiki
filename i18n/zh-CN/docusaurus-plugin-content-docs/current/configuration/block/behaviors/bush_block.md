---
title: 🪻 灌木方块
id: bush_block
---

**灌木方块**是一种必须生长在特定支撑方块上的方块行为。如果其下方的方块被破坏，或者发现其处于无效位置，它将破碎或作为物品掉落。

```yaml
blocks:
  default:fairy_flower:
    behavior:
      type: bush_block
      stackable: false
      blacklist: false # 使用黑名单模式
      delay: 0
      bottom-blocks:
        - custom:xxx
        - minecraft:stone
      bottom-block-tags:
        - minecraft:dirt
        - minecraft:farmland
```

![](/img/bush_block_1.png)

![](/img/bush_block_2.png)
