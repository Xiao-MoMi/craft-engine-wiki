---
title: 🌊 液体上方块
id: on_liquid_block
---

**液体上方块**是一种只能放置在流体源表面的方块。目前，只有两种流体选项可用（水和熔岩）。

```yaml
blocks:
  default:reed:
    behavior:
      type: on_liquid_block
      stackable: false
      liquid-type:
        - water # lava
```

![](/img/on_liquid_block_1.png)

![](/img/on_liquid_block_2.png)
