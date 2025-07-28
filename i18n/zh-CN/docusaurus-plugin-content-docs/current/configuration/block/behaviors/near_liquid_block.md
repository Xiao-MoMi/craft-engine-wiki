---
title: 🤽 液体附近方块
id: near_liquid_block
---

与**液体上方块**不同，**液体附近方块**不要求液体是源方块。

```yaml
blocks:
  default:flame_cane:
    behavior:
      type: near_liquid_block
      liquid-type: lava
      stackable: true
      positions:
        - -1,-1,0
        - 1,-1,0
        - 0,-1,-1
        - 0,-1,1
```

![](/img/near_liquid_block.png)
